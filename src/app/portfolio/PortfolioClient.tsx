'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useLang } from '@/context/LanguageContext';
import { Portfolio } from '@prisma/client';

interface PortfolioClientProps {
  projects: Portfolio[];
}

export default function PortfolioClient({ projects }: PortfolioClientProps) {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = projects.map(p => lang === 'id' ? p.category_id : p.category_en);
    return ['All', ...Array.from(new Set(cats))];
  }, [projects, lang]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(p => (lang === 'id' ? p.category_id : p.category_en) === activeCategory);
  }, [projects, activeCategory, lang]);

  return (
    <>
      {/* Category Filter */}
      <section className="mt-40 mb-16">
        <div className="page-shell">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={[
                  'rounded-full border-[3px] border-black px-5 py-2 text-sm font-black transition-all duration-200 active:translate-y-1 active:shadow-[2px_2px_0_#111111]',
                  activeCategory === category
                    ? 'bg-[#FFD84D] text-black shadow-[4px_4px_0_#111111]'
                    : 'bg-white text-[#2C2C2C] hover:shadow-[4px_4px_0_#111111] hover:text-black',
                ].join(' ')}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="">
        <div className="page-shell">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group flex flex-col overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0_#111111] transition-all duration-200 hover:-translate-y-1 hover:shadow-[12px_12px_0_#111111]"
              >
                {/* Image Wrapper */}
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

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <Link href={`/portfolio/${project.id}`}>
                    <h3 className="mb-3 text-2xl font-black tracking-tight text-black line-clamp-2 hover:underline">
                      {lang === 'id' ? project.title_id : project.title_en}
                    </h3>
                  </Link>
                  <p className="mb-6 flex-1 text-base font-medium text-[#2C2C2C] line-clamp-3">
                    {lang === 'id' ? project.desc_id : project.desc_en}
                  </p>
                  
                  <Link 
                    href={`/portfolio/${project.id}`}
                    className="mt-auto inline-flex items-center justify-center rounded-xl border-[3px] border-black bg-[#FFD84D] px-5 py-3 text-sm font-black text-black shadow-[4px_4px_0_#111111] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
