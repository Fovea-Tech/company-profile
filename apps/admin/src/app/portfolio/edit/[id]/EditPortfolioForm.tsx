'use client';

import { useState, useRef } from 'react';
import { updatePortfolio } from '@/app/actions/portfolio';
import Link from 'next/link';
import Image from 'next/image';
import { Portfolio } from '@/types';
import React from 'react';

interface EditPortfolioFormProps {
  project: Portfolio;
}

export default function EditPortfolioForm({ project }: EditPortfolioFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(project.image || null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImagePreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

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
        formData.set('image', webpBlob, `${project.id}.webp`);
      }

      // Bind updatePortfolio to the project ID
      await updatePortfolio(project.id, formData);
    } catch (error: any) {
      if (error?.digest?.startsWith('NEXT_REDIRECT') || (error?.message && error.message.includes('NEXT_REDIRECT'))) {
        throw error;
      }
      console.error('Failed to submit:', error);
      alert('Terjadi kesalahan saat menyimpan perubahan portofolio.');
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
      <input type="hidden" name="existing_image" value={project.image} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Slug URL / ID (Tidak dapat diubah)</label>
          <input 
            name="id" 
            disabled 
            value={project.id} 
            className="input-clean bg-slate-50 cursor-not-allowed text-slate-500" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Upload Thumbnail Baru (Optional)</label>
          <input 
            name="image" 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange}
            className="input-clean file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border file:border-slate-200 file:bg-slate-50 file:text-xs file:font-semibold file:text-slate-700 hover:file:bg-slate-100 cursor-pointer" 
          />
        </div>

        {imagePreview && (
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Preview Gambar Saat Ini</label>
            <div className="relative aspect-video w-full max-w-sm rounded-lg border border-border overflow-hidden bg-slate-50">
              <Image 
                src={imagePreview} 
                alt="Preview" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Judul Proyek</label>
          <input 
            name="title" 
            required 
            defaultValue={project.title}
            placeholder="contoh: Portal PPDB Online SMK 1 Jakarta" 
            className="input-clean" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Kategori</label>
          <select 
            name="category" 
            required 
            defaultValue={project.category}
            className="input-clean bg-white"
          >
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
            defaultValue={project.client || ''}
            placeholder="contoh: Yayasan Pendidikan Al-Barkah" 
            className="input-clean" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tahun Proyek</label>
          <input 
            name="year" 
            defaultValue={project.year || ''}
            placeholder="contoh: 2026" 
            className="input-clean" 
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Teknologi (Pisahkan dengan koma)</label>
          <input 
            name="tech" 
            required 
            defaultValue={project.tech || ''}
            placeholder="contoh: Next.js, TailwindCSS, Supabase, Cloudflare Workers" 
            className="input-clean" 
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Link Kunjungan Website (Optional)</label>
          <input 
            name="link" 
            defaultValue={project.link}
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
            defaultValue={project.description}
            placeholder="Tulis ringkasan singkat dari proyek ini..."
            className="input-clean" 
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tantangan Proyek (Challenge)</label>
          <textarea 
            name="challenge" 
            rows={3} 
            defaultValue={project.challenge || ''}
            placeholder="Tulis rincian masalah/tantangan yang dihadapi..."
            className="input-clean" 
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Solusi Fovea (Solution)</label>
          <textarea 
            name="solution" 
            rows={3} 
            defaultValue={project.solution || ''}
            placeholder="Bagaimana Fovea merancang teknologi..."
            className="input-clean" 
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Hasil & Dampak (Results)</label>
          <textarea 
            name="results" 
            rows={2} 
            defaultValue={project.results || ''}
            placeholder="Hasil nyata setelah website/sistem live..."
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
          {isSubmitting ? 'Menyimpan...' : 'Simpan Perubahan'}
        </button>
        <Link href="/portfolio" className="btn-secondary cursor-pointer">
          Batal
        </Link>
      </div>
    </form>
  );
}
