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

Generated documentation is written to `docs/`, media assets to `assets/`, and crawl metadata to `metadata/manifest.json`. Start local browsing from `docs/README.md`.

## Notes

- The sync script reads `robots.txt` and `sitemap.xml` before crawling.
- Disallowed routes and query pages are skipped.
- Media files are stored as normal repository files under `assets/`.
- See `NOTICE.md` for source and license attribution notes.
