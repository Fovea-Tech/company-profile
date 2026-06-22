import Link from 'next/link';
import CreateBlogForm from './CreateBlogForm';
import { ArrowLeft } from 'lucide-react';
import React from 'react';

export default function CreateBlogPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/blog" className="rounded-lg border border-border bg-white p-2 hover:bg-slate-50 transition-all cursor-pointer">
          <ArrowLeft size={18} className="text-slate-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Tulis Artikel Baru</h1>
          <p className="text-slate-500 text-sm mt-0.5">Tulis dan publikasikan artikel blog untuk dipajang di website utama.</p>
        </div>
      </div>

      <div className="card-clean p-8">
        <CreateBlogForm />
      </div>
    </div>
  );
}
