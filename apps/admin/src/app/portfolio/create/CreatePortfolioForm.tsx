'use client';

import { useState, useRef } from 'react';
import { createPortfolio } from '@/app/actions/portfolio';
import Link from 'next/link';
import React from 'react';

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
        const img = new globalThis.Image();
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
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Slug URL / ID Unik</label>
          <input 
            name="id" 
            required 
            placeholder="contoh: website-smk-jakarta" 
            className="input-clean" 
          />
          <p className="text-xs text-slate-400 mt-1">Digunakan untuk URL halaman detail portofolio (tanpa spasi/simbol).</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Upload Thumbnail Gambar</label>
          <input 
            name="image" 
            required 
            type="file" 
            accept="image/*" 
            className="input-clean file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border file:border-slate-200 file:bg-slate-50 file:text-xs file:font-semibold file:text-slate-700 hover:file:bg-slate-100 cursor-pointer" 
          />
          <p className="text-xs text-slate-400 mt-1">Disarankan resolusi landscape (16:9 atau 16:10).</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Judul Proyek</label>
          <input 
            name="title" 
            required 
            placeholder="contoh: Portal PPDB Online SMK 1 Jakarta" 
            className="input-clean" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Kategori</label>
          <select name="category" required className="input-clean bg-white">
            <option value="Education">Education (Sekolah/Pendidikan)</option>
            <option value="Company Profile">Company Profile</option>
            <option value="Dashboard">Dashboard</option>
            <option value="Custom System">Custom System</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nama Klien</label>
          <input 
            name="client" 
            placeholder="contoh: Yayasan Pendidikan Al-Barkah" 
            className="input-clean" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tahun Proyek</label>
          <input 
            name="year" 
            placeholder="contoh: 2026" 
            className="input-clean" 
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Teknologi (Pisahkan dengan koma)</label>
          <input 
            name="tech" 
            required 
            placeholder="contoh: Next.js, TailwindCSS, Supabase, Cloudflare Workers" 
            className="input-clean" 
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Link Kunjungan Website (Optional)</label>
          <input 
            name="link" 
            placeholder="contoh: https://smk1jakarta.sch.id" 
            className="input-clean" 
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Deskripsi Singkat</label>
          <textarea 
            name="description" 
            required 
            rows={2} 
            placeholder="Tulis ringkasan singkat dari proyek ini..."
            className="input-clean" 
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tantangan Proyek (Challenge)</label>
          <textarea 
            name="challenge" 
            rows={3} 
            placeholder="Tulis rincian masalah/tantangan yang dihadapi klien sebelum proyek ini dibangun..."
            className="input-clean" 
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Solusi Fovea (Solution)</label>
          <textarea 
            name="solution" 
            rows={3} 
            placeholder="Bagaimana Fovea merancang dan membangun teknologi untuk menjawab tantangan tersebut..."
            className="input-clean" 
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Hasil & Dampak (Results)</label>
          <textarea 
            name="results" 
            rows={2} 
            placeholder="Hasil nyata setelah website/sistem live (contoh: Pendaftaran PPDB naik 50%)..."
            className="input-clean" 
          />
        </div>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-border mt-6">
        <button 
          type="submit" 
          disabled={isSubmitting} 
          className="btn-primary disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? 'Menyimpan...' : 'Simpan Portofolio'}
        </button>
        <Link href="/portfolio" className="btn-secondary cursor-pointer">
          Batal
        </Link>
      </div>
    </form>
  );
}
