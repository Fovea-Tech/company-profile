import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { deletePortfolio } from '@/app/actions/portfolio';
import Image from 'next/image';
import { Plus, Edit2, Trash2, ExternalLink } from 'lucide-react';
import React from 'react';

export const dynamic = 'force-dynamic';

export default async function AdminPortfolioPage() {
  const { data: portfolios = [] } = await supabase
    .from('Portfolio')
    .select('*')
    .order('createdAt', { ascending: false });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Kelola Portofolio</h1>
          <p className="text-slate-500 mt-1">Daftar proyek dan karya yang ditampilkan di website utama.</p>
        </div>
        <Link 
          href="/portfolio/create"
          className="inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm cursor-pointer"
        >
          <Plus size={16} />
          Tambah Proyek Baru
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(portfolios || []).map(project => (
          <div key={project.id} className="card-clean overflow-hidden flex flex-col h-full">
            <div className="relative aspect-video w-full bg-slate-100 border-b border-border">
              {project.image ? (
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                  Tidak ada gambar
                </div>
              )}
            </div>
            <div className="p-5 flex flex-col flex-1">
              <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md self-start mb-3">
                {project.category}
              </span>
              
              <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-1">{project.title}</h3>
              <p className="text-slate-500 text-xs line-clamp-2 mb-4">{project.description}</p>
              
              <div className="mt-auto pt-4 border-t border-border flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Link
                    href={`/portfolio/edit/${project.id}`}
                    className="inline-flex items-center gap-1 rounded-lg border border-border bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                  >
                    <Edit2 size={12} />
                    Edit
                  </Link>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-border bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                    >
                      <ExternalLink size={12} />
                      Link
                    </a>
                  )}
                </div>
                
                <form action={async () => {
                  'use server';
                  await deletePortfolio(project.id);
                }}>
                  <button 
                    type="submit"
                    className="inline-flex items-center gap-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 px-2.5 py-1.5 text-xs font-semibold cursor-pointer"
                  >
                    <Trash2 size={12} />
                    Hapus
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
        {(!portfolios || portfolios.length === 0) && (
          <div className="col-span-full p-12 text-center card-clean text-slate-500">
            Belum ada data portofolio. Silakan tambah proyek baru.
          </div>
        )}
      </div>
    </div>
  );
}
