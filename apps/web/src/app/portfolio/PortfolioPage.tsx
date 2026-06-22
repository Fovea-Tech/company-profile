"use client";

import Link from 'next/link';
import PortfolioClient from './PortfolioClient';
import { Portfolio } from '@/types';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import Layers from 'lucide-react/dist/esm/icons/layers';

interface PortfolioPageProps {
  projects: Portfolio[];
}

export default function PortfolioPage({ projects }: PortfolioPageProps) {

  /* Build category counts for the hero decoration */
  const categorySet = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <main className="pt-10 min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── Hero ── */}
      <header
        className="relative overflow-hidden"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="hero-dot-grid absolute inset-0" aria-hidden="true" />
        <div className="hero-glow-tr absolute" aria-hidden="true" />
        <div className="hero-glow-bl absolute" aria-hidden="true" />

        <div className="page-shell relative z-10 py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">

            {/* Left text */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-6"
                style={{
                  background: 'var(--secondary-light)',
                  border: '1px solid var(--secondary-mid)',
                  color: 'var(--secondary)',
                }}
              >
                <Layers size={12} />
                Portofolio Kami
              </span>

              <h1
                className="text-slate-900 mb-5"
                style={{
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  textWrap: 'balance',
                }}
              >
                Bukti Nyata Solusi Teknologi Fovea
              </h1>

              <p
                className="text-slate-600 leading-relaxed mb-8"
                style={{ fontSize: '1.0625rem', maxWidth: '52ch' }}
              >
                Jelajahi berbagai sistem yang telah kami bangun, mulai dari website sekolah premium hingga sistem custom tingkat lanjut untuk partner agensi.
              </p>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3 mt-2">
                {[
                  { val: `${projects.length}+`, label: 'Proyek Selesai' },
                  { val: `${categorySet.length}`, label: 'Kategori Solusi' },
                  { val: '100%', label: 'Klien Puas' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      padding: '10px 18px',
                      background: '#FFFFFF',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      boxShadow: 'var(--shadow-xs)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        color: '#0F172A',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                      }}
                    >
                      {stat.val}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: '#64748B',
                        fontWeight: 600,
                        marginTop: '2px',
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right decoration: stacked category chips */}
            <div
              className="lg:col-span-5 portfolio-hero-deco"
              aria-hidden="true"
            >
              <ul
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  alignItems: 'flex-end',
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}
              >
                {/* Ambient glow */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '-40px',
                    background:
                      'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(59,130,246,0.09) 0%, transparent 70%)',
                    filter: 'blur(24px)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Mini project preview cards */}
                {[
                  { label: 'Website Sekolah', sub: 'SMA Nusantara (Live)', dot: '#10B981' },
                  { label: 'PPDB Online', sub: 'Auto-scale cloud · 5k user', dot: '#3B82F6' },
                  { label: 'Landing Page', sub: 'Conversion rate +38%', dot: '#F59E0B' },
                  { label: 'Dashboard Admin', sub: 'Portal nilai & absensi', dot: '#8B5CF6' },
                  { label: 'White-Label SaaS', sub: 'Agency partner project', dot: '#EC4899' },
                ].map((item, i) => (
                  <li
                    key={item.label}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      padding: '12px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      width: `${82 - i * 6}%`,
                      boxShadow: 'var(--shadow-sm)',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: item.dot,
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: '#0F172A',
                          lineHeight: 1.2,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: '0.72rem',
                          color: '#64748B',
                          marginTop: '2px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.sub}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* ── Filter + Grid ── */}
      <PortfolioClient projects={projects} />

      {/* ── CTA ── */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: 'var(--bg-dark)', marginTop: '-1px' }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="page-shell relative z-10">
          <article
            className="flex flex-col items-center text-center mx-auto"
            style={{
              maxWidth: '680px',
              background: 'var(--surface-dark)',
              border: '1px solid var(--border-dark)',
              borderRadius: '20px',
              padding: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--ink-dark)',
                textWrap: 'balance',
              }}
            >
              Ingin Mulai Membangun?
            </h2>
            <p
              className="leading-relaxed mb-8"
              style={{
                fontSize: '1.0625rem',
                color: 'var(--muted-dark)',
                maxWidth: '48ch',
              }}
            >
              Diskusikan proyek sekolah Anda atau diskusikan kebutuhan development agensi Anda bersama kami secara gratis.
            </p>
            <nav aria-label="CTA actions" className="flex flex-wrap justify-center gap-3 mt-3">
              <Link
                href="/#contact"
                className="btn-primary cursor-pointer text-sm"
              >
                Hubungi Kami
                <ArrowRight size={14} className="ml-1.5" />
              </Link>
              <a
                href="https://wa.me/628818204100"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-dark text-sm flex items-center gap-2"
              >
                <MessageSquare size={14} />
                Chat WhatsApp
              </a>
            </nav>
          </article>
        </div>
      </section>
    </main>
  );
}