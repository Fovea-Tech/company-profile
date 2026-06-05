'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createFaq(formData: FormData) {
  await supabase.from('FAQ').insert({
    question_id: formData.get('question_id') as string,
    question_en: formData.get('question_en') as string,
    answer_id: formData.get('answer_id') as string,
    answer_en: formData.get('answer_en') as string,
    order: parseInt(formData.get('order') as string || '0', 10),
  });

  revalidatePath('/admin/faq');
  revalidatePath('/');
  redirect('/admin/faq');
}

export async function deleteFaq(id: string) {
  await supabase.from('FAQ').delete().eq('id', id);
  revalidatePath('/admin/faq');
  revalidatePath('/');
}
