'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

import { Portfolio } from '@prisma/client';

interface FeaturedPortfolioProps {
  projects: Portfolio[];
}

export default function FeaturedPortfolio({ projects }: FeaturedPortfolioProps) {
  const { t, lang } = useLang();

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="section-shell overflow-visible bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="page-shell overflow-visible">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border-[3px] border-black bg-[#FFD84D] px-5 py-3 text-xs font-black uppercase tracking-wide text-black shadow-[5px_5px_0_#111111]">
              {t.featuredPortfolio.heading}
            </p>

            <div className="mt-10 space-y-5">
              <h2
                id="portfolio-title"
                className="text-balance text-4xl font-black leading-[1.12] tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-[56px]"
              >
                {t.featuredPortfolio.title}
              </h2>

              <p className="max-w-2xl text-base font-medium leading-8 text-[#2C2C2C] sm:text-lg">
                {t.featuredPortfolio.subtitle}
              </p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Link
              href="/portfolio"
              className="inline-flex min-h-16 items-center justify-center rounded-xl border-[3px] border-black bg-[#6FFF9A] px-8 text-base font-black text-black shadow-[6px_6px_0_#111111] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
            >
              {t.featuredPortfolio.cta}
            </Link>
          </div>
        </div>

        <div className="mt-16 overflow-visible px-1 pb-6 sm:px-2">
          <div className="grid overflow-visible gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0_#111111] transition-all duration-200 hover:-translate-y-1 hover:shadow-[12px_12px_0_#111111]"
              >
                <Link href={`/portfolio/${project.id}`} className="block relative aspect-16/10 w-full border-b-[3px] border-black bg-[#E2EEFF] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={lang === 'id' ? project.title_id : project.title_en}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute left-4 top-4 rounded-full border-[3px] border-black bg-[#FFD84D] px-3 py-1 text-xs font-black text-black shadow-[3px_3px_0_#111111]">
                    {lang === 'id' ? project.category_id : project.category_en}
                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <Link href={`/portfolio/${project.id}`}>
                    <h3 className="mb-3 text-2xl font-black tracking-tight text-black line-clamp-2 hover:underline">
                      {lang === 'id' ? project.title_id : project.title_en}
                    </h3>
                  </Link>
                  <p className="flex-1 text-base font-medium text-[#2C2C2C] line-clamp-3">
                    {lang === 'id' ? project.desc_id : project.desc_en}
                  </p>
                  <Link 
                    href={`/portfolio/${project.id}`}
                    className="mt-6 inline-flex items-center justify-center rounded-xl border-[3px] border-black bg-[#FFD84D] px-5 py-3 text-sm font-black text-black shadow-[4px_4px_0_#111111] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="/portfolio"
            className="inline-flex min-h-16 w-full items-center justify-center rounded-xl border-[3px] border-black bg-[#6FFF9A] px-8 text-base font-black text-black shadow-[6px_6px_0_#111111] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
          >
            {t.featuredPortfolio.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
