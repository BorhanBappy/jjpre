# HMS Docs Viewer

Mobile-friendly Next.js viewer for HMS markdown documentation. Drop any `.md` file under `docs/` and it shows up automatically &mdash; delete it and it disappears.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Add / remove docs

Anything you put under the `docs/` folder is indexed at build time:

```
docs/
  PAMS/
    overview.md
    flow.md
  EMERG/
    triage.md
  README.md
```

- Restart `npm run dev` (or run `node scripts/copy-docs.mjs`) after adding files.
- The first-level folder name becomes the module/section heading on the home page.

## Build for static deploy

```bash
npm run build
```

This produces a static site in `out/` ready for GitHub Pages, Netlify, Vercel, or any static host.

### GitHub Pages

If you deploy to `https://<user>.github.io/<repo>/`, set the base path:

```bash
NEXT_PUBLIC_BASE_PATH=/<repo> npm run build
```

## Features

- Mobile-first responsive layout with a slide-in sidebar
- Live search across titles, paths, and excerpts
- Dark / light theme (auto-detects system preference)
- Bangla (Bengali) text rendering support
- Syntax-highlighted code blocks
- Auto-generated table of contents grouped by module
- GitHub-flavored markdown: tables, task lists, strikethrough
- 100% static output &mdash; no server needed
