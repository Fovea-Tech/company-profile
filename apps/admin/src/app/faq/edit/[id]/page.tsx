import { supabase } from '@/lib/supabase';
import { updateFaq } from '@/app/actions/faq';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import React from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditFaqPage({ params }: PageProps) {
  const { id } = await params;

  const { data: faq } = await supabase
    .from('FAQ')
    .select('*')
    .eq('id', id)
    .single();

  if (!faq) {
    notFound();
  }

  // Bind the id parameter so updateFaq knows which record to update
  const updateFaqWithId = updateFaq.bind(null, id);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/faq" className="rounded-lg border border-border bg-white p-2 hover:bg-slate-50 transition-all cursor-pointer">
          <ArrowLeft size={18} className="text-slate-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Edit FAQ</h1>
          <p className="text-slate-500 text-sm mt-0.5">Ubah informasi tanya-jawab yang sudah ada.</p>
        </div>
      </div>

      <div className="card-clean p-8">
        <form action={updateFaqWithId} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Urutan Tampil (Angka)</label>
            <input 
              type="number" 
              name="order" 
              required 
              defaultValue={faq.order} 
              className="input-clean max-w-xs" 
            />
            <p className="text-xs text-slate-400 mt-1">Menentukan urutan tampilan FAQ dari terkecil ke terbesar.</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Pertanyaan (Bahasa Indonesia)</label>
            <textarea 
              name="question" 
              required 
              defaultValue={faq.question}
              className="input-clean" 
              rows={3} 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Jawaban (Bahasa Indonesia)</label>
            <textarea 
              name="answer" 
              required 
              defaultValue={faq.answer}
              className="input-clean" 
              rows={5} 
            />
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <button type="submit" className="btn-primary cursor-pointer">
              Simpan Perubahan
            </button>
            <Link href="/faq" className="btn-secondary cursor-pointer">
              Batal
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
