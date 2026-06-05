'use server';

import { supabase } from '@/lib/supabase';
import bcrypt from 'bcryptjs';
import { createSession, deleteSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email dan password harus diisi.' };
  }

  const { data: user } = await supabase
    .from('User')
    .select('*')
    .eq('email', email)
    .single();

  if (!user) {
    return { error: 'Kredensial tidak valid.' };
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return { error: 'Kredensial tidak valid.' };
  }

  await createSession(user.id);
  redirect('/admin/dashboard');
}

export async function logout() {
  await deleteSession();
  redirect('/admin/login');
}
