import { supabase } from '@/lib/supabase';
import { Blog } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import ArrowUpRight from 'lucide-react/dist/esm/icons/arrow-up-right';
import React from 'react';

export const revalidate = 3600;

export const metadata = {
  title: 'Blog & Edukasi Digital | Fovea Technology',
  description:
    'Artikel terbaru mengenai tips digitalisasi sekolah swasta, ppdb online, kemitraan agensi digital, dan perkembangan teknologi web terkini.',
};

function formatDate(dateStr: string | Date | undefined) {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return String(dateStr);
  }
}

function stripMarkdown(text: string) {
  return text.replace(/[#*`_>\-\[\]]/g, '').replace(/\n+/g, ' ').trim();
}

/* ─────────────────────── Featured Article (horizontal) ─────────────────────── */
function FeaturedCard({ post }: { post: Blog }) {
  return (
    <article className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="blog-featured-card block h-full"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderRadius: '16px',
        overflow: 'hidden',
        background: '#FFFFFF',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
        textDecoration: 'none',
        minHeight: '340px',
      }}
    >
      {/* Image */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: '#E8EDF4',
        }}
      >
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover blog-img-scale"
            sizes="(max-width: 768px) 100vw, 50vw"
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
            <FileText size={40} />
          </div>
        )}
        {/* Overlay on hover */}
        <div className="blog-overlay" />
      </div>

      {/* Content */}
      <div
        style={{
          padding: '36px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              color: 'var(--secondary)',
              background: 'var(--secondary-light)',
              border: '1px solid var(--secondary-mid)',
              padding: '3px 10px',
              borderRadius: '99px',
            }}
          >
            {post.category}
          </span>
          <span
            style={{
              fontSize: '0.75rem',
              color: '#94A3B8',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Calendar size={11} />
            {formatDate(post.createdAt)}
          </span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
            fontWeight: 800,
            color: '#0F172A',
            letterSpacing: '-0.03em',
            lineHeight: 1.25,
            margin: 0,
            textWrap: 'balance',
          }}
          className="blog-featured-title line-clamp-3"
        >
          {post.title}
        </h2>

        <p
          style={{
            fontSize: '0.9375rem',
            color: '#475569',
            lineHeight: 1.7,
            margin: 0,
          }}
          className="line-clamp-3"
        >
          {stripMarkdown(post.content).slice(0, 180)}…
        </p>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: 'var(--secondary)',
            marginTop: '4px',
          }}
          className="blog-cta-link"
        >
          Baca Selengkapnya
          <ArrowUpRight size={15} />
        </div>
      </div>
      </Link>
    </article>
  );
}

/* ─────────────────────── Regular Article Card ─────────────────────── */
function ArticleCard({ post }: { post: Blog }) {
  return (
    <article className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="blog-card block h-full"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '14px',
        overflow: 'hidden',
        background: '#FFFFFF',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
        textDecoration: 'none',
        height: '100%',
      }}
    >
      {/* Image */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          background: '#E8EDF4',
          flexShrink: 0,
        }}
      >
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover blog-img-scale"
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
            <FileText size={28} />
          </div>
        )}
        <div className="blog-overlay" />
      </div>

      {/* Content */}
      <div
        style={{
          padding: '20px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          flex: 1,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              color: 'var(--secondary)',
              background: 'var(--secondary-light)',
              border: '1px solid var(--secondary-mid)',
              padding: '2px 9px',
              borderRadius: '99px',
            }}
          >
            {post.category}
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              color: '#94A3B8',
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
            }}
          >
            <Calendar size={10} />
            {formatDate(post.createdAt)}
          </span>
        </div>

        <h3
          style={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: '#0F172A',
            letterSpacing: '-0.02em',
            lineHeight: 1.3,
            margin: 0,
          }}
          className="blog-card-title line-clamp-2"
        >
          {post.title}
        </h3>

        <p
          style={{
            fontSize: '0.875rem',
            color: '#475569',
            lineHeight: 1.65,
            margin: 0,
            flex: 1,
          }}
          className="line-clamp-2"
        >
          {stripMarkdown(post.content).slice(0, 120)}…
        </p>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--secondary)',
            marginTop: '4px',
          }}
          className="blog-cta-link"
        >
          Baca Selengkapnya
          <ArrowRight size={13} />
        </div>
      </div>
      </Link>
    </article>
  );
}

/* ─────────────────────── Empty State ─────────────────────── */
function EmptyState() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '96px 24px',
        gap: '16px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '18px',
          background: 'var(--secondary-light)',
          border: '1px solid var(--secondary-mid)',
          color: 'var(--secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FileText size={28} />
      </div>
      <div>
        <p style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.05rem', margin: 0 }}>
          Belum ada artikel yang dipublikasikan
        </p>
        <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '8px', maxWidth: '40ch', margin: '8px auto 0' }}>
          Segera hadir. Tim Fovea sedang menyiapkan konten edukatif seputar teknologi pendidikan dan kolaborasi dengan digital agency.
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────── Main Page ─────────────────────── */
export default async function PublicBlogPage() {
  const { data: rawBlogList = [] } = await supabase
    .from('Blog')
    .select('*')
    .eq('status', 'published')
    .order('createdAt', { ascending: false });

  const blogList = (rawBlogList || []) as Blog[];
  const [featured, ...rest] = blogList;

  return (
    <main className="pb-24 pt-10 min-h-screen" style={{ background: 'var(--bg)' }}>

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
            <div className="lg:col-span-6 flex flex-col items-start">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-6"
                style={{
                  background: 'var(--secondary-light)',
                  border: '1px solid var(--secondary-mid)',
                  color: 'var(--secondary)',
                }}
              >
                <BookOpen size={12} />
                Fovea Blog
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
                Edukasi Teknologi &amp; Wawasan Bisnis
              </h1>

              <p
                className="text-slate-600 leading-relaxed mb-8"
                style={{ fontSize: '1.0625rem', maxWidth: '50ch' }}
              >
                Panduan, insight, dan tips praktis seputar digitalisasi pendidikan swasta serta manajemen operasional proyek agensi digital.
              </p>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3 mt-2">
                {[
                  { val: `${blogList.length}`, label: 'Artikel Tersedia' },
                  { val: '2 Topik', label: 'Pendidikan & Agensi' },
                  { val: 'Gratis', label: 'Tanpa Paywall' },
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

            {/* Right: decorative article preview stack */}
            <div
              className="lg:col-span-6 blog-hero-deco"
              aria-hidden="true"
            >
              <ul style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: '-40px',
                    background:
                      'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,130,246,0.09) 0%, transparent 70%)',
                    filter: 'blur(24px)',
                    pointerEvents: 'none',
                  }}
                />
                {[
                  { cat: 'Digitalisasi', title: 'Cara Sekolah Swasta Atur PPDB Online Tanpa Server Down', dot: '#3B82F6' },
                  { cat: 'Agensi', title: 'Strategi White-Label Development untuk Pertumbuhan Agency', dot: '#8B5CF6' },
                  { cat: 'Tutorial', title: 'Panduan SEO Website Sekolah agar Muncul di Google', dot: '#10B981' },
                  { cat: 'Teknologi', title: 'Kenapa Cloud Hosting Lebih Aman dari Server Fisik Sekolah', dot: '#F59E0B' },
                ].map((item, i) => (
                  <li
                    key={item.title}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      padding: '14px 18px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      position: 'relative',
                      zIndex: 1,
                      marginLeft: `${i * 12}px`,
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: item.dot,
                        flexShrink: 0,
                        marginTop: '5px',
                      }}
                    />
                    <div style={{ minWidth: 0 }}>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.07em',
                          color: '#94A3B8',
                        }}
                      >
                        {item.cat}
                      </span>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: '#0F172A',
                          lineHeight: 1.4,
                          margin: '3px 0 0',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.title}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* ── Articles ── */}
      <section style={{ paddingTop: '64px', paddingBottom: '96px' }}>
        <div className="page-shell">
          {blogList.length === 0 ? (
            <EmptyState />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

              {/* Featured article — full-width horizontal */}
              {featured && (
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '16px',
                    }}
                  >
                    <h2
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#94A3B8',
                        margin: 0,
                      }}
                    >
                      Artikel Terbaru
                    </h2>
                    <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                  </div>
                  <FeaturedCard post={featured} />
                </div>
              )}

              {/* Rest of articles — responsive grid */}
              {rest.length > 0 && (
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '16px',
                    }}
                  >
                    <h2
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#94A3B8',
                        margin: 0,
                      }}
                    >
                      Semua Artikel
                    </h2>
                    <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                  </div>

                  <div className="blog-grid">
                    {rest.map((post) => (
                      <ArticleCard key={post.id} post={post} />
                    ))}
                  </div>
                </div>
              )}

              {/* If only 1 article total, skip "Semua Artikel" label */}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
