'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, BookOpen, Moon, Sun } from 'lucide-react';
import Sidebar from './Sidebar';
import type { DocEntry } from '@/lib/types';

type Props = {
  entries: DocEntry[];
  activeSlug?: string;
  children: React.ReactNode;
};

export default function Shell({ entries, activeSlug, children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = (localStorage.getItem('hms-theme') as 'light' | 'dark' | null);
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initial = saved || prefers;
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('hms-theme', next);
  };

  // Close mobile sidebar on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSidebarOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="flex h-screen flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-3 sm:px-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <Link href="/" className="flex items-center gap-2 font-bold text-brand-700 dark:text-brand-500">
          <BookOpen className="h-5 w-5" />
          <span className="hidden sm:inline">HMS Docs</span>
          <span className="sm:hidden">HMS</span>
        </Link>
        <div className="ml-auto flex items-center gap-1">
          <button
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar */}
        <div className="hidden lg:block w-72 xl:w-80 flex-shrink-0">
          <Sidebar entries={entries} activeSlug={activeSlug} />
        </div>

        {/* Mobile drawer */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-slate-900/60"
              onClick={() => setSidebarOpen(false)}
              aria-hidden
            />
            <div className="absolute inset-y-0 left-0 w-[85%] max-w-sm shadow-xl">
              <div className="flex h-14 items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3">
                <span className="font-semibold">Docs</span>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="h-[calc(100%-3.5rem)]">
                <Sidebar
                  entries={entries}
                  activeSlug={activeSlug}
                  onNavigate={() => setSidebarOpen(false)}
                />
              </div>
            </div>
          </div>
        )}

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6 sm:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
