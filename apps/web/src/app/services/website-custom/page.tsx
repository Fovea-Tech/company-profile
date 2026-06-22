import PenTool from 'lucide-react/dist/esm/icons/pen-tool';
import Zap from 'lucide-react/dist/esm/icons/zap';
import Smartphone from 'lucide-react/dist/esm/icons/smartphone';
import Settings2 from 'lucide-react/dist/esm/icons/settings-2';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import MonitorPlay from 'lucide-react/dist/esm/icons/monitor-play';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import Code2 from 'lucide-react/dist/esm/icons/code-xml';
import CheckCircle2 from 'lucide-react/dist/esm/icons/circle-check';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Jasa Website Custom | Fovea Teknologi: Web Company Profile, Landing Page, Katalog',
  description: 'Jasa pembuatan website custom profesional: company profile, landing page konversi tinggi, katalog produk, dan sistem booking. Desain eksklusif, SEO optimized, fast loading. Oleh Fovea Teknologi.',
  alternates: {
    canonical: 'https://www.fovea.digital/services/website-custom',
  },
  openGraph: {
    title: 'Jasa Website Custom Profesional | Fovea Teknologi',
    description: 'Jasa pembuatan website custom yang rapi, cepat, dan SEO-friendly. Mulai dari company profile, landing page, hingga katalog produk interaktif. Hubungi Fovea Teknologi.',
    url: 'https://www.fovea.digital/services/website-custom',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Jasa Website Custom Fovea Teknologi' }],
  },
};

function BrowserMockup() {
  return (
    <div className="relative w-full select-none" aria-hidden="true">
      <div
        style={{
          position: 'absolute',
          inset: '-32px',
          background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(59,130,246,0.12) 0%, transparent 70%)',
          filter: 'blur(28px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background: '#FFFFFF',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        {/* Title bar */}
        <div
          style={{
            background: '#F8FAFC',
            borderBottom: '1px solid var(--border)',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#E2E8F0' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#E2E8F0' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#E2E8F0' }} />
          </div>
          <div
            style={{
              marginLeft: '12px',
              height: '24px',
              flex: 1,
              background: '#FFFFFF',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              padding: '0 10px',
            }}
          >
            <div style={{ width: '40%', height: '8px', background: '#F1F5F9', borderRadius: '4px' }} />
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Skeleton Hero */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ width: '80%', height: '24px', background: '#E2E8F0', borderRadius: '6px' }} />
              <div style={{ width: '60%', height: '24px', background: '#E2E8F0', borderRadius: '6px' }} />
              <div style={{ width: '90%', height: '10px', background: '#F1F5F9', borderRadius: '4px', marginTop: '8px' }} />
              <div style={{ width: '70%', height: '10px', background: '#F1F5F9', borderRadius: '4px' }} />
              <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                <div style={{ width: '80px', height: '28px', background: 'var(--secondary)', borderRadius: '6px' }} />
                <div style={{ width: '80px', height: '28px', background: '#F1F5F9', borderRadius: '6px' }} />
              </div>
            </div>
            <div style={{ width: '120px', height: '120px', background: '#F8FAFC', border: '1px dashed #CBD5E1', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MonitorPlay size={32} color="#94A3B8" />
            </div>
          </div>
          
          {/* Skeleton Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '8px' }}>
            {[1,2,3].map(i => (
                <div key={i} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px' }}>
                  <div style={{ width: '24px', height: '24px', background: '#E2E8F0', borderRadius: '6px', marginBottom: '8px' }} />
                  <div style={{ width: '100%', height: '8px', background: '#E2E8F0', borderRadius: '4px', marginBottom: '6px' }} />
                  <div style={{ width: '60%', height: '8px', background: '#F1F5F9', borderRadius: '4px' }} />
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WebsiteCustomPage() {
  const data = {
    features: [
      {
        title: 'Desain UI/UX Eksklusif (100% Original)',
        desc: 'Tidak ada website lain yang kembar dengan milik Anda. Desain dirancang khusus sesuai karakter dan panduan visual brand Anda.',
        icon: <PenTool size={24} />,
        color: '#3B82F6',
      },
      {
        title: 'Super Cepat & Disukai Google (SEO)',
        desc: 'Website lelet membuat pelanggan kabur. Kami memastikan waktu loading di bawah 2 detik agar skor SEO Anda maksimal.',
        icon: <Zap size={24} />,
        color: '#F59E0B',
      },
      {
        title: 'Tampil Sempurna di Semua Perangkat',
        desc: '80% pengunjung datang dari HP. Website Anda akan otomatis beradaptasi dengan mulus di layar mobile, tablet, maupun desktop.',
        icon: <Smartphone size={24} />,
        color: '#10B981',
      },
      {
        title: 'Mudah Dikelola (Sistem CMS Modern)',
        desc: 'Anda tidak perlu paham koding. Kami sediakan panel admin yang semudah menggunakan Microsoft Word untuk mengubah teks dan gambar.',
        icon: <Settings2 size={24} />,
        color: '#8B5CF6',
      },
      {
        title: 'Animasi yang Menghidupkan Website',
        desc: 'Tinggalkan website yang kaku. Kami menyematkan interaksi dan animasi halus agar pengunjung betah berlama-lama.',
        icon: <Sparkles size={24} />,
        color: '#EC4899',
      },
      {
        title: 'Keamanan Tingkat Tinggi',
        desc: 'Karena dibangun secara custom, website Anda jauh lebih kebal dari serangan hacker dan spam dibanding CMS tradisional.',
        icon: <ShieldCheck size={24} />,
        color: '#06B6D4',
      },
    ],
    idealFor: [
      'Perusahaan skala menengah hingga besar (Company Profile)',
      'Brand produk yang membutuhkan Landing Page konversi tinggi',
      'Agensi Kreatif & Arsitek (Portfolio Web)',
      'Bisnis B2B (Katalog Produk & Solusi)',
    ],
    process: [
      {
        title: '1. Analisis Kebutuhan',
        desc: 'Kita mulai dengan mengobrol santai. Kami bedah apa tujuan bisnis Anda dan fitur apa yang sebenarnya dibutuhkan.',
      },
      {
        title: '2. Desain Visual (Mockup)',
        desc: 'Tim desainer kami akan menggambar blueprint dan antarmuka (UI) website untuk Anda setujui sebelum mulai dikerjakan.',
      },
      {
        title: '3. Pengembangan (Coding)',
        desc: 'Desain disulap menjadi website interaktif yang responsif dan siap digunakan dengan teknologi Next.js terkini.',
      },
      {
        title: '4. Optimasi & Peluncuran',
        desc: 'Kami lakukan quality control, pengecekan kecepatan, optimasi SEO, lalu website Anda siap live dan menyapa dunia!',
      },
    ],
    deliverables: [
      'Website Live di Domain Anda',
      'Akses CMS Panel',
      'Laporan Performa (Lighthouse)',
      'Figma Design',
      'Source Code',
    ],
    faqs: [
      {
        q: 'Apa bedanya dengan website WordPress / Wix?',
        a: 'Website custom dikoding secara khusus (hardcoded) menggunakan teknologi terkini. Hasilnya 10x lebih cepat, aman dari peretasan (karena bukan CMS tradisional), dan desainnya tidak kaku.',
      },
      {
        q: 'Apakah saya bisa mengubah konten (teks/gambar) sendiri?',
        a: 'Tentu. Kami dapat mengintegrasikan Headless CMS yang sangat mudah digunakan, sehingga Anda dapat mengubah konten seperti menulis di Word, tanpa menyentuh kodingan.',
      },
      {
        q: 'Apakah domain dan hosting sudah termasuk?',
        a: 'Kami dapat membantu Anda melakukan pendaftaran domain dan hosting (deployment) di cloud provider modern seperti Vercel. Biaya tahunan server bisa ditagihkan terpisah atau masuk ke paket.',
      },
    ],
  };

  return (
    <main className="min-h-screen pt-20" style={{ background: 'var(--bg)' }}>
      {/* ── Hero ── */}
      <header
        className="relative overflow-hidden"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="hero-dot-grid absolute inset-0" aria-hidden="true" />
        <div className="hero-glow-tr absolute" aria-hidden="true" />

        <div className="page-shell relative z-10 py-16 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            {/* Left text */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-6 uppercase tracking-wider"
                style={{
                  background: 'var(--secondary-light)',
                  border: '1px solid var(--secondary-mid)',
                  color: 'var(--secondary)',
                }}
              >
                <Code2 size={14} />
                Layanan Website Custom
              </span>

              <h1
                className="text-slate-900 mb-6"
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  textWrap: 'balance',
                }}
              >
                Jasa Pembuatan Website Custom yang Mencerminkan Kelas Bisnis Anda.
              </h1>
              
              <p
                className="text-slate-600 leading-relaxed mb-8"
                style={{ fontSize: '1.0625rem', maxWidth: '50ch' }}
              >
                Dapatkan website eksklusif, aman, dan super cepat. Dirancang khusus dari nol tanpa template pasaran untuk merepresentasikan identitas brand Anda secara sempurna.
              </p>

              <nav aria-label="Hero actions" className="flex flex-wrap gap-3 mt-4">
                <Link href="/#contact" className="btn-primary cursor-pointer text-sm">
                  Hubungi Kami
                  <ArrowRight size={14} className="ml-1.5" />
                </Link>
                <a
                  href="https://wa.me/628818204100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  Chat WhatsApp
                </a>
              </nav>
            </div>

            {/* Right visual */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-xl">
                <BrowserMockup />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Overview Statement ── */}
      <section className="section-padding" style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border)' }}>
        <div className="page-shell">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-slate-900"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.5,
                textWrap: 'balance',
              }}
            >
              &ldquo;Kami percaya setiap bisnis itu unik, begitu pula websitenya. Kami tidak menggunakan WordPress theme standar. Kami merancang Company Profile, Landing Page, dan Katalog Produk dengan teknologi modern agar website Anda tidak hanya memukau secara visual, tapi juga mendominasi pencarian Google.&rdquo;
            </h2>
          </div>
        </div>
      </section>

      {/* ── Features (Bento Grid) ── */}
      <section className="section-padding" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="page-shell">
          <header className="mb-14 text-center max-w-2xl mx-auto">
            <h2
              className="text-slate-900 mb-4"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
              }}
            >
              Mengapa Memilih Custom?
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f, i) => {
                const isWide = i === 0 || i === 3;
                return (
                  <article
                    key={i}
                    className="card-clean p-8 flex flex-col justify-between group"
                    style={{
                      gridColumn: isWide ? 'span 2' : 'span 1',
                      background: '#FFFFFF',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          background: `${f.color}15`,
                          color: f.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '20px',
                          border: `1px solid ${f.color}30`,
                        }}
                      >
                        {f.icon}
                      </div>
                      <h3
                        className="text-slate-900 mb-3"
                        style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}
                      >
                        {f.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed" style={{ fontSize: '1rem' }}>
                        {f.desc}
                      </p>
                    </div>
                  </article>
                );
            })}
          </div>
        </div>
      </section>

      {/* ── Process & Ideal For Split ── */}
      <section className="section-padding" style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border)' }}>
        <div className="page-shell">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Process Timeline */}
            <div>
              <h2
                className="text-slate-900 mb-8"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em' }}
              >
                Proses Kerja
              </h2>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '15px', top: '24px', bottom: '24px', width: '2px', background: 'var(--border)' }} />
                
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative' }}>
                  {data.process.map((p, i) => (
                    <li key={i} style={{ display: 'flex', gap: '20px', position: 'relative', zIndex: 1 }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background: 'var(--secondary)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        flexShrink: 0,
                        border: '4px solid #FFFFFF',
                        boxShadow: '0 0 0 1px var(--border)'
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                        {p.title}
                      </h3>
                      <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6 }}>
                        {p.desc}
                      </p>
                    </div>
                  </li>
                ))}
                </ol>
              </div>
            </div>

            {/* Right: Ideal For & Deliverables */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              
              {/* Ideal For */}
              <div className="card-clean p-8" style={{ background: '#F8FAFC' }}>
                <h2
                  className="text-slate-900 mb-6"
                  style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em' }}
                >
                  Cocok Untuk
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {data.idealFor.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ color: 'var(--secondary)', marginTop: '2px' }}>
                        <CheckCircle2 size={18} />
                      </div>
                      <span style={{ fontSize: '1rem', color: '#334155', fontWeight: 500, lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <h2
                  className="text-slate-900 mb-6"
                  style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em' }}
                >
                  Hasil Akhir (Deliverables)
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {data.deliverables.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        padding: '8px 16px',
                        background: '#FFFFFF',
                        border: '1px solid var(--border)',
                        borderRadius: '99px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#475569',
                        boxShadow: 'var(--shadow-xs)',
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding" style={{ background: 'var(--bg)' }}>
        <div className="page-shell max-w-3xl">
          <header className="text-center mb-12">
            <h2
              className="text-slate-900"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em' }}
            >
              FAQ
            </h2>
          </header>
          <div className="grid gap-4">
            {data.faqs.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-border bg-white p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all duration-200">
                <summary className="flex items-center justify-between text-base md:text-lg font-bold text-slate-900 outline-none select-none">
                  {faq.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-transform group-open:rotate-180 group-open:bg-blue-50 group-open:text-primary">↓</span>
                </summary>
                <div className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: 'var(--bg-dark)' }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
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
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--ink-dark)',
                textWrap: 'balance',
              }}
            >
              Mari Bangun Solusi Digital Anda Bersama Kami.
            </h2>
            <p
              className="leading-relaxed mb-8"
              style={{ fontSize: '1.0625rem', color: 'var(--muted-dark)', maxWidth: '46ch' }}
            >
              Ceritakan kebutuhan agensi Anda atau konsultasikan digitalisasi sekolah Anda secara gratis.
            </p>
            <nav aria-label="CTA actions" className="flex flex-wrap justify-center gap-3 mt-3">
              <Link href="/#contact" className="btn-primary cursor-pointer text-sm">
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
