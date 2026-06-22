'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function uploadImage(imageFile: File | null, id: string, type: 'portfolios' | 'blogs'): Promise<string | null> {
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

export async function createPortfolio(formData: FormData) {
  const id = formData.get('id') as string;
  const imageFile = formData.get('image') as File | null;
  
  let imageUrl = '';
  if (imageFile && imageFile.size > 0) {
    imageUrl = await uploadImage(imageFile, id, 'portfolios') || '';
  } else {
    imageUrl = formData.get('image_url_fallback') as string || '';
  }

  const data = {
    id,
    title: formData.get('title') as string,
    category: formData.get('category') as string,
    image: imageUrl,
    description: formData.get('description') as string,
    client: formData.get('client') as string || null,
    year: formData.get('year') as string || null,
    tech: formData.get('tech') as string || null,
    challenge: formData.get('challenge') as string || null,
    solution: formData.get('solution') as string || null,
    results: formData.get('results') as string || null,
    link: formData.get('link') as string || '',
    updatedAt: new Date().toISOString(),
  };

  const { error } = await supabase.from('Portfolio').insert(data);
  if (error) {
    console.error('Supabase insert error:', error);
    throw new Error(`Gagal menyimpan data portfolio: ${error.message}`);
  }

  revalidatePath('/portfolio');
  revalidatePath('/');
  redirect('/portfolio');
}

export async function updatePortfolio(id: string, formData: FormData) {
  const imageFile = formData.get('image') as File | null;
  let imageUrl = formData.get('existing_image') as string || '';

  if (imageFile && imageFile.size > 0) {
    const uploadedUrl = await uploadImage(imageFile, id, 'portfolios');
    if (uploadedUrl) {
      imageUrl = uploadedUrl;
    }
  }

  const data = {
    title: formData.get('title') as string,
    category: formData.get('category') as string,
    image: imageUrl,
    description: formData.get('description') as string,
    client: formData.get('client') as string || null,
    year: formData.get('year') as string || null,
    tech: formData.get('tech') as string || null,
    challenge: formData.get('challenge') as string || null,
    solution: formData.get('solution') as string || null,
    results: formData.get('results') as string || null,
    link: formData.get('link') as string || '',
    updatedAt: new Date().toISOString(),
  };

  const { error } = await supabase
    .from('Portfolio')
    .update(data)
    .eq('id', id);

  if (error) {
    console.error('Supabase update error:', error);
    throw new Error(`Gagal memperbarui data portfolio: ${error.message}`);
  }

  revalidatePath('/portfolio');
  revalidatePath(`/portfolio/${id}`);
  revalidatePath('/');
  redirect('/portfolio');
}

export async function deletePortfolio(id: string) {
  const { error } = await supabase.from('Portfolio').delete().eq('id', id);
  if (error) {
    console.error('Supabase delete error:', error);
    throw new Error(`Gagal menghapus portfolio: ${error.message}`);
  }
  revalidatePath('/portfolio');
  revalidatePath('/');
}
