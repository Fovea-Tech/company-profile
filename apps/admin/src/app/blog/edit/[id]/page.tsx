import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import EditBlogForm from './EditBlogForm';
import React from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: PageProps) {
  const { id } = await params;

  const { data: blog } = await supabase
    .from('Blog')
    .select('*')
    .eq('id', id)
    .single();

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/blog" className="rounded-lg border border-border bg-white p-2 hover:bg-slate-50 transition-all cursor-pointer">
          <ArrowLeft size={18} className="text-slate-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Edit Artikel Blog</h1>
          <p className="text-slate-500 text-sm mt-0.5">Ubah informasi artikel blog yang sudah ditulis.</p>
        </div>
      </div>

      <div className="card-clean p-8">
        <EditBlogForm blog={blog} />
      </div>
    </div>
  );
}
