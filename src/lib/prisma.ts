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
    } catch (e) {
      // Akan throw error jika dijalankan di luar siklus request, atau saat local dev
    }

    // 1. Jika terdeteksi berjalan di Cloudflare (punya env.DB)
    if (env?.DB) {
      // Simpan instance Prisma di dalam objek env agar tidak terus-menerus membuat client baru
      if (!env.__prisma) {
        const adapter = new PrismaD1(env.DB);
        env.__prisma = new PrismaClient({ adapter });
      }
      return env.__prisma[prop];
    }

    // 2. Fallback jika berjalan di Local Development (npm run dev biasa tanpa wrangler)
    if (!localPrisma) {
      if (globalForPrisma.prisma) {
        localPrisma = globalForPrisma.prisma;
      } else {
        localPrisma = new PrismaClient();
        if (process.env.NODE_ENV !== 'production') {
          globalForPrisma.prisma = localPrisma;
        }
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (localPrisma as any)[prop];
  }
});
