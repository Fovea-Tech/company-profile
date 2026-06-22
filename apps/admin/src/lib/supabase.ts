import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { getCloudflareContext } from '@opennextjs/cloudflare';

let cachedClient: SupabaseClient | null = null;

export const supabase = new Proxy({} as SupabaseClient, {
  get(target, prop: keyof SupabaseClient) {
    if (cachedClient) return cachedClient[prop];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let env: any = process.env;
    try {
      env = getCloudflareContext()?.env || process.env;
    } catch (e) {
      // Ignored outside request context
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL || env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SERVICE_ROLE_KEY;

    cachedClient = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      }
    });

    return cachedClient[prop];
  }
});
