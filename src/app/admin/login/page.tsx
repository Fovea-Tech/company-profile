'use client';

import { useState } from 'react';
import { login } from '@/app/actions/auth';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    const res = await login(formData);
    if (res?.error) {
      setError(res.error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E2EEFF] p-4">
      <div className="w-full max-w-md rounded-3xl border-[3px] border-black bg-white p-8 sm:p-10 shadow-[12px_12px_0_#111111]">
        <div className="mb-8 text-center">
          <div className="inline-flex rounded-full border-[3px] border-black bg-[#FFD84D] px-4 py-1 text-xs font-black uppercase tracking-wide text-black mb-4">
            Fovea Admin
          </div>
          <h1 className="text-3xl font-black tracking-tight text-black">Login</h1>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border-[3px] border-black bg-[#FF8E8B] p-4 text-sm font-bold text-black shadow-[4px_4px_0_#111111]">
            {error}
          </div>
        )}

        <form action={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-black uppercase text-black mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="admin@fovea.digital"
              className="w-full rounded-xl border-[3px] border-black bg-[#F7F7F4] px-4 py-3 text-base font-medium text-black focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FFD84D] transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-black uppercase text-black mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full rounded-xl border-[3px] border-black bg-[#F7F7F4] px-4 py-3 text-base font-medium text-black focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#FFD84D] transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl border-[3px] border-black bg-[#6FFF9A] px-6 py-4 text-center text-lg font-black text-black shadow-[6px_6px_0_#111111] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111] disabled:opacity-50"
          >
            {loading ? 'Masuk...' : 'Masuk'}
          </button>
        </form>
      </div>
    </div>
  );
}
