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

  const { data: user, error } = await supabase
    .from('User')
    .select('*')
    .eq('email', email)
    .single();

  if (error) {
    console.error("Supabase Login Error:", error);
    // Tampilkan pesan error spesifik jika terjadi kegagalan sistem (misal: env vars hilang, tabel tidak ada)
    return { error: `System Error: ${error.message || JSON.stringify(error)}` };
  }

  if (!user) {
    return { error: 'Akun tidak ditemukan. Pastikan Anda sudah menjalankan SQL Insert.' };
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return { error: 'Kredensial tidak valid.' };
  }

  await createSession(user.id);
  redirect('/dashboard');
}

export async function logout() {
  await deleteSession();
  redirect('/login');
}
