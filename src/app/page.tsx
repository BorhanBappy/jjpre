'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { FileText, Folder } from 'lucide-react';
import Shell from '@/components/Shell';
import type { DocEntry } from '@/lib/types';
import { groupByModule, loadIndex } from '@/lib/docs';

export default function HomePage() {
  const [entries, setEntries] = useState<DocEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadIndex()
      .then(setEntries)
      .catch(e => setError(String(e)))
      .finally(() => setLoading(false));
  }, []);

  const groups = useMemo(() => groupByModule(entries), [entries]);
  const moduleNames = useMemo(() => Object.keys(groups).sort(), [groups]);

  return (
    <Shell entries={entries}>
      <div className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">HMS Documentation</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Mobile-friendly viewer for HMS markdown docs. Drop any <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-sm">.md</code> file
            into the <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-sm">docs/</code> folder &mdash; it appears here automatically.
          </p>
        </header>

        {loading && <div className="text-slate-500">Loading docs...</div>}
        {error && <div className="text-red-600">Failed to load docs: {error}</div>}

        {!loading && !error && entries.length === 0 && (
          <div className="rounded-lg border border-dashed border-slate-300 dark:border-slate-700 p-8 text-center">
            <Folder className="mx-auto h-10 w-10 text-slate-400" />
            <h2 className="mt-3 font-semibold">No docs yet</h2>
            <p className="mt-1 text-sm text-slate-500">
              Add a <code>.md</code> file under the <code>docs/</code> folder and restart the dev server.
            </p>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          {moduleNames.map(mod => (
            <section key={mod} className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
              <h2 className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-100 mb-2">
                <Folder className="h-4 w-4 text-brand-600" />
                {mod}
                <span className="ml-auto text-xs font-normal text-slate-500">{groups[mod].length}</span>
              </h2>
              <ul className="space-y-1 text-sm">
                {groups[mod].slice(0, 8).map(e => (
                  <li key={e.slug}>
                    <Link
                      href={`/doc/${e.slug}`}
                      className="flex items-start gap-1.5 rounded px-1.5 py-1 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      <FileText className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 opacity-70" />
                      <span className="break-words">{e.title}</span>
                    </Link>
                  </li>
                ))}
                {groups[mod].length > 8 && (
                  <li className="text-xs text-slate-500 pl-5">
                    +{groups[mod].length - 8} more
                  </li>
                )}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </Shell>
  );
}
