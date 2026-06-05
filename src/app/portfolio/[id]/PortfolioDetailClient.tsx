'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';
import { Portfolio } from '@prisma/client';

export default function PortfolioDetailClient({ project }: { project: Portfolio }) {
  const { lang, t } = useLang();

  // Parse tech strings
  const technologies = project.tech.split(',').map(t => t.trim());

  return (
    <div className="pb-24 pt-32">
      {/* Header Section */}
      <section className="section-shell relative overflow-visible">
        <div className="page-shell">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#2C2C2C] hover:text-black hover:underline mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Kembali ke Portofolio
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between mb-12">
            <div className="max-w-4xl">
              <div className="inline-flex rounded-full border-[3px] border-black bg-[#FFD84D] px-4 py-1.5 text-xs font-black uppercase tracking-wide text-black shadow-[3px_3px_0_#111111] mb-6">
                {lang === 'id' ? project.category_id : project.category_en}
              </div>
              <h1 className="text-balance text-4xl font-black leading-[1.1] tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-[64px]">
                {lang === 'id' ? project.title_id : project.title_en}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section-shell">
        <div className="page-shell">
          <div className="relative aspect-video w-full rounded-3xl border-4 border-black bg-[#E2EEFF] overflow-hidden shadow-[12px_12px_0_#111111]">
            <Image
              src={project.image}
              alt={lang === 'id' ? project.title_id : project.title_en}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-shell mt-16 sm:mt-24">
        <div className="page-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Left Sidebar (Info) */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl border-[3px] border-black bg-[#F7F7F4] p-8 shadow-[8px_8px_0_#111111] sticky top-32">
                <h3 className="text-2xl font-black tracking-tight text-black mb-8 border-b-[3px] border-black pb-4">
                  Info Proyek
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-black uppercase text-[#2C2C2C] mb-1">Klien</p>
                    <p className="text-xl font-bold text-black">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase text-[#2C2C2C] mb-1">Tahun</p>
                    <p className="text-xl font-bold text-black">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase text-[#2C2C2C] mb-3">Teknologi</p>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map(tech => (
                        <span key={tech} className="inline-flex items-center rounded-full border-2 border-black bg-white px-3 py-1 text-sm font-bold text-black shadow-[2px_2px_0_#111111]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content (Story) */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none text-[#2C2C2C]">
                
                <h2 className="text-3xl font-black tracking-tight text-black mb-6">Latar Belakang & Tantangan</h2>
                <p className="text-lg leading-relaxed mb-12 font-medium">
                  {lang === 'id' ? project.challenge_id : project.challenge_en}
                </p>

                <h2 className="text-3xl font-black tracking-tight text-black mb-6">Solusi Kami</h2>
                <p className="text-lg leading-relaxed mb-12 font-medium">
                  {lang === 'id' ? project.solution_id : project.solution_en}
                </p>

                <div className="rounded-2xl border-[3px] border-black bg-[#E2EEFF] p-8 shadow-[8px_8px_0_#111111]">
                  <h2 className="text-2xl font-black tracking-tight text-black mb-4">Hasil & Dampak</h2>
                  <p className="text-lg leading-relaxed font-bold text-[#111111]">
                    {lang === 'id' ? project.results_id : project.results_en}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="section-shell mt-32">
        <div className="page-shell">
          <div className="flex flex-col items-center rounded-3xl border-[3px] border-black bg-[#6FFF9A] p-12 text-center shadow-[12px_12px_0_#111111] sm:p-20">
            <h2 className="mb-6 max-w-3xl text-balance text-4xl font-black tracking-tight text-black sm:text-5xl lg:text-6xl">
              {t.featuredPortfolio.title}
            </h2>
            <p className="mb-10 max-w-2xl text-lg font-medium text-[#111111]">
              Konsultasikan ide Anda bersama tim kami secara gratis. Mari wujudkan visi digital Anda.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex min-h-16 items-center justify-center rounded-xl border-[3px] border-black bg-[#FFD84D] px-8 text-lg font-black text-black shadow-[6px_6px_0_#111111] transition-all duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
              >
                Mulai Konsultasi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
