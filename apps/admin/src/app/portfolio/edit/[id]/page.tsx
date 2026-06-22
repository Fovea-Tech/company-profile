import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import EditPortfolioForm from './EditPortfolioForm';
import React from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPortfolioPage({ params }: PageProps) {
  const { id } = await params;

  const { data: project } = await supabase
    .from('Portfolio')
    .select('*')
    .eq('id', id)
    .single();

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/portfolio" className="rounded-lg border border-border bg-white p-2 hover:bg-slate-50 transition-all cursor-pointer">
          <ArrowLeft size={18} className="text-slate-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Edit Portofolio</h1>
          <p className="text-slate-500 text-sm mt-0.5">Ubah informasi proyek portofolio yang sudah ada.</p>
        </div>
      </div>

      <div className="card-clean p-8">
        <EditPortfolioForm project={project} />
      </div>
    </div>
  );
}
