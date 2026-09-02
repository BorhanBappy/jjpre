import type { DocEntry } from './types';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export async function loadIndex(): Promise<DocEntry[]> {
  const res = await fetch(`${basePath}/doc-index.json`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load doc index');
  return res.json();
}

export async function loadMarkdown(relPath: string): Promise<string> {
  const url = `${basePath}/docs/${relPath.split('/').map(encodeURIComponent).join('/')}`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load ${relPath}`);
  return res.text();
}

export function groupByModule(entries: DocEntry[]): Record<string, DocEntry[]> {
  return entries.reduce<Record<string, DocEntry[]>>((acc, e) => {
    (acc[e.module] ||= []).push(e);
    return acc;
  }, {});
}
