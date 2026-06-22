'use client';

import { useState, useRef } from 'react';
import { createBlog } from '@/app/actions/blog';
import Link from 'next/link';
import React from 'react';

export default function CreateBlogForm() {
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
        formData.set('image', webpBlob, `blog-temp.webp`);
      }

      await createBlog(formData);
    } catch (error: any) {
      if (error?.digest?.startsWith('NEXT_REDIRECT') || (error?.message && error.message.includes('NEXT_REDIRECT'))) {
        throw error;
      }
      console.error('Failed to submit blog:', error);
      alert('Terjadi kesalahan saat menyimpan artikel blog.');
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
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Judul Artikel</label>
          <input 
            name="title" 
            required 
            placeholder="contoh: Pentingnya PPDB Online untuk Efisiensi Staf Sekolah Swasta" 
            className="input-clean" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Kategori</label>
          <select name="category" required className="input-clean bg-white">
            <option value="Pendidikan">Pendidikan</option>
            <option value="Agency">Agency</option>
            <option value="Teknologi">Teknologi</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Status Publikasi</label>
          <select name="status" required className="input-clean bg-white">
            <option value="draft">Draft (Simpan Internal)</option>
            <option value="published">Published (Tampilkan di Website)</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Upload Banner Gambar</label>
          <input 
            name="image" 
            required 
            type="file" 
            accept="image/*" 
            className="input-clean file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border file:border-slate-200 file:bg-slate-50 file:text-xs file:font-semibold file:text-slate-700 hover:file:bg-slate-100 cursor-pointer" 
          />
          <p className="text-xs text-slate-400 mt-1">Disarankan resolusi landscape (16:9 atau 16:10).</p>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Konten Artikel (Mendukung Markdown)</label>
          <textarea 
            name="content" 
            required 
            rows={15} 
            placeholder="Tulis artikel lengkap di sini. Anda dapat menggunakan format Markdown seperti # Judul, **Teks Tebal**, atau - List Item..."
            className="input-clean font-mono text-sm leading-relaxed" 
          />
        </div>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-border mt-6">
        <button 
          type="submit" 
          disabled={isSubmitting} 
          className="btn-primary disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? 'Menyimpan...' : 'Simpan Artikel'}
        </button>
        <Link href="/blog" className="btn-secondary cursor-pointer">
          Batal
        </Link>
      </div>
    </form>
  );
}
