/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient, SupabaseClient } from '@supabase/supabase-js';

let cachedClient: SupabaseClient | null = null;

export const supabase = new Proxy({} as SupabaseClient, {
  get(target, prop: keyof SupabaseClient) {
    if (cachedClient) return cachedClient[prop];

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      // Return a fast mock client to prevent 60-second timeouts during local dev without .env
      const mockChain: any = {
        select: () => mockChain,
        order: () => mockChain,
        limit: () => Promise.resolve({ data: [] }),
        eq: () => mockChain,
        single: () => Promise.resolve({ data: null }),
        then: (resolve: any) => resolve({ data: [] })
      };
      return prop === 'from' ? () => mockChain : undefined;
    }

    cachedClient = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      }
    });

    return cachedClient[prop];
  }
});
