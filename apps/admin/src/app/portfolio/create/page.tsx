import Link from 'next/link';
import CreatePortfolioForm from './CreatePortfolioForm';
import { ArrowLeft } from 'lucide-react';
import React from 'react';

export default function CreatePortfolioPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/portfolio" className="rounded-lg border border-border bg-white p-2 hover:bg-slate-50 transition-all cursor-pointer">
          <ArrowLeft size={18} className="text-slate-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Tambah Portofolio Baru</h1>
          <p className="text-slate-500 text-sm mt-0.5">Unggah proyek baru untuk dipamerkan di website utama.</p>
        </div>
      </div>

      <div className="card-clean p-8">
        <CreatePortfolioForm />
      </div>
    </div>
  );
}
