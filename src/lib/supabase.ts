import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { getCloudflareContext } from '@opennextjs/cloudflare';

let cachedClient: SupabaseClient | null = null;

export const supabase = new Proxy({} as SupabaseClient, {
  get(target, prop: keyof SupabaseClient) {
    if (cachedClient) return cachedClient[prop];

    let env: any = process.env;
    try {
      env = getCloudflareContext()?.env || process.env;
    } catch (e) {
      // Ignored outside request context
    }

    const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || env.SUPABASE_URL || process.env.SUPABASE_URL || 'https://dummy.supabase.co';
    const supabaseServiceKey = env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || 'dummy-key';

    cachedClient = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      }
    });

    return cachedClient[prop];
  }
});
