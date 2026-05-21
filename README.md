# MD3 Reference Hub

This repository contains tooling to mirror the public `m3.material.io` reference content into local Markdown files.

## Usage

```bash
npm install
npm run sync
npm run validate
```

For a small smoke test, run:

```bash
npm run sync -- --limit 5
npm run validate
```

Image references in generated Markdown use source-site direct URLs by default while still downloading images into `assets/`. To render Markdown with repository-local image paths instead, run:

```bash
npm run sync -- --image-links=local
```

Generated documentation is written to `docs/`, media assets to `assets/`, and crawl metadata to `metadata/manifest.json`. Start local browsing from `docs/README.md`.

## Notes

- The sync script reads `robots.txt` and `sitemap.xml` before crawling.
- Disallowed routes and query pages are skipped.
- Media files are stored as normal repository files under `assets/`.
- `--image-links=remote` is the current default; `direct` is accepted as an alias.
- See `NOTICE.md` for source and license attribution notes.
