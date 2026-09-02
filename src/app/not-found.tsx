import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center space-y-3">
        <h1 className="text-2xl font-bold">Document not found</h1>
        <p className="text-slate-500">The doc you requested no longer exists.</p>
        <Link href="/" className="inline-block px-4 py-2 rounded-md bg-brand-600 text-white hover:bg-brand-700">
          Back to docs
        </Link>
      </div>
    </div>
  );
}
