'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Ganti spasi dengan -
    .replace(/[^\w\-]+/g, '') // Hapus karakter non-word
    .replace(/\-\-+/g, '-'); // Ganti multi - dengan satu -
}

async function uploadImage(imageFile: File | null, id: string, type: 'blogs' | 'portfolios'): Promise<string | null> {
  if (imageFile && typeof imageFile !== 'string' && imageFile.size > 0) {
    const fileExtension = imageFile.name.split('.').pop() || 'webp';
    const filename = `${type}/${id}-${Date.now()}.${fileExtension}`;
    
    const { error: uploadError } = await supabase.storage
      .from('media')
      .upload(filename, imageFile, {
        contentType: imageFile.type || 'image/webp',
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.error('Supabase upload error:', uploadError);
      throw new Error(`Gagal mengupload gambar: ${uploadError.message}`);
    }

    const { data: publicUrlData } = supabase.storage
      .from('media')
      .getPublicUrl(filename);
      
    return publicUrlData.publicUrl;
  }
  return null;
}

export async function createBlog(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const category = formData.get('category') as string;
  const status = (formData.get('status') as string) || 'draft';
  const imageFile = formData.get('image') as File | null;
  
  const tempId = crypto.randomUUID();
  let imageUrl = '';
  if (imageFile && imageFile.size > 0) {
    imageUrl = await uploadImage(imageFile, tempId, 'blogs') || '';
  } else {
    imageUrl = formData.get('image_url_fallback') as string || '';
  }

  const baseSlug = slugify(title);
  // Pastikan slug unik dengan menambahkan timestamp singkat
  const slug = `${baseSlug}-${Math.floor(Math.random() * 1000)}`;

  const data = {
    title,
    slug,
    content,
    image: imageUrl,
    category,
    status,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const { error } = await supabase.from('Blog').insert(data);
  if (error) {
    console.error('Supabase blog insert error:', error);
    throw new Error(`Gagal menyimpan artikel blog: ${error.message}`);
  }

  revalidatePath('/blog');
  revalidatePath('/');
  redirect('/blog');
}

export async function updateBlog(id: string, formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const category = formData.get('category') as string;
  const status = (formData.get('status') as string) || 'draft';
  const imageFile = formData.get('image') as File | null;
  
  let imageUrl = formData.get('existing_image') as string || '';
  if (imageFile && imageFile.size > 0) {
    const uploadedUrl = await uploadImage(imageFile, id, 'blogs');
    if (uploadedUrl) {
      imageUrl = uploadedUrl;
    }
  }

  const baseSlug = slugify(title);
  // Ambil slug existing atau buat baru dari title jika diubah
  const slug = formData.get('slug') as string || `${baseSlug}-${id.slice(0, 4)}`;

  const data = {
    title,
    slug,
    content,
    image: imageUrl,
    category,
    status,
    updatedAt: new Date().toISOString(),
  };

  const { error } = await supabase
    .from('Blog')
    .update(data)
    .eq('id', id);

  if (error) {
    console.error('Supabase blog update error:', error);
    throw new Error(`Gagal memperbarui artikel blog: ${error.message}`);
  }

  revalidatePath('/blog');
  revalidatePath(`/blog/${slug}`);
  revalidatePath('/');
  redirect('/blog');
}

export async function deleteBlog(id: string) {
  const { error } = await supabase.from('Blog').delete().eq('id', id);
  if (error) {
    console.error('Supabase blog delete error:', error);
    throw new Error(`Gagal menghapus artikel blog: ${error.message}`);
  }
  revalidatePath('/blog');
  revalidatePath('/');
}
