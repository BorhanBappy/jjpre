// Scans the React app's own `docs/` folder for .md files.
// Drop a .md anywhere under docs/ and it shows up; delete it and it disappears.
// Runs automatically before `npm run dev` / `npm run build` (via package.json hooks)
// and can also be invoked directly: `node scripts/copy-docs.mjs`.
//
// Optional: pass --watch to keep watching the docs/ folder and re-index on changes.
// Optional: set DOCS_SEED env var to a path; on first run, if docs/ is empty,
// the script will copy .md files from there as starter content.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const DOCS_DIR   = path.join(projectRoot, 'docs');
const OUT_DIR    = path.join(projectRoot, 'public', 'docs');
const INDEX_FILE = path.join(projectRoot, 'public', 'doc-index.json');
const SEED_ROOT  = process.env.DOCS_SEED || '';

const SKIP_DIRS = new Set(['node_modules', '.git', 'bin', 'obj', '.next', '.vs', '.idea', 'wwwroot', 'packages', 'TestResults', '.plan-output']);

function walk(dir, base = dir, acc = []) {
  let entries = [];
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return acc; }
  for (const e of entries) {
    if (e.name.startsWith('.')) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      walk(full, base, acc);
    } else if (e.isFile() && e.name.toLowerCase().endsWith('.md')) {
      acc.push(path.relative(base, full).split(path.sep).join('/'));
    }
  }
  return acc;
}

function extractTitle(md, fallback) {
  const m = md.match(/^#\s+(.+)$/m);
  return (m ? m[1] : fallback).replace(/[`*_]/g, '').trim();
}

function firstParagraph(md) {
  const stripped = md
    .replace(/^---[\s\S]*?---\s*/m, '')
    .replace(/^#.+$/gm, '')
    .replace(/```[\s\S]*?```/g, '')
    .split(/\n\s*\n/)
    .map(s => s.trim())
    .filter(Boolean);
  return (stripped[0] || '').slice(0, 240).replace(/\s+/g, ' ');
}

function moduleFromPath(rel) {
  const parts = rel.split('/');
  if (parts.length === 1) return 'Root';
  return parts[0];
}

function copyTree(srcRoot, destRoot) {
  const files = walk(srcRoot);
  let copied = 0;
  for (const rel of files) {
    if (rel.toLowerCase().includes('jquery-validation')) continue;
    if (rel.toLowerCase().endsWith('license.md')) continue;
    const src = path.join(srcRoot, rel);
    const dest = path.join(destRoot, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    copied++;
  }
  return copied;
}

function buildIndex() {
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const files = walk(DOCS_DIR);
  const index = [];

  for (const rel of files) {
    const src = path.join(DOCS_DIR, rel);
    const dest = path.join(OUT_DIR, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const content = fs.readFileSync(src, 'utf8');
    fs.writeFileSync(dest, content, 'utf8');
    const stat = fs.statSync(src);
    index.push({
      path: rel,
      slug: rel.replace(/\.md$/i, '').replace(/[\\/]/g, '__'),
      title: extractTitle(content, path.basename(rel, '.md')),
      module: moduleFromPath(rel),
      excerpt: firstParagraph(content),
      size: stat.size,
      mtime: stat.mtimeMs,
    });
  }

  index.sort((a, b) => a.module.localeCompare(b.module) || a.title.localeCompare(b.title));
  fs.mkdirSync(path.dirname(INDEX_FILE), { recursive: true });
  fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2), 'utf8');
  console.log(`[copy-docs] Indexed ${index.length} markdown file(s) from ${DOCS_DIR}`);
}

// First-time seed: if docs/ folder doesn't exist or is empty, seed from DOCS_SEED.
fs.mkdirSync(DOCS_DIR, { recursive: true });
const initialDocs = walk(DOCS_DIR);
if (initialDocs.length === 0 && SEED_ROOT && fs.existsSync(SEED_ROOT)) {
  console.log(`[copy-docs] Seeding docs/ from ${SEED_ROOT}`);
  const n = copyTree(SEED_ROOT, DOCS_DIR);
  console.log(`[copy-docs] Seeded ${n} file(s)`);
}

buildIndex();

if (process.argv.includes('--watch')) {
  console.log('[copy-docs] Watching docs/ for changes... (Ctrl+C to stop)');
  let debounce;
  fs.watch(DOCS_DIR, { recursive: true }, () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      try { buildIndex(); } catch (e) { console.error('[copy-docs] re-index failed:', e); }
    }, 200);
  });
}
