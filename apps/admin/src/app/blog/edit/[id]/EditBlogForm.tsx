'use client';

import { useState, useRef } from 'react';
import { updateBlog } from '@/app/actions/blog';
import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '@/types';
import React from 'react';

interface EditBlogFormProps {
  blog: Blog;
}

export default function EditBlogForm({ blog }: EditBlogFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(blog.image || null);
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
        formData.set('image', webpBlob, `${blog.id}.webp`);
      }

      // Bind updateBlog with the blog ID
      await updateBlog(blog.id, formData);
    } catch (error: any) {
      if (error?.digest?.startsWith('NEXT_REDIRECT') || (error?.message && error.message.includes('NEXT_REDIRECT'))) {
        throw error;
      }
      console.error('Failed to submit blog edits:', error);
      alert('Terjadi kesalahan saat memperbarui artikel blog.');
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
      <input type="hidden" name="existing_image" value={blog.image} />
      <input type="hidden" name="slug" value={blog.slug} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Judul Artikel</label>
          <input 
            name="title" 
            required 
            defaultValue={blog.title}
            placeholder="contoh: Pentingnya PPDB Online untuk Efisiensi Staf Sekolah Swasta" 
            className="input-clean" 
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Kategori</label>
          <select 
            name="category" 
            required 
            defaultValue={blog.category}
            className="input-clean bg-white"
          >
            <option value="Pendidikan">Pendidikan</option>
            <option value="Agency">Agency</option>
            <option value="Teknologi">Teknologi</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Status Publikasi</label>
          <select 
            name="status" 
            required 
            defaultValue={blog.status}
            className="input-clean bg-white"
          >
            <option value="draft">Draft (Simpan Internal)</option>
            <option value="published">Published (Tampilkan di Website)</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Upload Banner Gambar Baru (Optional)</label>
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
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Preview Banner Saat Ini</label>
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

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Konten Artikel (Mendukung Markdown)</label>
          <textarea 
            name="content" 
            required 
            rows={15} 
            defaultValue={blog.content}
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
          {isSubmitting ? 'Menyimpan...' : 'Simpan Perubahan'}
        </button>
        <Link href="/blog" className="btn-secondary cursor-pointer">
          Batal
        </Link>
      </div>
    </form>
  );
}
