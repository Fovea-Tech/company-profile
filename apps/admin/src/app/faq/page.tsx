import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { deleteFaq } from '@/app/actions/faq';
import { HelpCircle, Plus, Edit2, Trash2 } from 'lucide-react';
import React from 'react';

export const dynamic = 'force-dynamic';

export default async function AdminFaqPage() {
  const { data: faqs = [] } = await supabase
    .from('FAQ')
    .select('*')
    .order('order', { ascending: true });

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Kelola FAQ</h1>
          <p className="text-slate-500 mt-1">Daftar pertanyaan yang sering diajukan di website utama.</p>
        </div>
        <Link 
          href="/faq/create"
          className="inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm cursor-pointer"
        >
          <Plus size={16} />
          Tambah FAQ Baru
        </Link>
      </div>

      <div className="space-y-4">
        {(faqs || []).map(faq => (
          <div key={faq.id} className="card-clean p-6 flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 mb-3">
                Urutan: {faq.order}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                <HelpCircle className="text-blue-500 shrink-0 mt-1" size={18} />
                {faq.question}
              </h3>
              <p className="text-slate-600 pl-6 text-sm">{faq.answer}</p>
            </div>
            
            <div className="flex items-center gap-2 self-end md:self-auto">
              <Link
                href={`/faq/edit/${faq.id}`}
                className="inline-flex items-center gap-1 rounded-lg border border-border bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <Edit2 size={12} />
                Edit
              </Link>
              <form action={async () => {
                'use server';
                await deleteFaq(faq.id);
              }}>
                <button 
                  type="submit"
                  className="inline-flex items-center gap-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 px-3 py-2 text-xs font-semibold cursor-pointer"
                >
                  <Trash2 size={12} />
                  Hapus
                </button>
              </form>
            </div>
          </div>
        ))}
        {(!faqs || faqs.length === 0) && (
          <div className="p-12 text-center card-clean text-slate-500">
            Belum ada data FAQ. Silakan tambah FAQ baru.
          </div>
        )}
      </div>
    </div>
  );
}
