'use client';

import { useState, useRef } from 'react';
import { createPortfolio } from '@/app/actions/portfolio';
import { useRouter } from 'next/navigation';

export default function CreatePortfolioForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    const formData = new FormData(formRef.current);

    try {
      const imageFile = formData.get('image') as File;
      if (imageFile && imageFile.size > 0) {
        // Convert image to WebP
        const webpBlob = await convertToWebP(imageFile);
        formData.set('image', webpBlob, `${formData.get('id')}.webp`);
      }

      await createPortfolio(formData);
    } catch (error: any) {
      if (error?.digest?.startsWith('NEXT_REDIRECT') || (error?.message && error.message.includes('NEXT_REDIRECT'))) {
        throw error;
      }
      console.error('Failed to submit:', error);
      alert('Terjadi kesalahan saat menyimpan portofolio.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const convertToWebP = (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Canvas context not available'));
            return;
          }
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(
            (blob) => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error('Canvas to Blob failed'));
              }
            },
            'image/webp',
            0.8 // 80% quality
          );
        };
        img.onerror = () => reject(new Error('Image load failed'));
        if (event.target?.result) {
          img.src = event.target.result as string;
        }
      };
      reader.onerror = () => reject(new Error('File read failed'));
      reader.readAsDataURL(file);
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-black uppercase text-black mb-2">Slug URL (ID)</label>
          <input name="id" required placeholder="contoh: aplikasi-kasir" className="w-full rounded-xl border-[3px] border-black bg-[#F7F7F4] px-4 py-3 font-medium text-black" />
        </div>
        <div>
          <label className="block text-sm font-black uppercase text-black mb-2">Upload Gambar</label>
          <input name="image" required type="file" accept="image/*" className="w-full rounded-xl border-[3px] border-black bg-[#F7F7F4] px-4 py-3 font-medium text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-[3px] file:border-black file:text-sm file:font-bold file:bg-[#FFD84D] file:text-black hover:file:bg-[#E2EEFF] cursor-pointer" />
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

      <button type="submit" disabled={isSubmitting} className="w-full rounded-xl border-[3px] border-black bg-[#6FFF9A] px-6 py-4 text-center text-xl font-black text-black shadow-[6px_6px_0_#111111] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111] disabled:opacity-50 disabled:cursor-not-allowed">
        {isSubmitting ? 'Menyimpan...' : 'Simpan Portofolio'}
      </button>
    </form>
  );
}
