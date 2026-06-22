'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Portfolio } from '@/types';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import ArrowUpRight from 'lucide-react/dist/esm/icons/arrow-up-right';
import FolderKanban from 'lucide-react/dist/esm/icons/folder-kanban';

interface PortfolioClientProps {
  projects: Portfolio[];
}

/* ── Single project card ── */
function ProjectCard({
  project,
  featured = false,
  cardCTA,
}: {
  project: Portfolio;
  featured?: boolean;
  cardCTA: string;
}) {
  return (
    <article className="portfolio-card group h-full">
      <Link
        href={`/portfolio/${project.id}`}
        style={{
          display: 'block',
          position: 'relative',
          borderRadius: '14px',
          overflow: 'hidden',
          background: '#F8FAFC',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
          textDecoration: 'none',
          height: '100%',
          // Featured card taller on desktop via CSS class
        }}
      >
        {/* Image area */}
      <div
        className={featured ? 'portfolio-img-featured' : 'portfolio-img-normal'}
        style={{
          position: 'relative',
          width: '100%',
          background: '#E8EDF4',
          overflow: 'hidden',
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover portfolio-img-scale"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94A3B8',
            }}
          >
            <FolderKanban size={36} />
          </div>
        )}

        {/* Hover overlay */}
        <div className="portfolio-overlay">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#FFFFFF',
              color: '#0F172A',
              fontWeight: 700,
              fontSize: '0.875rem',
              padding: '10px 20px',
              borderRadius: '99px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            }}
          >
            {cardCTA}
            <ArrowUpRight size={15} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: '18px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        {/* Category badge */}
        <span
          style={{
            display: 'inline-flex',
            alignSelf: 'flex-start',
            fontSize: '0.7rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--secondary)',
            background: 'var(--secondary-light)',
            border: '1px solid var(--secondary-mid)',
            padding: '2px 10px',
            borderRadius: '99px',
          }}
        >
          {project.category}
        </span>

        <h3
          style={{
            fontSize: featured ? '1.15rem' : '1rem',
            fontWeight: 700,
            color: '#0F172A',
            letterSpacing: '-0.02em',
            lineHeight: 1.3,
            margin: 0,
          }}
          className="portfolio-card-title line-clamp-2"
        >
          {project.title}
        </h3>

        {featured && (
          <p
            style={{
              fontSize: '0.9rem',
              color: '#475569',
              lineHeight: 1.65,
              margin: 0,
            }}
            className="line-clamp-2"
          >
            {project.description}
          </p>
        )}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--secondary)',
            marginTop: '4px',
          }}
          className="portfolio-card-cta"
        >
          {cardCTA}
          <ArrowRight size={14} />
        </div>
      </div>
      </Link>
    </article>
  );
}

/* ── Empty state ── */
function EmptyState({ category }: { category: string }) {
  return (
    <div
      style={{
        gridColumn: '1 / -1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        gap: '16px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: '16px',
          background: 'var(--secondary-light)',
          border: '1px solid var(--secondary-mid)',
          color: 'var(--secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FolderKanban size={24} />
      </div>
      <div>
        <p
          style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem', margin: 0 }}
        >
          Belum ada proyek di kategori &ldquo;{category}&rdquo;
        </p>
        <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '6px' }}>
          Coba pilih kategori lain untuk melihat portofolio kami.
        </p>
      </div>
    </div>
  );
}

/* ── Main client component ── */
export default function PortfolioClient({ projects }: PortfolioClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = useMemo(() => {
    const cats = projects.map((p) => p.category);
    return ['Semua', ...Array.from(new Set(cats))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Semua') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  /* counts per category */
  const countByCategory = useMemo(() => {
    const map: Record<string, number> = { Semua: projects.length };
    projects.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, [projects]);

  return (
    <>
      {/* ── Filter bar ── */}
      <section style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="page-shell">
          <nav
            aria-label="Portfolio category filter"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  id={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '99px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: isActive
                      ? '1.5px solid var(--secondary)'
                      : '1.5px solid var(--border)',
                    background: isActive ? 'var(--secondary)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#475569',
                    transition: 'all 0.18s cubic-bezier(0.16,1,0.3,1)',
                    boxShadow: isActive ? 'var(--shadow-accent)' : 'none',
                  }}
                >
                  {category}
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      padding: '1px 6px',
                      borderRadius: '99px',
                      background: isActive
                        ? 'rgba(255,255,255,0.22)'
                        : 'var(--secondary-light)',
                      color: isActive ? '#FFFFFF' : 'var(--secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    {countByCategory[category] ?? 0}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* ── Portfolio grid ── */}
      <section style={{ paddingBottom: '96px' }}>
        <div className="page-shell">
          {filteredProjects.length === 0 ? (
            <div style={{ display: 'grid' }}>
              <EmptyState category={activeCategory} />
            </div>
          ) : (
            <div className="portfolio-grid">
              {filteredProjects.map((project, idx) => {
                /* Every 3rd card starting from 0 is "featured" (wider/taller) */
                const groupPos = idx % 3;
                const isFeatured = groupPos === 0;
                return (
                  <div
                    key={project.id}
                    className={
                      isFeatured
                        ? 'portfolio-cell-featured'
                        : 'portfolio-cell-normal'
                    }
                  >
                    <ProjectCard
                      project={project}
                      featured={isFeatured}
                      cardCTA="Lihat Detail Proyek"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
