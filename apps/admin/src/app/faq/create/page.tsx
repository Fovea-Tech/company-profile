import { createFaq } from '@/app/actions/faq';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import React from 'react';

export default function CreateFaqPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/faq" className="rounded-lg border border-border bg-white p-2 hover:bg-slate-50 transition-all cursor-pointer">
          <ArrowLeft size={18} className="text-slate-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Tambah FAQ Baru</h1>
          <p className="text-slate-500 text-sm mt-0.5">Tambahkan tanya-jawab baru untuk halaman depan.</p>
        </div>
      </div>

      <div className="card-clean p-8">
        <form action={createFaq} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Urutan Tampil (Angka)</label>
            <input 
              type="number" 
              name="order" 
              required 
              defaultValue="0" 
              className="input-clean max-w-xs" 
            />
            <p className="text-xs text-slate-400 mt-1">Menentukan urutan tampilan FAQ dari terkecil ke terbesar.</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Pertanyaan (Bahasa Indonesia)</label>
            <textarea 
              name="question" 
              required 
              placeholder="Contoh: Apakah Fovea menyediakan layanan maintenance?"
              className="input-clean" 
              rows={3} 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Jawaban (Bahasa Indonesia)</label>
            <textarea 
              name="answer" 
              required 
              placeholder="Contoh: Ya, kami menyediakan paket monitoring, update, dan bantuan teknis..."
              className="input-clean" 
              rows={5} 
            />
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <button type="submit" className="btn-primary cursor-pointer">
              Simpan FAQ
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
