import { createPortfolio } from '@/app/actions/portfolio';
import Link from 'next/link';

export default function CreatePortfolioPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/portfolio" className="rounded-full border-[3px] border-black bg-white p-2 hover:bg-[#E2EEFF] transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </Link>
        <h1 className="text-4xl font-black tracking-tight text-black">Tambah Portofolio</h1>
      </div>

      <div className="rounded-3xl border-[3px] border-black bg-white p-8 shadow-[12px_12px_0_#111111]">
        <form action={createPortfolio} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-black uppercase text-black mb-2">Slug URL (ID)</label>
              <input name="id" required placeholder="contoh: aplikasi-kasir" className="w-full rounded-xl border-[3px] border-black bg-[#F7F7F4] px-4 py-3 font-medium text-black" />
            </div>
            <div>
              <label className="block text-sm font-black uppercase text-black mb-2">URL Gambar (Unsplash/Imgur)</label>
              <input name="image" required type="url" placeholder="https://..." className="w-full rounded-xl border-[3px] border-black bg-[#F7F7F4] px-4 py-3 font-medium text-black" />
            </div>
            <div>
              <label className="block text-sm font-black uppercase text-black mb-2">Nama Klien</label>
              <input name="client" required className="w-full rounded-xl border-[3px] border-black bg-[#F7F7F4] px-4 py-3 font-medium text-black" />
            </div>
            <div>
              <label className="block text-sm font-black uppercase text-black mb-2">Tahun</label>
              <input name="year" required className="w-full rounded-xl border-[3px] border-black bg-[#F7F7F4] px-4 py-3 font-medium text-black" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-black uppercase text-black mb-2">Teknologi (Pisahkan dengan koma)</label>
              <input name="tech" required placeholder="Next.js, Tailwind, SQLite" className="w-full rounded-xl border-[3px] border-black bg-[#F7F7F4] px-4 py-3 font-medium text-black" />
            </div>
          </div>

          <div className="rounded-2xl border-[3px] border-black bg-[#E2EEFF] p-6 space-y-6">
            <h2 className="text-2xl font-black text-black">Konten Bahasa Indonesia (ID)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2"><label className="block text-sm font-black uppercase text-black mb-2">Judul</label><input name="title_id" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium" /></div>
              <div><label className="block text-sm font-black uppercase text-black mb-2">Kategori</label><input name="category_id" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium" /></div>
              <div className="md:col-span-2"><label className="block text-sm font-black uppercase text-black mb-2">Deskripsi Singkat</label><textarea name="desc_id" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium" rows={2} /></div>
              <div className="md:col-span-2"><label className="block text-sm font-black uppercase text-black mb-2">Tantangan</label><textarea name="challenge_id" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium" rows={3} /></div>
              <div className="md:col-span-2"><label className="block text-sm font-black uppercase text-black mb-2">Solusi</label><textarea name="solution_id" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium" rows={3} /></div>
              <div className="md:col-span-2"><label className="block text-sm font-black uppercase text-black mb-2">Hasil</label><textarea name="results_id" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium" rows={2} /></div>
            </div>
          </div>

          <div className="rounded-2xl border-[3px] border-black bg-[#FFD84D] p-6 space-y-6">
            <h2 className="text-2xl font-black text-black">Konten Bahasa Inggris (EN)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2"><label className="block text-sm font-black uppercase text-black mb-2">Title</label><input name="title_en" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium" /></div>
              <div><label className="block text-sm font-black uppercase text-black mb-2">Category</label><input name="category_en" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium" /></div>
              <div className="md:col-span-2"><label className="block text-sm font-black uppercase text-black mb-2">Short Description</label><textarea name="desc_en" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium" rows={2} /></div>
              <div className="md:col-span-2"><label className="block text-sm font-black uppercase text-black mb-2">Challenge</label><textarea name="challenge_en" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium" rows={3} /></div>
              <div className="md:col-span-2"><label className="block text-sm font-black uppercase text-black mb-2">Solution</label><textarea name="solution_en" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium" rows={3} /></div>
              <div className="md:col-span-2"><label className="block text-sm font-black uppercase text-black mb-2">Results</label><textarea name="results_en" required className="w-full rounded-xl border-[3px] border-black bg-white px-4 py-3 font-medium" rows={2} /></div>
            </div>
          </div>

          <button type="submit" className="w-full rounded-xl border-[3px] border-black bg-[#6FFF9A] px-6 py-4 text-center text-xl font-black text-black shadow-[6px_6px_0_#111111] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]">
            Simpan Portofolio
          </button>
        </form>
      </div>
    </div>
  );
}
