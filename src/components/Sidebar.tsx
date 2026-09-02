'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, FileText, Search } from 'lucide-react';
import type { DocEntry } from '@/lib/types';
import { groupByModule } from '@/lib/docs';

type Props = {
  entries: DocEntry[];
  activeSlug?: string;
  onNavigate?: () => void;
};

export default function Sidebar({ entries, activeSlug, onNavigate }: Props) {
  const [q, setQ] = useState('');
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    if (!q.trim()) return entries;
    const needle = q.toLowerCase();
    return entries.filter(e =>
      e.title.toLowerCase().includes(needle) ||
      e.path.toLowerCase().includes(needle) ||
      e.excerpt.toLowerCase().includes(needle)
    );
  }, [entries, q]);

  const groups = useMemo(() => groupByModule(filtered), [filtered]);
  const moduleNames = useMemo(() => Object.keys(groups).sort(), [groups]);

  const isOpen = (m: string) => openModules[m] ?? (q.trim().length > 0);

  return (
    <aside className="flex h-full flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800">
      <div className="p-3 border-b border-slate-200 dark:border-slate-800">
        <label className="relative block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="search"
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search docs..."
            className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </label>
        <div className="mt-2 text-xs text-slate-500">
          {filtered.length} / {entries.length} files
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-2 text-sm">
        {moduleNames.length === 0 && (
          <div className="p-4 text-slate-500 text-center">No matches</div>
        )}
        {moduleNames.map(mod => {
          const items = groups[mod];
          const open = isOpen(mod);
          return (
            <div key={mod} className="mb-1">
              <button
                onClick={() => setOpenModules(s => ({ ...s, [mod]: !open }))}
                className="w-full flex items-center gap-1 px-2 py-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-slate-700 dark:text-slate-200"
              >
                {open ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                <span className="truncate">{mod}</span>
                <span className="ml-auto text-xs text-slate-400">{items.length}</span>
              </button>
              {open && (
                <ul className="ml-2 mt-0.5 space-y-0.5">
                  {items.map(item => (
                    <li key={item.slug}>
                      <Link
                        href={`/doc/${item.slug}`}
                        onClick={onNavigate}
                        className={`flex items-start gap-1.5 rounded px-2 py-1.5 leading-snug ${
                          activeSlug === item.slug
                            ? 'bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-100 font-medium'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <FileText className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 opacity-70" />
                        <span className="break-words">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
