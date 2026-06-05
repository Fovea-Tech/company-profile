import { createFaq } from '@/app/actions/faq';
import Link from 'next/link';

export default function CreateFaqPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/faq" className="rounded-full border-[3px] border-black bg-white p-2 hover:bg-[#E2EEFF] transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </Link>
        <h1 className="text-4xl font-black tracking-tight text-black">Tambah FAQ</h1>
      </div>

      <div className="rounded-3xl border-[3px] border-black bg-white p-8 shadow-[12px_12px_0_#111111]">
        <form action={createFaq} className="space-y-8">
          
          <div>
            <label className="block text-sm font-black uppercase text-black mb-2">Urutan Tampil (Angka)</label>
            <input type="number" name="order" required defaultValue="0" className="w-full max-w-xs rounded-xl border-[3px] border-black bg-[#F7F7F4] px-4 py-3 font-medium text-black" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border-[3px] border-black bg-[#E2EEFF] p-6 space-y-6">
              <h2 className="text-xl font-black text-black border-b-[3px] border-black pb-4">Bahasa Indonesia (ID)</h2>
              <div><label className="block text-sm font-black uppercase text-black mb-2">Pertanyaan</label><textarea name="question_id" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium text-black" rows={3} /></div>
              <div><label className="block text-sm font-black uppercase text-black mb-2">Jawaban</label><textarea name="answer_id" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium text-black" rows={4} /></div>
            </div>

            <div className="rounded-2xl border-[3px] border-black bg-[#FFD84D] p-6 space-y-6">
              <h2 className="text-xl font-black text-black border-b-[3px] border-black pb-4">Bahasa Inggris (EN)</h2>
              <div><label className="block text-sm font-black uppercase text-black mb-2">Question</label><textarea name="question_en" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium text-black" rows={3} /></div>
              <div><label className="block text-sm font-black uppercase text-black mb-2">Answer</label><textarea name="answer_en" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium text-black" rows={4} /></div>
            </div>
          </div>

          <button type="submit" className="w-full rounded-xl border-[3px] border-black bg-[#6FFF9A] px-6 py-4 text-center text-xl font-black text-black shadow-[6px_6px_0_#111111] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]">
            Simpan FAQ
          </button>
        </form>
      </div>
    </div>
  );
}
