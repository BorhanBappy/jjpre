import './globals.css';
import 'highlight.js/styles/github-dark.css';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'HMS Docs',
  description: 'Mobile-friendly viewer for HMS markdown documentation',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1d4ed8',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
