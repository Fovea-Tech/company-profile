import Layers from 'lucide-react/dist/esm/icons/layers';
import Zap from 'lucide-react/dist/esm/icons/zap';
import CreditCard from 'lucide-react/dist/esm/icons/credit-card';
import Lock from 'lucide-react/dist/esm/icons/lock';
import Users from 'lucide-react/dist/esm/icons/users';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import CheckCircle2 from 'lucide-react/dist/esm/icons/circle-check';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Produk SaaS Fovea | Aplikasi SaaS Siap Pakai untuk Bisnis Indonesia',
  description: 'Produk SaaS (Software as a Service) milik Fovea Teknologi yang siap pakai, terjangkau, dan selalu diperbarui. Cocok untuk freelancer, UMKM, dan digital agency di Indonesia.',
  alternates: {
    canonical: 'https://www.fovea.digital/services/saas',
  },
  openGraph: {
    title: 'Produk SaaS Fovea | Aplikasi SaaS Siap Pakai untuk Bisnis Indonesia',
    description: 'Produk SaaS milik Fovea Teknologi: siap pakai, harga langganan terjangkau, selalu diperbarui. Daftar sekarang dan tingkatkan produktivitas bisnis Anda.',
    url: 'https://www.fovea.digital/services/saas',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Produk SaaS Fovea Teknologi' }],
  },
};

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none" aria-hidden="true">
      <div
        style={{
          position: 'absolute',
          inset: '-40px',
          background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 60%)',
          filter: 'blur(32px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background: '#FFFFFF',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)',
          display: 'flex',
          height: '360px',
        }}
      >
        {/* Sidebar */}
        <div style={{ width: '70px', borderRight: '1px solid var(--border)', background: '#F8FAFC', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0', gap: '20px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'var(--secondary)' }} />
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#E2E8F0', marginTop: '10px' }} />
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#E2E8F0' }} />
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#E2E8F0' }} />
        </div>
        
        {/* Main Content */}
        <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', background: '#FFFFFF' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ width: '140px', height: '24px', background: '#E2E8F0', borderRadius: '6px' }} />
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#F1F5F9', border: '1px solid #E2E8F0' }} />
          </div>

          {/* Cards */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ flex: 1, padding: '16px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '36px', height: '36px', background: '#EFF6FF', borderRadius: '8px', marginBottom: '16px' }} />
              <div style={{ width: '60px', height: '12px', background: '#94A3B8', borderRadius: '4px', marginBottom: '8px' }} />
              <div style={{ width: '80px', height: '24px', background: '#0F172A', borderRadius: '6px' }} />
            </div>
            <div style={{ flex: 1, padding: '16px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '36px', height: '36px', background: '#F0FDF4', borderRadius: '8px', marginBottom: '16px' }} />
              <div style={{ width: '60px', height: '12px', background: '#94A3B8', borderRadius: '4px', marginBottom: '8px' }} />
              <div style={{ width: '80px', height: '24px', background: '#0F172A', borderRadius: '6px' }} />
            </div>
          </div>

          {/* Chart area */}
          <div style={{ flex: 1, background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
            {[30, 50, 80, 40, 60, 90, 70].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 2 || i === 5 ? 'var(--secondary)' : '#E2E8F0', borderRadius: '4px 4px 0 0', transition: 'height 0.3s ease' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SaaSServicePage() {
  const data = {
    features: [
      {
        title: 'Siap Pakai (Ready to Use)',
        desc: 'Aplikasi bisa langsung digunakan tanpa proses setup atau development berbulan-bulan.',
        icon: <Rocket size={24} />,
        color: '#8B5CF6',
      },
      {
        title: 'Selalu Diperbarui',
        desc: 'Mendapatkan update fitur baru dan perbaikan bug secara otomatis dan gratis.',
        icon: <Zap size={24} />,
        color: '#F59E0B',
      },
      {
        title: 'Infrastruktur Tahan Banting',
        desc: 'Dibangun di atas cloud modern yang cepat, aman, dan bisa melayani ribuan user sekaligus.',
        icon: <Layers size={24} />,
        color: '#3B82F6',
      },
      {
        title: 'Harga Terjangkau',
        desc: 'Sistem pembayaran langganan (bulanan/tahunan) yang jauh lebih hemat dibanding membuat aplikasi custom.',
        icon: <CreditCard size={24} />,
        color: '#10B981',
      },
      {
        title: 'Keamanan Data Terjamin',
        desc: 'Data pengguna diamankan dengan standar enkripsi industri terkini.',
        icon: <Lock size={24} />,
        color: '#06B6D4',
      },
      {
        title: 'Dukungan Pelanggan',
        desc: 'Dukungan penuh dari tim Fovea dan akses ke komunitas pengguna yang solid.',
        icon: <Users size={24} />,
        color: '#EC4899',
      },
    ],
    idealFor: [
      'Freelancer & Pekerja Mandiri yang butuh alat bantu operasional cepat',
      'UMKM yang ingin mendigitalisasi bisnis tanpa biaya besar',
      'Digital Agency untuk manajemen proyek atau laporan klien',
      'Perusahaan skala besar yang butuh solusi instan untuk tim spesifik',
    ],
    process: [
      { title: '1. Eksplorasi & Registrasi', desc: 'Kunjungi situs produk SaaS kami dan buat akun baru dengan mudah.' },
      { title: '2. Pilih Paket Langganan', desc: 'Pilih paket bulanan, tahunan, atau gratis (freemium) sesuai kebutuhan Anda.' },
      { title: '3. Langsung Gunakan', desc: 'Nikmati fitur lengkap untuk menyelesaikan pekerjaan Anda lebih cepat.' },
      { title: '4. Beri Feedback', desc: 'Sampaikan saran fitur baru kepada kami, dan nikmati update berikutnya!' },
    ],
    deliverables: [
      'Akses Penuh Aplikasi (24/7)',
      'Layanan Bantuan Pelanggan (CS)',
      'Penyimpanan Data di Cloud',
      'Pembaruan Sistem Rutin',
    ],
    faqs: [
      {
        q: 'Apakah saya bisa melakukan request fitur pada produk SaaS Fovea?',
        a: 'Ya, kami sangat terbuka dengan feedback pengguna. Saran fitur yang paling banyak diminta akan kami rilis pada update berikutnya.',
      },
      {
        q: 'Bagaimana sistem pembayarannya?',
        a: 'Setiap produk SaaS kami biasanya menyediakan paket berlangganan bulanan atau tahunan (subscription), dan beberapa menyediakan skema Pay-As-You-Go atau Freemium.',
      },
      {
        q: 'Apakah data saya aman di platform SaaS Fovea?',
        a: 'Sangat aman. Produk kami dibangun di atas layanan cloud kelas enterprise dengan sistem keamanan ketat dan pencadangan (backup) rutin.',
      },
    ],
  };

  return (
    <main className="min-h-screen pt-20" style={{ background: 'var(--bg)' }}>
      {/* ── Hero ── */}
      <header className="relative overflow-hidden" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="hero-dot-grid absolute inset-0" aria-hidden="true" />
        <div className="hero-glow-tr absolute" aria-hidden="true" />

        <div className="page-shell relative z-10 py-16 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            {/* Left text */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-6 uppercase tracking-wider"
                style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  color: '#7C3AED',
                }}
              >
                <Layers size={14} />
                Layanan Produk SaaS
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
                Aplikasi SaaS Siap Pakai untuk Percepat Bisnis Anda.
              </h1>
              
              <p
                className="text-slate-600 leading-relaxed mb-8"
                style={{ fontSize: '1.0625rem', maxWidth: '50ch' }}
              >
                Hemat waktu dan biaya. Tidak perlu membangun sistem dari nol. Gunakan produk software berlangganan kami yang dirancang khusus untuk menyelesaikan masalah operasional Anda secara instan.
              </p>

              <nav aria-label="Hero actions" className="flex flex-wrap gap-3 mt-4">
                <Link href="/#contact" className="btn-primary cursor-pointer text-sm">
                  Lihat Produk Kami
                  <ArrowRight size={14} className="ml-1.5" />
                </Link>
              </nav>
            </div>

            {/* Right visual */}
            <div className="lg:col-span-6 flex justify-center">
              <DashboardMockup />
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
              &ldquo;Membangun sistem IT sendiri membutuhkan biaya mahal dan waktu berbulan-bulan. Solusinya? Gunakan lini produk SaaS Fovea Teknologi. Anda cukup berlangganan dengan biaya terjangkau, dan langsung nikmati aplikasi canggih yang selalu diperbarui.&rdquo;
            </h2>
          </div>
        </div>
      </section>

      {/* ── Features (Grid) ── */}
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
              Keunggulan SaaS Kami
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f, i) => (
              <article
                key={i}
                className="card-clean p-8 flex flex-col group hover:-translate-y-1 transition-transform duration-300"
                style={{ background: '#FFFFFF' }}
              >
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
              </article>
            ))}
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
                Cara Memulai
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
                        background: '#7C3AED',
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
                      <div style={{ color: '#7C3AED', marginTop: '2px' }}>
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
                  Layanan Termasuk
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
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-transform group-open:rotate-180 group-open:bg-purple-50 group-open:text-purple-600">↓</span>
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
            background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
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
              Mari Mulai Digitalisasi Sekarang
            </h2>
            <p
              className="leading-relaxed mb-8"
              style={{ fontSize: '1.0625rem', color: 'var(--muted-dark)', maxWidth: '46ch' }}
            >
              Eksplorasi produk SaaS kami dan hubungi tim jika butuh konsultasi pemilihan paket yang tepat.
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
