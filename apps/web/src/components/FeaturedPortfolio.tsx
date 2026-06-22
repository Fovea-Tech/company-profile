import Image from 'next/image';
import Link from 'next/link';
import { Portfolio } from '@/types';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import ArrowUpRight from 'lucide-react/dist/esm/icons/arrow-up-right';
import FolderKanban from 'lucide-react/dist/esm/icons/folder-kanban';
import React from 'react';

interface FeaturedPortfolioProps {
  projects: Portfolio[];
}

function CategoryBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary border border-blue-100"
      style={{ letterSpacing: '0.01em' }}
    >
      {label}
    </span>
  );
}

function ImagePlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
      <FolderKanban size={32} />
    </div>
  );
}

function FeaturedCard({ project }: { project: Portfolio }) {
  return (
    <article className="h-full">
      <Link
        href={`/portfolio/${project.id}`}
        className="portfolio-featured-card group block h-full"
        aria-label={`Lihat proyek: ${project.title}`}
      >
      <div className="portfolio-featured-image">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 58vw"
            priority
          />
        ) : (
          <ImagePlaceholder />
        )}
        <div className="portfolio-featured-overlay" aria-hidden="true" />
        <div className="absolute top-4 left-4 z-10">
          <CategoryBadge label={project.category} />
        </div>
        <div
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          aria-hidden="true"
        >
          <ArrowUpRight size={16} className="text-primary" />
        </div>
      </div>

      <div className="portfolio-featured-body">
        <h3 className="portfolio-featured-title group-hover:text-secondary transition-colors duration-200">
          {project.title}
        </h3>
        <p className="portfolio-featured-desc">
          {project.description}
        </p>
        <span className="portfolio-featured-link">
          Lihat Detail
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
    </article>
  );
}

function SideCard({ project }: { project: Portfolio }) {
  return (
    <article>
      <Link
        href={`/portfolio/${project.id}`}
        className="portfolio-side-card group flex gap-4 h-full"
        aria-label={`Lihat proyek: ${project.title}`}
      >
      <div className="portfolio-side-thumb shrink-0">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            sizes="120px"
          />
        ) : (
          <ImagePlaceholder />
        )}
      </div>

      <div className="flex flex-col justify-center min-w-0 gap-1.5">
        <CategoryBadge label={project.category} />
        <h3 className="portfolio-side-title group-hover:text-secondary transition-colors duration-200 line-clamp-2">
          {project.title}
        </h3>
        <p className="portfolio-side-desc line-clamp-2">
          {project.description}
        </p>
        <span className="portfolio-side-link">
          Lihat Detail
          <ArrowRight size={12} />
        </span>
      </div>
    </Link>
    </article>
  );
}

export default function FeaturedPortfolio({ projects }: FeaturedPortfolioProps) {
  const featured = projects[0] ?? null;
  const sideProjects = projects.slice(1);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="section-padding bg-white border-t border-border"
    >
      <div className="page-shell">

        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-primary mb-4 border border-blue-100">
              PORTOFOLIO TERPILIH
            </span>
            <h2
              id="portfolio-title"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: '#0F172A',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                margin: '0 0 12px',
                textWrap: 'balance',
              }}
            >
              Karya Inovatif yang Telah Mengudara.
            </h2>
            <p className="max-w-2xl text-slate-600 text-base md:text-lg leading-relaxed mt-3" style={{ fontSize: '1.125rem' }}>
              Beberapa contoh implementasi sistem yang kami rancang untuk memecahkan masalah klien kami.
            </p>
          </div>

          <div className="hidden md:block shrink-0">
            <Link
              href="/portfolio"
              className="btn-secondary flex items-center gap-1.5 text-sm px-6 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 transition-colors rounded-full font-semibold text-slate-700"
            >
              Lihat Semua Portofolio
              <ArrowRight size={16} />
            </Link>
          </div>
        </header>

        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400 gap-3">
            <FolderKanban size={40} strokeWidth={1.5} />
            <p className="text-sm">Belum ada portofolio yang ditampilkan.</p>
          </div>
        ) : (
          <div className="portfolio-layout">
            {featured && (
              <div className="portfolio-col-main">
                <FeaturedCard project={featured} />
              </div>
            )}
            {sideProjects.length > 0 && (
              <div className="portfolio-col-side">
                {sideProjects.map((project) => (
                  <SideCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/portfolio"
            className="btn-primary w-full text-center flex items-center justify-center gap-1.5 text-sm py-3"
          >
            Lihat Semua Portofolio
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
