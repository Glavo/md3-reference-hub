#!/usr/bin/env node

import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");
const MANIFEST_PATH = path.join(ROOT_DIR, "metadata", "manifest.json");

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function isExternalLink(value) {
  return /^(https?:)?\/\//iu.test(value) || /^(mailto|tel|javascript):/iu.test(value);
}

function stripAnchor(value) {
  return value.split("#")[0];
}

async function readText(filePath) {
  return fs.readFile(filePath, "utf8");
}

function extractMarkdownLinks(markdown) {
  const links = [];
  for (let index = 0; index < markdown.length; index += 1) {
    if (markdown[index] !== "]" || markdown[index + 1] !== "(") {
      continue;
    }

    let depth = 0;
    let escaped = false;
    let destination = "";
    let cursor = index + 2;
    for (; cursor < markdown.length; cursor += 1) {
      const char = markdown[cursor];
      if (escaped) {
        destination += char;
        escaped = false;
        continue;
      }
      if (char === "\\") {
        destination += char;
        escaped = true;
        continue;
      }
      if (char === "(") {
        depth += 1;
        destination += char;
        continue;
      }
      if (char === ")") {
        if (depth === 0) {
          break;
        }
        depth -= 1;
        destination += char;
        continue;
      }
      if (char === "\n") {
        break;
      }
      destination += char;
    }

    if (markdown[cursor] === ")") {
      const trimmed = destination.trim();
      if (trimmed.startsWith("<") && trimmed.includes(">")) {
        links.push(trimmed.slice(1, trimmed.indexOf(">")));
      } else {
        links.push(trimmed.split(/\s+/u)[0]);
      }
      index = cursor;
    }
  }

  let match;
  const htmlLinkPattern = /\b(?:href|src)="([^"]+)"/gu;
  while ((match = htmlLinkPattern.exec(markdown))) {
    links.push(match[1]);
  }

  return links;
}

async function main() {
  const failures = [];
  if (!existsSync(MANIFEST_PATH)) {
    throw new Error("metadata/manifest.json does not exist. Run npm run sync first.");
  }

  const manifest = JSON.parse(await readText(MANIFEST_PATH));
  const okPages = manifest.pages.filter((page) => page.status === "ok");
  const failedPages = manifest.pages.filter((page) => page.status !== "ok");

  if (manifest.totals?.selected_urls !== manifest.pages.length) {
    failures.push(`Expected ${manifest.totals.selected_urls} page records, found ${manifest.pages.length}.`);
  }

  for (const page of okPages) {
    const filePath = path.join(ROOT_DIR, page.output_file);
    if (!existsSync(filePath)) {
      failures.push(`Missing Markdown file: ${page.output_file}`);
      continue;
    }

    const markdown = await readText(filePath);
    if (/<\/?mio-[a-z-]+/iu.test(markdown)) {
      failures.push(`Unresolved mio-* placeholder in ${page.output_file}`);
    }

    for (const link of extractMarkdownLinks(markdown)) {
      if (!link || link.startsWith("#") || isExternalLink(link)) {
        continue;
      }
      const withoutAnchor = stripAnchor(decodeURI(link));
      if (!withoutAnchor) {
        continue;
      }
      const resolved = path.resolve(path.dirname(filePath), withoutAnchor);
      if (!resolved.startsWith(ROOT_DIR)) {
        failures.push(`Link escapes repository in ${page.output_file}: ${link}`);
        continue;
      }
      if (!existsSync(resolved)) {
        failures.push(`Broken local link in ${page.output_file}: ${link}`);
      }
    }
  }

  for (const asset of manifest.assets || []) {
    const filePath = path.join(ROOT_DIR, asset.file);
    if (!existsSync(filePath)) {
      failures.push(`Missing asset: ${asset.file}`);
    }
  }

  const assetSources = new Set();
  for (const asset of manifest.assets || []) {
    if (assetSources.has(asset.source_url)) {
      failures.push(`Duplicate asset source in manifest: ${asset.source_url}`);
    }
    assetSources.add(asset.source_url);
  }

  if (manifest.asset_failures?.length) {
    failures.push(`Asset download failures: ${manifest.asset_failures.length}`);
  }

  if (failedPages.length) {
    failures.push(`Failed page renders: ${failedPages.length}`);
    for (const page of failedPages.slice(0, 10)) {
      failures.push(`- ${page.source_url}: ${page.error}`);
    }
  }

  if (failures.length) {
    console.error("Validation failed:");
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`Validation passed: ${okPages.length} pages, ${(manifest.assets || []).length} assets.`);
  if (manifest.limited) {
    console.log(`Limited sync manifest detected (--limit=${manifest.limit}).`);
  }
  console.log(`Manifest: ${toPosix(path.relative(ROOT_DIR, MANIFEST_PATH))}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
