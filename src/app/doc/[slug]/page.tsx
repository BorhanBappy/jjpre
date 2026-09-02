import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import Shell from '@/components/Shell';
import MarkdownView from '@/components/MarkdownView';
import type { DocEntry } from '@/lib/types';

function readIndex(): DocEntry[] {
  const p = path.join(process.cwd(), 'public', 'doc-index.json');
  if (!fs.existsSync(p)) return [];
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

export async function generateStaticParams() {
  return readIndex().map(e => ({ slug: e.slug }));
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug);
  const entries = readIndex();
  const entry = entries.find(e => e.slug === slug);
  if (!entry) notFound();

  const docPath = path.join(process.cwd(), 'public', 'docs', entry.path);
  if (!fs.existsSync(docPath)) notFound();
  const content = fs.readFileSync(docPath, 'utf8');

  return (
    <Shell entries={entries} activeSlug={entry.slug}>
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-brand-600"
        >
          <ChevronLeft className="h-4 w-4" />
          All docs
        </Link>
        <header className="space-y-1 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="text-xs font-medium uppercase tracking-wide text-brand-600">{entry.module}</div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">{entry.title}</h1>
          <div className="text-xs text-slate-500 break-all">{entry.path}</div>
        </header>
        <MarkdownView content={content} />
      </div>
    </Shell>
  );
}
