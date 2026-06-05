'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createFaq(formData: FormData) {
  await prisma.faq.create({
    data: {
      question_id: formData.get('question_id') as string,
      question_en: formData.get('question_en') as string,
      answer_id: formData.get('answer_id') as string,
      answer_en: formData.get('answer_en') as string,
      order: parseInt(formData.get('order') as string || '0', 10),
    }
  });

  revalidatePath('/admin/faq');
  revalidatePath('/');
  redirect('/admin/faq');
}

export async function deleteFaq(id: string) {
  await prisma.faq.delete({ where: { id } });
  revalidatePath('/admin/faq');
  revalidatePath('/');
}
