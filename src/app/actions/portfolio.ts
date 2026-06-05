'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPortfolio(formData: FormData) {
  const data = {
    id: formData.get('id') as string,
    title_id: formData.get('title_id') as string,
    title_en: formData.get('title_en') as string,
    category_id: formData.get('category_id') as string,
    category_en: formData.get('category_en') as string,
    image: formData.get('image') as string,
    desc_id: formData.get('desc_id') as string,
    desc_en: formData.get('desc_en') as string,
    client: formData.get('client') as string,
    year: formData.get('year') as string,
    tech: formData.get('tech') as string,
    challenge_id: formData.get('challenge_id') as string,
    challenge_en: formData.get('challenge_en') as string,
    solution_id: formData.get('solution_id') as string,
    solution_en: formData.get('solution_en') as string,
    results_id: formData.get('results_id') as string,
    results_en: formData.get('results_en') as string,
  };

  await supabase.from('Portfolio').insert(data);

  revalidatePath('/admin/portfolio');
  revalidatePath('/portfolio');
  revalidatePath('/');
  redirect('/admin/portfolio');
}

export async function deletePortfolio(id: string) {
  await supabase.from('Portfolio').delete().eq('id', id);
  revalidatePath('/admin/portfolio');
  revalidatePath('/portfolio');
  revalidatePath('/');
}
