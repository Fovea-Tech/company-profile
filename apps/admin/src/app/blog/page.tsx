import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { deleteBlog } from '@/app/actions/blog';
import Image from 'next/image';
import { Plus, Edit2, Trash2, Calendar, FileText } from 'lucide-react';
import React from 'react';

export const dynamic = 'force-dynamic';

export default async function AdminBlogPage() {
  const { data: blogs = [] } = await supabase
    .from('Blog')
    .select('*')
    .order('createdAt', { ascending: false });

  const formatDate = (dateStr: string | Date | undefined) => {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch (e) {
      return String(dateStr);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Kelola Blog</h1>
          <p className="text-slate-500 mt-1">Daftar artikel edukatif dan teknologi yang dipublikasikan.</p>
        </div>
        <Link 
          href="/blog/create"
          className="inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm cursor-pointer"
        >
          <Plus size={16} />
          Tulis Artikel Baru
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {(blogs || []).map(post => (
          <div key={post.id} className="card-clean p-5 flex flex-col md:flex-row items-center gap-5">
            <div className="relative aspect-video w-full md:w-44 bg-slate-100 rounded-lg overflow-hidden shrink-0">
              {post.image ? (
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover" 
                  sizes="176px"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                  <FileText size={24} />
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0 w-full">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                  {post.category}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-md ${
                  post.status === 'published' 
                    ? 'text-emerald-700 bg-emerald-50' 
                    : 'text-amber-700 bg-amber-50'
                }`}>
                  {post.status === 'published' ? 'Published' : 'Draft'}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar size={12} />
                  {formatDate(post.createdAt)}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-1 truncate">{post.title}</h3>
              <p className="text-slate-500 text-xs truncate max-w-2xl">{post.content.replace(/[#*`_]/g, '')}</p>
            </div>
            
            <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
              <Link
                href={`/blog/edit/${post.id}`}
                className="inline-flex items-center gap-1 rounded-lg border border-border bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <Edit2 size={12} />
                Edit
              </Link>
              
              <form action={async () => {
                'use server';
                await deleteBlog(post.id);
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
        {(!blogs || blogs.length === 0) && (
          <div className="p-12 text-center card-clean text-slate-500">
            Belum ada artikel blog. Silakan tulis artikel baru.
          </div>
        )}
      </div>
    </div>
  );
}
