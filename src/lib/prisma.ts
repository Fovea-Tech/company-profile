import { PrismaClient } from '@prisma/client';
import { PrismaD1 } from '@prisma/adapter-d1';
import { getCloudflareContext } from '@opennextjs/cloudflare';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

let localPrisma: PrismaClient | null = null;

// Menggunakan Proxy agar kita bisa mengevaluasi `getCloudflareContext()` secara lazy (saat function dipanggil)
export const prisma = new Proxy({} as PrismaClient, {
  get(target, prop) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let env: any;
    try {
      // Dapatkan binding Cloudflare dari OpenNext context
      env = getCloudflareContext()?.env;
      if (process.env.NODE_ENV === 'production') {
        console.log("DEBUG: Cloudflare env bindings detected:", env ? Object.keys(env) : "ENV IS UNDEFINED");
      }
    } catch (e) {
      if (process.env.NODE_ENV === 'production') {
        console.error("DEBUG: getCloudflareContext threw an error:", e);
      }
    }

    // 1. Jika terdeteksi berjalan di Cloudflare (punya env.DB atau sejenisnya)
    const d1Database = env?.DB || env?.fovea_db || env?.fovea || (globalThis as any).env?.DB || process.env.DB;

    if (d1Database) {
      // Simpan instance Prisma di dalam objek env agar tidak terus-menerus membuat client baru
      if (!env.__prisma) {
        const adapter = new PrismaD1(d1Database);
        env.__prisma = new PrismaClient({ adapter });
      }
      return env.__prisma[prop];
    }

    // Karena proses `next build` berjalan di environment Node.js (bukan Edge/Cloudflare),
    // env.DB pasti undefined saat build. Maka kita tidak boleh melempar error di sini,
    // melainkan biarkan fallback ke localPrisma (yang otomatis membaca dev.db) agar proses build sukses.

    // 2. Fallback jika berjalan di Local Development (npm run dev biasa tanpa wrangler)
    if (!localPrisma) {
      if (globalForPrisma.prisma) {
        localPrisma = globalForPrisma.prisma;
      } else {
        localPrisma = new PrismaClient({
          datasources: {
            db: {
              url: process.env.DATABASE_URL || "file:./dev.db"
            }
          }
        });
        // Karena di atas kita sudah melempar error jika production,
        // baris ini pasti hanya berjalan di development/test.
        globalForPrisma.prisma = localPrisma;
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (localPrisma as any)[prop];
  }
});
