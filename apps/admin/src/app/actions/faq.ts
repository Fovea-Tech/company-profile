'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createFaq(formData: FormData) {
  const question = formData.get('question') as string;
  const answer = formData.get('answer') as string;
  const order = parseInt(formData.get('order') as string || '0', 10);

  const { error } = await supabase.from('FAQ').insert({
    question,
    answer,
    order
  });

  if (error) {
    console.error('Error creating FAQ:', error);
    throw new Error(`Gagal menyimpan FAQ: ${error.message}`);
  }

  revalidatePath('/faq');
  revalidatePath('/');
  redirect('/faq');
}

export async function updateFaq(id: string, formData: FormData) {
  const question = formData.get('question') as string;
  const answer = formData.get('answer') as string;
  const order = parseInt(formData.get('order') as string || '0', 10);

  const { error } = await supabase
    .from('FAQ')
    .update({
      question,
      answer,
      order,
      updatedAt: new Date().toISOString()
    })
    .eq('id', id);

  if (error) {
    console.error('Error updating FAQ:', error);
    throw new Error(`Gagal mengupdate FAQ: ${error.message}`);
  }

  revalidatePath('/faq');
  revalidatePath('/');
  redirect('/faq');
}

export async function deleteFaq(id: string) {
  const { error } = await supabase.from('FAQ').delete().eq('id', id);
  if (error) {
    console.error('Error deleting FAQ:', error);
    throw new Error(`Gagal menghapus FAQ: ${error.message}`);
  }
  revalidatePath('/faq');
  revalidatePath('/');
}
