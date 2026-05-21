#!/usr/bin/env node

import crypto from "node:crypto";
import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";
import { XMLParser } from "fast-xml-parser";
import TurndownService from "turndown";

const SITE_ORIGIN = "https://m3.material.io";
const ROBOTS_URL = `${SITE_ORIGIN}/robots.txt`;
const SITEMAP_URL = `${SITE_ORIGIN}/sitemap.xml`;
const SITE_META_URL = `${SITE_ORIGIN}/site_meta.js`;
const MAIN_BUNDLE_FALLBACK = "/static/angular/main.e6f844fa3c77a08d.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");
const DOCS_DIR = path.join(ROOT_DIR, "docs");
const ASSETS_DIR = path.join(ROOT_DIR, "assets");
const METADATA_DIR = path.join(ROOT_DIR, "metadata");
const CACHE_DIR = path.join(ROOT_DIR, ".cache", "m3");

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

turndown.addRule("strikethrough", {
  filter: ["del", "s"],
  replacement: (content) => `~~${content}~~`,
});

turndown.addRule("video", {
  filter: "video",
  replacement: (_content, node) => {
    const src = node.getAttribute("src");
    const label = node.getAttribute("aria-label") || node.getAttribute("title") || "Video";
    return src ? `\n\n[${label}](${src})\n\n` : "";
  },
});

const execFileAsync = promisify(execFile);
const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm", ".m4v"]);

function parseArgs(argv) {
  const args = {
    limit: null,
    concurrency: 4,
    skipAssets: false,
    forceAssets: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--limit") {
      args.limit = Number(argv[++i]);
    } else if (arg.startsWith("--limit=")) {
      args.limit = Number(arg.slice("--limit=".length));
    } else if (arg === "--concurrency") {
      args.concurrency = Number(argv[++i]);
    } else if (arg.startsWith("--concurrency=")) {
      args.concurrency = Number(arg.slice("--concurrency=".length));
    } else if (arg === "--skip-assets") {
      args.skipAssets = true;
    } else if (arg === "--force-assets") {
      args.forceAssets = true;
    } else if (/^\d+$/u.test(arg) && args.limit === null) {
      args.limit = Number(arg);
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  if (args.limit !== null && (!Number.isInteger(args.limit) || args.limit < 1)) {
    throw new Error("--limit must be a positive integer.");
  }
  if (!Number.isInteger(args.concurrency) || args.concurrency < 1) {
    throw new Error("--concurrency must be a positive integer.");
  }

  return args;
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function trimSlashes(value) {
  return value.replace(/^\/+|\/+$/g, "");
}

function kebabCase(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/&/g, " ")
    .replace(/['’]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function hashValue(value, length = 12) {
  return crypto.createHash("sha256").update(value).digest("hex").slice(0, length);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function decodeHtmlEntities(value) {
  return String(value || "")
    .replace(/&#x([0-9a-f]+);/giu, (_match, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#([0-9]+);/gu, (_match, code) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&quot;/gu, "\"")
    .replace(/&apos;/gu, "'")
    .replace(/&#39;/gu, "'")
    .replace(/&amp;/gu, "&");
}

function quoteYaml(value) {
  return JSON.stringify(value ?? "");
}

function ensureArray(value) {
  if (value === undefined || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

function firstString(...values) {
  return values.find((value) => typeof value === "string" && value.trim()) || "";
}

function cleanMarkdown(markdown) {
  return markdown
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim();
}

function contentTypeToExtension(contentType) {
  const normalized = String(contentType || "").split(";")[0].trim().toLowerCase();
  const mapping = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/gif": ".gif",
    "image/webp": ".webp",
    "image/svg+xml": ".svg",
    "video/mp4": ".mp4",
    "video/quicktime": ".mov",
    "video/webm": ".webm",
    "application/pdf": ".pdf",
  };
  return mapping[normalized] || "";
}

function inferExtensionFromUrl(url, hintName = "") {
  const hintExt = path.extname(hintName.split("?")[0] || "").toLowerCase();
  if (hintExt && hintExt.length <= 8) {
    return hintExt;
  }

  try {
    const parsed = new URL(url);
    const decoded = decodeURIComponent(parsed.pathname);
    const base = path.basename(decoded);
    const ext = path.extname(base.split("?")[0] || "").toLowerCase();
    if (ext && ext.length <= 8) {
      return ext;
    }
  } catch {
    return "";
  }

  return "";
}

function safeFileBase(url, hintName = "") {
  let base = hintName || "";
  if (!base) {
    try {
      const parsed = new URL(url);
      base = path.basename(decodeURIComponent(parsed.pathname));
    } catch {
      base = "asset";
    }
  }

  base = base
    .replace(/[<>:"/\\|?*\u0000-\u001f]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!base || base === "." || base === "..") {
    base = "asset";
  }

  return base.slice(0, 96);
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function writeTextFile(filePath, content) {
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, `${content.replace(/\s+$/u, "")}\n`, "utf8");
}

class HttpClient {
  constructor() {
    this.cacheDir = CACHE_DIR;
  }

  async fetch(url, options = {}) {
    const response = await fetch(url, {
      headers: {
        "user-agent": "md3-reference-hub/0.1 (+local Markdown mirror)",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}: ${url}`);
    }

    return response;
  }

  async fetchText(url) {
    const cachePath = this.cachePath(url, ".txt");
    if (existsSync(cachePath)) {
      return fs.readFile(cachePath, "utf8");
    }

    const response = await this.fetch(url);
    const text = await response.text();
    await ensureDir(path.dirname(cachePath));
    await fs.writeFile(cachePath, text, "utf8");
    return text;
  }

  async fetchJson(url) {
    const cachePath = this.cachePath(url, ".json");
    if (existsSync(cachePath)) {
      return JSON.parse(await fs.readFile(cachePath, "utf8"));
    }

    const response = await this.fetch(url);
    const jsonText = await response.text();
    await ensureDir(path.dirname(cachePath));
    await fs.writeFile(cachePath, jsonText, "utf8");
    return JSON.parse(jsonText);
  }

  async download(url, filePath, force = false) {
    if (!force && existsSync(filePath)) {
      return { downloaded: false, contentType: null, bytes: 0 };
    }

    if (this.shouldUsePythonDownload(url)) {
      return this.downloadWithPython(url, filePath, force);
    }

    try {
      const response = await this.fetch(url);
      const contentType = response.headers.get("content-type");
      const buffer = Buffer.from(await response.arrayBuffer());
      await ensureDir(path.dirname(filePath));
      await fs.writeFile(filePath, buffer);
      return { downloaded: true, contentType, bytes: buffer.length };
    } catch (error) {
      return this.downloadWithCurl(url, filePath, force, error);
    }
  }

  cachePath(url, extension) {
    const hash = hashValue(url, 32);
    return path.join(this.cacheDir, `${hash}${extension}`);
  }

  async downloadWithCurl(url, filePath, force, originalError) {
    if (!force && existsSync(filePath)) {
      return { downloaded: false, contentType: null, bytes: 0 };
    }

    await ensureDir(path.dirname(filePath));
    const args = ["--ssl-no-revoke", "-L", "--fail", "--silent", "--show-error", "--output", filePath, url];
    try {
      await execFileAsync("curl.exe", args, { windowsHide: true, maxBuffer: 1024 * 1024 });
    } catch (curlError) {
      return this.downloadWithPython(url, filePath, force, originalError, curlError);
    }
    const stat = await fs.stat(filePath);
    return { downloaded: true, contentType: null, bytes: stat.size };
  }

  shouldUsePythonDownload(url) {
    try {
      const host = new URL(url).hostname;
      return host === "lh3.googleusercontent.com"
        || host === "firebasestorage.googleapis.com"
        || host === "kstatic.googleusercontent.com";
    } catch {
      return false;
    }
  }

  async downloadWithPython(url, filePath, force, originalError = null, curlError = null) {
    if (!force && existsSync(filePath)) {
      return { downloaded: false, contentType: null, bytes: 0 };
    }

    const script = [
      "import os, sys, urllib.request",
      "url = sys.argv[1]",
      "target = sys.argv[2]",
      "os.makedirs(os.path.dirname(target), exist_ok=True)",
      "urllib.request.urlretrieve(url, target)",
    ].join("; ");

    try {
      await execFileAsync("python", ["-c", script, url, filePath], { windowsHide: true, maxBuffer: 1024 * 1024 });
    } catch (pythonError) {
      if (!originalError || !curlError) {
        throw new Error(`python download failed: ${pythonError.message}`);
      }
      throw new Error(`${originalError.message}; curl fallback failed: ${curlError.message}; python fallback failed: ${pythonError.message}`);
    }

    const stat = await fs.stat(filePath);
    return { downloaded: true, contentType: null, bytes: stat.size };
  }
}

class AssetRegistry {
  constructor() {
    this.assets = new Map();
  }

  register(url, type = "files", options = {}) {
    if (!url || typeof url !== "string") {
      return null;
    }

    const normalizedUrl = decodeHtmlEntities(url).trim();
    if (!/^https?:\/\//i.test(normalizedUrl)) {
      return null;
    }

    if (this.assets.has(normalizedUrl)) {
      return this.assets.get(normalizedUrl);
    }

    const folder = type === "image" || type === "images" ? "images" : type === "video" || type === "videos" ? "videos" : "files";
    const ext = inferExtensionFromUrl(normalizedUrl, options.fileName) || (folder === "images" ? ".png" : folder === "videos" ? ".mp4" : ".bin");
    let base = safeFileBase(normalizedUrl, options.fileName);
    if (!path.extname(base)) {
      base = `${base}${ext}`;
    }

    const fileName = `${hashValue(normalizedUrl)}-${base}`;
    const outputPath = path.join(ASSETS_DIR, folder, fileName);
    const entry = {
      source_url: normalizedUrl,
      type: folder,
      file: toPosix(path.relative(ROOT_DIR, outputPath)),
      output_path: outputPath,
      alt: options.alt || "",
      caption: options.caption || "",
      downloaded: false,
      bytes: 0,
      error: null,
    };

    this.assets.set(normalizedUrl, entry);
    return entry;
  }

  relativePath(asset, fromFile) {
    return toPosix(path.relative(path.dirname(fromFile), path.join(ROOT_DIR, asset.file)));
  }

  list() {
    return Array.from(this.assets.values());
  }
}

function parseSiteMeta(text) {
  const json = text.replace(/^window\.site_meta\s*=\s*/u, "").trim().replace(/;\s*$/u, "");
  return JSON.parse(json);
}

function parseSitemap(text) {
  const parser = new XMLParser({
    ignoreAttributes: false,
    removeNSPrefix: false,
  });
  const parsed = parser.parse(text);
  const urls = ensureArray(parsed.urlset?.url);

  return urls.map((entry) => ({
    loc: entry.loc,
    lastmod: entry.lastmod || null,
    images: ensureArray(entry["image:image"]).map((image) => image["image:loc"]).filter(Boolean),
    videos: ensureArray(entry["video:video"]).map((video) => ({
      loc: video["video:content_loc"],
      title: video["video:title"] || "",
    })).filter((video) => video.loc),
  })).filter((entry) => entry.loc);
}

function parseRobots(text) {
  const disallows = [];
  for (const line of text.split(/\r?\n/u)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }
    const match = /^disallow:\s*(.+)$/iu.exec(trimmed);
    if (match) {
      disallows.push(match[1].trim());
    }
  }
  return disallows;
}

function isDisallowedByRobots(url, disallows) {
  const parsed = new URL(url);
  const pathAndSearch = `${parsed.pathname}${parsed.search}`;

  for (const pattern of disallows) {
    if (pattern === "/") {
      return true;
    }
    if (pattern.includes("*")) {
      const regex = new RegExp(`^${pattern.split("*").map(escapeRegExp).join(".*")}`, "u");
      if (regex.test(pathAndSearch)) {
        return true;
      }
    } else if (pathAndSearch.startsWith(pattern)) {
      return true;
    }
  }
  return false;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractMainBundleUrl(indexHtml) {
  const match = /<script\s+src="([^"]*\/static\/angular\/main\.[^"]+\.js)"/u.exec(indexHtml);
  return new URL(match?.[1] || MAIN_BUNDLE_FALLBACK, SITE_ORIGIN).toString();
}

function findObjectEnd(text, start) {
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = start; i < text.length; i += 1) {
    const char = text[i];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === "\"") {
        inString = false;
      }
      continue;
    }

    if (char === "\"") {
      inString = true;
    } else if (char === "{") {
      depth += 1;
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        return i + 1;
      }
    }
  }

  return -1;
}

function extractRouteDefinitions(mainBundleText, siteMeta) {
  const routes = new Map();
  const slugPattern = /"slug":"([^"]+)"/gu;
  let match;

  while ((match = slugPattern.exec(mainBundleText))) {
    const start = mainBundleText.lastIndexOf("{", match.index);
    if (start < 0) {
      continue;
    }
    const end = findObjectEnd(mainBundleText, start);
    if (end < 0) {
      continue;
    }

    const raw = mainBundleText.slice(start, end);
    try {
      const route = JSON.parse(raw);
      if (route.slug && route.documentId && route.collectionId && !routes.has(route.slug)) {
        routes.set(route.slug, route);
      }
    } catch {
      // Some object literals in the bundle are not route records.
    }
  }

  const routeEntries = Object.entries(siteMeta.routes || {});
  for (const [key, value] of routeEntries) {
    const slug = trimSlashes(key);
    const reference = value?.reference;
    const documentId = reference?.document_id || reference?.documentId;
    const collectionId = reference?.collection_id || reference?.collectionId;
    if (slug && documentId && collectionId && !routes.has(slug)) {
      routes.set(slug, {
        slug,
        documentId: String(documentId),
        collectionId: String(collectionId),
      });
    }
  }

  return Array.from(routes.values());
}

function buildRouteIndex(routes) {
  const bySlug = new Map();
  const aliases = new Map();

  for (const route of routes) {
    bySlug.set(route.slug, route);
    aliases.set(route.slug, { route, tabSlug: null });

    for (const alias of route.alternateSlugs || []) {
      aliases.set(trimSlashes(alias), { route, tabSlug: null });
    }

    for (const tab of route.tabs || []) {
      const canonicalTabSlug = kebabCase(tab.label);
      aliases.set(`${route.slug}/${canonicalTabSlug}`, { route, tabSlug: canonicalTabSlug });
      for (const alias of tab.alternateSlugs || []) {
        aliases.set(`${route.slug}/${trimSlashes(alias)}`, { route, tabSlug: canonicalTabSlug });
      }
      if (route.carbonPath) {
        aliases.set(`${route.carbonPath}/${canonicalTabSlug}`, { route, tabSlug: canonicalTabSlug });
        for (const alias of tab.alternateSlugs || []) {
          aliases.set(`${route.carbonPath}/${trimSlashes(alias)}`, { route, tabSlug: canonicalTabSlug });
        }
      }
    }

    if (route.carbonPath) {
      aliases.set(route.carbonPath, { route, tabSlug: null });
    }
  }

  return { bySlug, aliases };
}

function matchRouteForPath(pathname, routeIndex) {
  const slug = trimSlashes(pathname);
  if (!slug) {
    return null;
  }
  if (routeIndex.aliases.has(slug)) {
    return routeIndex.aliases.get(slug);
  }

  const segments = slug.split("/");
  for (let split = segments.length - 1; split > 0; split -= 1) {
    const base = segments.slice(0, split).join("/");
    const suffix = segments.slice(split).join("/");
    const route = routeIndex.bySlug.get(base);
    if (!route?.tabs) {
      continue;
    }
    for (const tab of route.tabs) {
      const canonicalTabSlug = kebabCase(tab.label);
      const tabSlugs = new Set([canonicalTabSlug, ...(tab.alternateSlugs || []).map(trimSlashes)]);
      if (tabSlugs.has(suffix)) {
        return { route, tabSlug: canonicalTabSlug };
      }
    }
  }

  return null;
}

function outputPathForUrl(url) {
  const parsed = new URL(url);
  const pathname = decodeURIComponent(parsed.pathname);
  const slug = trimSlashes(pathname);
  if (!slug) {
    return path.join(DOCS_DIR, "index.md");
  }

  const normalized = slug.replace(/\.html$/u, "");
  return path.join(DOCS_DIR, ...normalized.split("/")) + ".md";
}

function sourceSection(url) {
  const parsed = new URL(url);
  const slug = trimSlashes(parsed.pathname);
  return slug ? slug.split("/")[0] : "home";
}

function filterEntries(entries, disallows) {
  const seen = new Set();
  const allowed = [];
  const skipped = [];

  for (const entry of entries) {
    const url = new URL(entry.loc);
    const reason = url.origin !== SITE_ORIGIN
      ? "external_origin"
      : url.search
        ? "query_url"
        : isDisallowedByRobots(entry.loc, disallows)
          ? "robots_disallow"
          : seen.has(entry.loc)
            ? "duplicate"
            : null;

    if (reason) {
      skipped.push({ source_url: entry.loc, reason });
      continue;
    }

    seen.add(entry.loc);
    allowed.push(entry);
  }

  return { allowed, skipped };
}

function selectEntries(entries, limit, routeIndex) {
  if (!limit) {
    return entries;
  }

  const selected = [];
  const used = new Set();
  const addFirst = (predicate) => {
    if (selected.length >= limit) {
      return;
    }
    const entry = entries.find((candidate) => !used.has(candidate.loc) && predicate(candidate));
    if (entry) {
      selected.push(entry);
      used.add(entry.loc);
    }
  };

  addFirst((entry) => new URL(entry.loc).pathname === "/");
  addFirst((entry) => new URL(entry.loc).pathname.startsWith("/blog/"));
  addFirst((entry) => {
    const url = new URL(entry.loc);
    const match = matchRouteForPath(url.pathname, routeIndex);
    return url.pathname.startsWith("/components/") && Boolean(match?.route?.exportedCarbonFileId);
  });
  addFirst((entry) => {
    const url = new URL(entry.loc);
    const match = matchRouteForPath(url.pathname, routeIndex);
    return url.pathname.startsWith("/foundations/") && Boolean(match?.route?.exportedCarbonFileId);
  });
  addFirst((entry) => {
    const url = new URL(entry.loc);
    const match = matchRouteForPath(url.pathname, routeIndex);
    return url.pathname.startsWith("/styles/") && Boolean(match?.route?.exportedCarbonFileId);
  });

  for (const entry of entries) {
    if (selected.length >= limit) {
      break;
    }
    if (!used.has(entry.loc)) {
      selected.push(entry);
      used.add(entry.loc);
    }
  }

  return selected;
}

function buildUrlOutputMap(entries, routeIndex) {
  const map = new Map();
  for (const entry of entries) {
    const parsed = new URL(entry.loc);
    const outputPath = outputPathForUrl(entry.loc);
    map.set(parsed.pathname, outputPath);

    const match = matchRouteForPath(parsed.pathname, routeIndex);
    if (match?.route?.carbonPath) {
      const aliases = [`/${match.route.carbonPath}`];
      if (match.tabSlug) {
        aliases.push(`/${match.route.carbonPath}/${match.tabSlug}`);
      }
      for (const alias of aliases) {
        if (!map.has(alias)) {
          map.set(alias, outputPath);
        }
      }
    }
  }
  return map;
}

function rewriteLink(href, currentFile, urlOutputMap) {
  if (href === null || href === undefined) {
    return "";
  }
  href = decodeHtmlEntities(String(href).trim());
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
    return href;
  }
  const hasScheme = /^[a-z][a-z0-9+.-]*:/iu.test(href);
  if (!hasScheme && /^[a-z0-9.-]+\.[a-z]{2,}(?:[/#?:]|$)/iu.test(href)) {
    return `https://${href}`;
  }
  if (!hasScheme && !href.startsWith("/")) {
    const localTarget = path.resolve(path.dirname(currentFile), href);
    const assetRelative = path.relative(ASSETS_DIR, localTarget);
    if (assetRelative && !assetRelative.startsWith("..") && !path.isAbsolute(assetRelative)) {
      return href;
    }
  }

  let parsed;
  try {
    parsed = new URL(href, SITE_ORIGIN);
  } catch {
    return href;
  }

  if (parsed.origin !== SITE_ORIGIN) {
    return href;
  }

  const targetPath = parsed.pathname;
  const outputPath = urlOutputMap.get(targetPath);
  if (!outputPath) {
    return parsed.toString();
  }

  const relative = toPosix(path.relative(path.dirname(currentFile), outputPath));
  return `${relative}${parsed.hash || ""}`;
}

function htmlToMarkdown(html, context) {
  if (!html) {
    return "";
  }

  const $ = cheerio.load(`<body>${html}</body>`, { decodeEntities: false });
  $("script, style").remove();

  $("mio-link").each((_index, element) => {
    const node = $(element);
    const href = node.attr("link") || node.attr("href") || "";
    const label = node.text() || href;
    node.replaceWith(`<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`);
  });

  const layoutTags = $("mio-col-set, mio-column, mio-table").toArray().reverse();
  for (const element of layoutTags) {
    const node = $(element);
    node.replaceWith(node.html() || "");
  }

  $("a").each((_index, element) => {
    const node = $(element);
    const href = node.attr("href");
    if (href) {
      node.attr("href", rewriteLink(href, context.outputPath, context.urlOutputMap));
    }
  });

  $("img").each((_index, element) => {
    const node = $(element);
    const src = node.attr("src");
    if (!src) {
      return;
    }
    if (!/^https?:\/\//iu.test(src)) {
      return;
    }
    const absolute = new URL(src, SITE_ORIGIN).toString();
    const asset = context.assets.register(absolute, "images", {
      alt: node.attr("alt") || "",
    });
    if (asset) {
      node.attr("src", context.assets.relativePath(asset, context.outputPath));
    }
  });

  return cleanMarkdown(turndown.turndown($("body").html() || ""));
}

function renderFrontmatter(page, assets) {
  const assetFiles = assets.map((asset) => asset.file);
  const lines = [
    "---",
    `title: ${quoteYaml(page.title)}`,
    `source_url: ${quoteYaml(page.source_url)}`,
    `lastmod: ${quoteYaml(page.lastmod || "")}`,
    `snapshot_at: ${quoteYaml(page.snapshot_at)}`,
    `section: ${quoteYaml(page.section)}`,
  ];

  if (assetFiles.length) {
    lines.push("assets:");
    for (const file of assetFiles) {
      lines.push(`  - ${quoteYaml(file)}`);
    }
  } else {
    lines.push("assets: []");
  }
  lines.push("---");
  return lines.join("\n");
}

function renderImage(asset, alt, caption, outputPath, assets) {
  const relative = assets.relativePath(asset, outputPath);
  const lines = [`![${alt || "Image"}](${relative})`];
  if (caption) {
    lines.push("", `_${plainText(caption)}_`);
  }
  return lines.join("\n");
}

function renderVideo(asset, label, outputPath, assets) {
  const relative = assets.relativePath(asset, outputPath);
  const safeLabel = label || "Video";
  return `<video controls src="${relative}" title="${escapeHtml(safeLabel)}"></video>\n\n[Open video](${relative})`;
}

function cleanInline(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function plainText(value) {
  const text = String(value || "");
  if (!/[<>]/u.test(text)) {
    return cleanInline(text);
  }
  return cleanInline(cheerio.load(`<body>${text}</body>`)("body").text());
}

function collectPageAssetsBeforeFrontmatter(markdownParts, pageAssets, page) {
  return `${renderFrontmatter(page, pageAssets)}\n\n${cleanMarkdown(markdownParts.join("\n\n"))}\n`;
}

function mediaFromImageObject(image) {
  if (!image) {
    return null;
  }
  return {
    url: image.file?.url || image.url || image.imageUrl,
    alt: image.a11y_description || image.altText || image.image_alt_text || "",
    caption: image.caption || "",
    fileName: image.file?.file_name || "",
  };
}

function mediaFromVideoObject(video) {
  if (!video) {
    return null;
  }
  return {
    url: video.file?.url || video.url || video.videoUrl,
    alt: video.a11y_description || video.title || "",
    caption: video.caption || "",
    fileName: video.file?.file_name || "",
  };
}

function replaceBlogPlaceholders(html, block, context, pageAssets) {
  const $ = cheerio.load(`<body>${decodeMioPlaceholders(html || "")}</body>`, { decodeEntities: false });

  $("mio-image").each((_index, element) => {
    const node = $(element);
    const image = mediaFromImageObject(block.image?.[Number(node.attr("index") || 0)]);
    if (!image?.url) {
      node.replaceWith("");
      return;
    }
    const asset = context.assets.register(image.url, "images", image);
    pageAssets.add(asset.source_url);
    node.replaceWith(`<figure><img src="${escapeHtml(context.assets.relativePath(asset, context.outputPath))}" alt="${escapeHtml(image.alt)}"><figcaption>${escapeHtml(image.caption)}</figcaption></figure>`);
  });

  $("mio-video").each((_index, element) => {
    const node = $(element);
    const video = mediaFromVideoObject(block.video?.[Number(node.attr("index") || 0)]);
    if (!video?.url) {
      node.replaceWith("");
      return;
    }
    const asset = context.assets.register(video.url, "videos", video);
    pageAssets.add(asset.source_url);
    const relative = context.assets.relativePath(asset, context.outputPath);
    const label = video.alt || video.caption || "Video";
    node.replaceWith(`<p><a href="${escapeHtml(relative)}">Video: ${escapeHtml(label)}</a></p>`);
  });

  $("mio-code-snippet").each((_index, element) => {
    const node = $(element);
    const snippet = block.code_snippet?.[Number(node.attr("index") || 0)];
    const code = snippet?.code || snippet?.content || snippet?.snippet || "";
    const language = snippet?.language || "";
    node.replaceWith(`<pre><code class="language-${escapeHtml(language)}">${escapeHtml(code)}</code></pre>`);
  });

  return $("body").html() || "";
}

function decodeMioPlaceholders(html) {
  return String(html || "")
    .replace(/&lt;(\/?mio-[a-z-]+\b.*?)&gt;/giu, "<$1>")
    .replace(/&quot;/gu, "\"")
    .replace(/&apos;|&#39;|&#x27;/gu, "'");
}

async function renderBlogPage(entry, siteMeta, context, manifestPage) {
  const slug = trimSlashes(new URL(entry.loc).pathname).replace(/^blog\//u, "");
  const post = (siteMeta.blog_posts || []).find((candidate) => candidate.slug === slug);
  if (!post) {
    throw new Error(`Blog post metadata not found for ${slug}`);
  }

  const data = await context.http.fetchJson(`${SITE_ORIGIN}/page-data/Posts/${post.document_id}.json?cachebust=1`);
  const pageAssets = new Set();
  const parts = [`# ${data.title || post.title}`, data.subtitle || ""];

  const hero = mediaFromImageObject(data.hero);
  if (hero?.url) {
    const asset = context.assets.register(hero.url, "images", hero);
    pageAssets.add(asset.source_url);
    parts.push(renderImage(asset, hero.alt, hero.caption, context.outputPath, context.assets));
  }

  if (data.published_date) {
    parts.push(`Published: ${data.published_date}`);
  }

  for (const block of ensureArray(data.body_content)) {
    const replacedHtml = replaceBlogPlaceholders(block.content || "", block, context, pageAssets);
    const markdown = htmlToMarkdown(replacedHtml, context);
    if (markdown) {
      parts.push(markdown);
    }
  }

  manifestPage.title = data.title || post.title || slug;
  manifestPage.kind = "blog";
  manifestPage.page_data_url = `${SITE_ORIGIN}/page-data/Posts/${post.document_id}.json`;
  manifestPage.assets = Array.from(pageAssets);

  return collectPageAssetsBeforeFrontmatter(parts, Array.from(pageAssets).map((url) => context.assets.assets.get(url)).filter(Boolean), {
    title: manifestPage.title,
    source_url: entry.loc,
    lastmod: entry.lastmod,
    snapshot_at: context.snapshotAt,
    section: sourceSection(entry.loc),
  });
}

function selectCarbonSections(carbonData, route, tabSlug) {
  const sections = ensureArray(carbonData.sections);
  if (!tabSlug) {
    return route.tabs?.length > 1 ? sections.slice(0, 1) : sections;
  }
  const matched = sections.find((section) => kebabCase(section.name) === tabSlug);
  return matched ? [matched] : sections.slice(0, 1);
}

async function renderResourceChunk(chunk, context) {
  const resourceName = chunk.resourceName;
  const type = chunk.libraryModuleType;
  if (!resourceName || !type) {
    return "";
  }

  const resourcePath = resourceName.split("/").join("_");
  let url;
  if (type === "TOKEN_TABLE") {
    const componentName = resourceName.split("components/")[1];
    url = `${SITE_ORIGIN}/_dsm/data/dsdb-m3/${context.carbonVersion}/TOKEN_TABLE.${componentName}.json`;
  } else if (type === "STATUS_TABLE" || type === "RESOURCE_SYMBOLS") {
    url = `${SITE_ORIGIN}/_dsm/data/dsdb-m3/${context.carbonVersion}/${resourcePath}.json`;
  } else {
    const secondSegment = resourceName.split("/")[1] || resourcePath;
    url = `${SITE_ORIGIN}/_dsm/data/dsdb-m3/${context.carbonVersion}/${type}.${secondSegment}.json`;
  }

  try {
    const resourceData = await context.http.fetchJson(url);
    const summary = summarizeResourceData(resourceData);
    return summary ? `### ${type}\n\n${summary}` : `### ${type}\n\nResource data: ${url}`;
  } catch (error) {
    return `### ${type}\n\nResource data unavailable locally during sync: ${url}\n\nError: ${error.message}`;
  }
}

function summarizeResourceData(resourceData) {
  if (!resourceData || typeof resourceData !== "object") {
    return "";
  }

  if (Array.isArray(resourceData)) {
    return tableFromObjects(resourceData.slice(0, 50));
  }

  if (Array.isArray(resourceData.connections)) {
    return tableFromObjects(resourceData.connections.map((connection) => ({
      Type: connection.resourceType || "",
      Resource: connection.displayName || "",
      Status: connection.status || "",
      URL: connection.resourceUrl || "",
    })));
  }

  if (Array.isArray(resourceData.tokens)) {
    return tableFromObjects(resourceData.tokens.slice(0, 100));
  }

  const keys = Object.keys(resourceData).slice(0, 12);
  return keys.map((key) => `- **${key}:** ${formatScalar(resourceData[key])}`).join("\n");
}

function tableFromObjects(rows) {
  if (!rows.length) {
    return "";
  }
  const headers = Array.from(new Set(rows.flatMap((row) => Object.keys(row)))).slice(0, 6);
  const lines = [
    `| ${headers.join(" |")} |`,
    `| ${headers.map(() => "---").join(" |")} |`,
  ];
  for (const row of rows) {
    lines.push(`| ${headers.map((header) => cleanTableCell(formatScalar(row[header]))).join(" | ")} |`);
  }
  return lines.join("\n");
}

function cleanTableCell(value) {
  return String(value || "").replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
}

function formatScalar(value) {
  if (value === null || value === undefined) {
    return "";
  }
  if (Array.isArray(value)) {
    return `${value.length} items`;
  }
  if (typeof value === "object") {
    const label = firstString(value.displayName, value.title, value.label, value.name, value.id);
    return label || `${Object.keys(value).length} fields`;
  }
  const text = String(value);
  return text.length > 500 ? `${text.slice(0, 497)}...` : text;
}

async function renderCarbonChunk(chunk, context, pageAssets) {
  if (chunk.isHidden) {
    return "";
  }

  if (chunk.htmlValue && chunk.contentChunkType === "TEXT") {
    return htmlToMarkdown(chunk.htmlValue, context);
  }

  if (chunk.snippetCode) {
    const language = chunk.snippetLanguage || "";
    return `\`\`\`${language}\n${chunk.snippetCode}\n\`\`\``;
  }

  if (chunk.imageUrl || chunk.imageUrlFife) {
    const asset = context.assets.register(chunk.imageUrl || chunk.imageUrlFife, "images", {
      alt: chunk.altText || "",
      caption: chunk.footer || "",
    });
    pageAssets.add(asset.source_url);
    return renderImage(asset, chunk.altText, chunk.footer, context.outputPath, context.assets);
  }

  if (chunk.videoUrl) {
    const asset = context.assets.register(chunk.videoUrl, "videos", {
      alt: chunk.altText || "",
      caption: chunk.footer || "",
    });
    pageAssets.add(asset.source_url);
    return renderVideo(asset, chunk.altText || chunk.footer, context.outputPath, context.assets);
  }

  if (chunk.linkUrl) {
    const href = rewriteLink(chunk.linkUrl, context.outputPath, context.urlOutputMap);
    return `[${chunk.altText || chunk.linkUrl}](${href})`;
  }

  if (chunk.contentChunkType === "RESOURCE") {
    return renderResourceChunk(chunk, context);
  }

  return "";
}

async function renderCarbonPage(entry, match, context, manifestPage) {
  const route = match.route;
  const pageDataUrl = `${SITE_ORIGIN}/page-data/${route.collectionId}/${route.documentId}.json?cachebust=1`;
  const carbonUrl = `${SITE_ORIGIN}/_dsm/content/m3/${context.carbonVersion}/${route.exportedCarbonFileId}`;
  const [pageData, carbonData] = await Promise.all([
    context.http.fetchJson(pageDataUrl),
    context.http.fetchJson(carbonUrl),
  ]);

  const sections = selectCarbonSections(carbonData, route, match.tabSlug);
  const pageAssets = new Set();
  const title = carbonData.headerTitle || carbonData.title || pageData.title || route.slug;
  const parts = [`# ${title}`];

  if (carbonData.description || pageData.description) {
    parts.push(carbonData.description || pageData.description);
  }

  const heroUrl = carbonData.headerImageUrl || pageData.page_hero?.file?.url || pageData.hero?.file?.url;
  if (heroUrl) {
    const asset = context.assets.register(heroUrl, "images", {
      alt: title,
    });
    pageAssets.add(asset.source_url);
    parts.push(renderImage(asset, title, "", context.outputPath, context.assets));
  }

  for (const section of sections) {
    if (section.name && sections.length > 1) {
      parts.push(`## ${section.name}`);
    } else if (section.name && match.tabSlug) {
      parts.push(`## ${section.name}`);
    }

    for (const block of ensureArray(section.contentBlocks)) {
      if (block.isHidden) {
        continue;
      }
      if (block.title) {
        parts.push(`### ${block.title}`);
      }
      for (const chunk of ensureArray(block.contentChunks)) {
        const markdown = await renderCarbonChunk(chunk, context, pageAssets);
        if (markdown) {
          parts.push(markdown);
        }
      }
    }
  }

  manifestPage.title = title;
  manifestPage.kind = "carbon";
  manifestPage.route_slug = route.slug;
  manifestPage.tab = match.tabSlug || null;
  manifestPage.page_data_url = pageDataUrl.replace("?cachebust=1", "");
  manifestPage.carbon_url = carbonUrl;
  manifestPage.assets = Array.from(pageAssets);

  return collectPageAssetsBeforeFrontmatter(parts, Array.from(pageAssets).map((url) => context.assets.assets.get(url)).filter(Boolean), {
    title,
    source_url: entry.loc,
    lastmod: entry.lastmod,
    snapshot_at: context.snapshotAt,
    section: sourceSection(entry.loc),
  });
}

async function renderLandingPage(entry, match, context, manifestPage) {
  let data;
  let pageDataUrl = null;
  if (match?.route?.documentId && match?.route?.collectionId) {
    pageDataUrl = `${SITE_ORIGIN}/page-data/${match.route.collectionId}/${match.route.documentId}.json?cachebust=1`;
    data = await context.http.fetchJson(pageDataUrl);
  } else if (new URL(entry.loc).pathname === "/") {
    data = context.siteMeta.homepage || {};
  } else {
    throw new Error(`No route metadata for ${entry.loc}`);
  }

  const title = firstString(data.title, data.page_title, data.ia_title, context.siteMeta.toolbar?.home_label) || "Material Design";
  const pageAssets = new Set();
  const parts = [`# ${title}`];

  renderLandingObject(data, parts, context, pageAssets, 2, new Set());

  manifestPage.title = title;
  manifestPage.kind = "landing";
  manifestPage.page_data_url = pageDataUrl?.replace("?cachebust=1", "") || SITE_META_URL;
  manifestPage.assets = Array.from(pageAssets);

  return collectPageAssetsBeforeFrontmatter(parts, Array.from(pageAssets).map((url) => context.assets.assets.get(url)).filter(Boolean), {
    title,
    source_url: entry.loc,
    lastmod: entry.lastmod,
    snapshot_at: context.snapshotAt,
    section: sourceSection(entry.loc),
  });
}

function renderLandingObject(value, parts, context, pageAssets, depth, seen) {
  if (!value || typeof value !== "object" || seen.has(value)) {
    return;
  }
  seen.add(value);

  const video = mediaFromVideoObject(value);
  const videoExt = inferExtensionFromUrl(video?.url || "", video?.fileName || "");
  if (video?.url && VIDEO_EXTENSIONS.has(videoExt)) {
    const asset = context.assets.register(video.url, "videos", video);
    pageAssets.add(asset.source_url);
    parts.push(renderVideo(asset, video.alt || video.caption, context.outputPath, context.assets));
  }

  const image = mediaFromImageObject(value);
  const imageExt = inferExtensionFromUrl(image?.url || "", image?.fileName || "");
  if (image?.url && !VIDEO_EXTENSIONS.has(imageExt)) {
    const asset = context.assets.register(image.url, "images", image);
    pageAssets.add(asset.source_url);
    parts.push(renderImage(asset, image.alt, image.caption, context.outputPath, context.assets));
  }

  const title = firstString(value.title, value.page_title, value.label);
  if (title && depth <= 4) {
    parts.push(`${"#".repeat(Math.min(depth, 4))} ${title}`);
  }

  for (const key of ["subtitle", "description", "content"]) {
    if (typeof value[key] === "string" && value[key].trim()) {
      parts.push(htmlToMarkdown(value[key], context));
    }
  }

  const rawHref = firstString(value.href, value.link);
  if (rawHref) {
    const href = rewriteLink(rawHref, context.outputPath, context.urlOutputMap);
    const label = firstString(value.label, value.title, rawHref);
    parts.push(`[${label}](${href})`);
  }

  for (const [key, child] of Object.entries(value)) {
    if (["title", "page_title", "label", "subtitle", "description", "content", "href", "link", "file", "url"].includes(key)) {
      continue;
    }
    if (Array.isArray(child)) {
      for (const item of child) {
        renderLandingObject(item, parts, context, pageAssets, depth + 1, seen);
      }
    } else if (child && typeof child === "object") {
      renderLandingObject(child, parts, context, pageAssets, depth + 1, seen);
    }
  }
}

async function renderPage(entry, context) {
  const outputPath = outputPathForUrl(entry.loc);
  const url = new URL(entry.loc);
  const routeMatch = matchRouteForPath(url.pathname, context.routeIndex);
  const manifestPage = {
    source_url: entry.loc,
    lastmod: entry.lastmod,
    output_file: toPosix(path.relative(ROOT_DIR, outputPath)),
    status: "ok",
    title: "",
    kind: "",
    section: sourceSection(entry.loc),
    assets: [],
    error: null,
  };

  const pageContext = {
    ...context,
    outputPath,
  };

  let markdown;
  if (url.pathname.startsWith("/blog/")) {
    markdown = await renderBlogPage(entry, context.siteMeta, pageContext, manifestPage);
  } else if (routeMatch?.route?.exportedCarbonFileId) {
    markdown = await renderCarbonPage(entry, routeMatch, pageContext, manifestPage);
  } else {
    markdown = await renderLandingPage(entry, routeMatch, pageContext, manifestPage);
  }

  await writeTextFile(outputPath, markdown);
  return manifestPage;
}

async function downloadAssets(assetRegistry, http, options) {
  const assets = assetRegistry.list();
  let index = 0;
  const failures = [];

  async function worker() {
    while (index < assets.length) {
      const asset = assets[index];
      index += 1;
      try {
        const result = await http.download(asset.source_url, path.join(ROOT_DIR, asset.file), options.forceAssets);
        asset.downloaded = result.downloaded;
        asset.bytes = result.bytes;
        const inferredExt = contentTypeToExtension(result.contentType);
        if (asset.file.endsWith(".bin") && inferredExt) {
          // Keep the original manifest path stable for this run.
          asset.content_type_extension = inferredExt;
        }
      } catch (error) {
        asset.error = error.message;
        failures.push({ source_url: asset.source_url, error: error.message });
      }
    }
  }

  await Promise.all(Array.from({ length: options.concurrency }, () => worker()));
  return failures;
}

async function generateDocsReadme(manifest) {
  const pages = manifest.pages.filter((page) => page.status === "ok");
  const bySection = new Map();
  for (const page of pages) {
    const section = page.section || "other";
    if (!bySection.has(section)) {
      bySection.set(section, []);
    }
    bySection.get(section).push(page);
  }

  const lines = [
    "# Material Design 3 Reference",
    "",
    `Snapshot: ${manifest.snapshot_at}`,
    "",
    `Source: ${SITE_ORIGIN}/`,
    "",
    "## Sections",
    "",
  ];

  for (const [section, sectionPages] of Array.from(bySection.entries()).sort(([a], [b]) => a.localeCompare(b))) {
    lines.push(`### ${section}`);
    lines.push("");
    for (const page of sectionPages.sort((a, b) => a.output_file.localeCompare(b.output_file))) {
      const relative = toPosix(path.relative(DOCS_DIR, path.join(ROOT_DIR, page.output_file)));
      lines.push(`- [${page.title || page.source_url}](${relative})`);
    }
    lines.push("");
  }

  lines.push("## Source Files");
  lines.push("");
  lines.push("- Robots: https://m3.material.io/robots.txt");
  lines.push("- Sitemap: https://m3.material.io/sitemap.xml");
  lines.push("- Site metadata: https://m3.material.io/site_meta.js");
  lines.push("- License: https://www.apache.org/licenses/LICENSE-2.0.html");

  await writeTextFile(path.join(DOCS_DIR, "README.md"), lines.join("\n"));
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const http = new HttpClient();
  await ensureDir(DOCS_DIR);
  await ensureDir(ASSETS_DIR);
  await ensureDir(METADATA_DIR);

  console.log("Fetching robots, sitemap, site metadata, and Angular bundle metadata...");
  const [robotsText, sitemapText, siteMetaText, indexHtml] = await Promise.all([
    http.fetchText(ROBOTS_URL),
    http.fetchText(SITEMAP_URL),
    http.fetchText(SITE_META_URL),
    http.fetchText(`${SITE_ORIGIN}/`),
  ]);

  const mainBundleUrl = extractMainBundleUrl(indexHtml);
  const mainBundleText = await http.fetchText(mainBundleUrl);
  const carbonVersion = /carbonVersion:"([^"]+)"/u.exec(mainBundleText)?.[1];
  if (!carbonVersion) {
    throw new Error("Could not determine carbonVersion from the Angular bundle.");
  }

  const siteMeta = parseSiteMeta(siteMetaText);
  const routes = extractRouteDefinitions(mainBundleText, siteMeta);
  const routeIndex = buildRouteIndex(routes);
  const sitemapEntries = parseSitemap(sitemapText);
  const disallows = parseRobots(robotsText);
  const { allowed, skipped } = filterEntries(sitemapEntries, disallows);
  const selected = selectEntries(allowed, args.limit, routeIndex);
  const urlOutputMap = buildUrlOutputMap(selected, routeIndex);
  const assets = new AssetRegistry();
  const snapshotAt = new Date().toISOString();

  const manifest = {
    source: SITE_ORIGIN,
    snapshot_at: snapshotAt,
    carbon_version: carbonVersion,
    main_bundle_url: mainBundleUrl,
    limited: Boolean(args.limit),
    limit: args.limit,
    totals: {
      sitemap_urls: sitemapEntries.length,
      allowed_urls: allowed.length,
      selected_urls: selected.length,
    },
    skipped,
    pages: [],
    assets: [],
    asset_failures: [],
  };

  const context = {
    http,
    siteMeta,
    routeIndex,
    urlOutputMap,
    assets,
    carbonVersion,
    snapshotAt,
  };

  for (const [index, entry] of selected.entries()) {
    const progress = `${index + 1}/${selected.length}`;
    try {
      console.log(`[${progress}] Rendering ${entry.loc}`);
      for (const imageUrl of entry.images || []) {
        assets.register(imageUrl, "images");
      }
      for (const video of entry.videos || []) {
        assets.register(video.loc, "videos", { alt: video.title });
      }
      const page = await renderPage(entry, context);
      manifest.pages.push(page);
    } catch (error) {
      console.warn(`[${progress}] Failed ${entry.loc}: ${error.message}`);
      manifest.pages.push({
        source_url: entry.loc,
        lastmod: entry.lastmod,
        output_file: toPosix(path.relative(ROOT_DIR, outputPathForUrl(entry.loc))),
        status: "failed",
        title: "",
        kind: "",
        section: sourceSection(entry.loc),
        assets: [],
        error: error.message,
      });
    }
  }

  if (!args.skipAssets) {
    console.log(`Downloading ${assets.list().length} local assets...`);
    manifest.asset_failures = await downloadAssets(assets, http, args);
  }

  manifest.assets = assets.list().map(({ output_path: _outputPath, ...asset }) => asset);
  await generateDocsReadme(manifest);
  await writeTextFile(path.join(METADATA_DIR, "manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(`Done. Rendered ${manifest.pages.filter((page) => page.status === "ok").length}/${manifest.pages.length} pages.`);
  if (manifest.asset_failures.length) {
    console.log(`Asset failures: ${manifest.asset_failures.length}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
