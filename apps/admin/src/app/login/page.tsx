'use client';

import { useState } from 'react';
import { login } from '@/app/actions/auth';
import React from 'react';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    try {
      const res = await login(formData);
      if (res?.error) {
        setError(res.error);
        setLoading(false);
      }
    } catch (err: any) {
      // Perilaku redirect di Server Actions bisa memicu error, abaikan redirect error
      if (err?.digest?.startsWith('NEXT_REDIRECT') || (err?.message && err.message.includes('NEXT_REDIRECT'))) {
        throw err;
      }
      console.error(err);
      setError('Terjadi kesalahan tidak terduga.');
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg p-4">
      <div className="w-full max-w-md card-clean p-8 sm:p-10">
        <div className="mb-8 text-center">
          <span className="inline-block rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 mb-3">
            Fovea Technology
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Login Admin</h1>
          <p className="text-slate-500 text-sm mt-1">Masukkan kredensial Anda untuk mengelola konten.</p>
        </div>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-xs font-semibold text-red-600 border border-red-100">
            {error}
          </div>
        )}

        <form action={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="admin@fovea.digital"
              className="input-clean text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="••••••••"
              className="input-clean text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary text-sm font-semibold disabled:opacity-50 mt-2 cursor-pointer"
          >
            {loading ? 'Memproses...' : 'Masuk ke Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}
