import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  if (process.env.NODE_ENV === 'production') {
    console.warn("WARNING: Supabase URL or Service Key is missing. Database queries will fail.");
  }
}

// Gunakan Service Role Key untuk operasi admin (bypassing RLS)
// Supabase-js bisa dijalankan di Edge runtime tanpa masalah!
export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  }
});
