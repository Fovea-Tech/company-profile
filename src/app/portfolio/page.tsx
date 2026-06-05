import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import Link from 'next/link';
import PortfolioClient from './PortfolioClient';
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'Portofolio | Fovea Teknologi',
  description: 'Lihat hasil kerja Fovea Teknologi dalam pembuatan website custom, dashboard, sistem booking, dan produk SaaS.',
}

export default async function PortfolioPage() {
  const portfolioData = await prisma.portfolio.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="pb-24 pt-32">
      {/* Header Section */}
      <section className="section-shell relative overflow-visible">
        <div className="page-shell text-center">
          <div className="inline-flex rounded-full border-[3px] border-black bg-[#FFD84D] px-5 py-2 text-sm font-black uppercase tracking-wide text-black shadow-[4px_4px_0_#111111] mb-6">
            Portofolio Kami
          </div>
          <h1 className="text-balance text-5xl font-black leading-[1.1] tracking-[-0.04em] text-[#111111] sm:text-6xl lg:text-[72px] mb-8">
            Bukti Nyata Kami Mendigitalisasi Bisnis
          </h1>
          <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-[#2C2C2C] sm:text-2xl">
            Kami tidak hanya menjual janji. Jelajahi berbagai sistem yang telah kami bangun—mulai dari company profile elegan hingga dashboard SaaS berskala besar.
          </p>
        </div>
      </section>

      <PortfolioClient projects={portfolioData} />

      {/* CTA Section */}
      <section className="section-shell mt-24">
        <div className="page-shell">
          <div className="rounded-3xl border-[3px] border-black bg-[#6FFF9A] p-12 sm:p-20 text-center shadow-[12px_12px_0_#111111]">
            <h2 className="text-4xl font-black tracking-[-0.04em] text-black sm:text-5xl mb-6">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl font-medium text-[#111111]">
              Konsultasikan kebutuhan digital Anda dengan tim kami secara gratis.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl border-[3px] border-black bg-[#FFD84D] px-8 py-4 text-lg font-black text-black shadow-[6px_6px_0_#111111] transition-all duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
              >
                Kirim Ringkasan Proyek
              </Link>
              <a
                href="https://wa.me/628818204100"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-[3px] border-black bg-white px-8 py-4 text-lg font-black text-black shadow-[6px_6px_0_#111111] transition-all duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                Konsultasi WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
