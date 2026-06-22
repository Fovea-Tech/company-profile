import Link from 'next/link';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Code2 from 'lucide-react/dist/esm/icons/code-xml';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import HeartHandshake from 'lucide-react/dist/esm/icons/heart-handshake';
import Zap from 'lucide-react/dist/esm/icons/zap';
import Globe from 'lucide-react/dist/esm/icons/globe';
import LayoutDashboard from 'lucide-react/dist/esm/icons/layout-dashboard';
import Wrench from 'lucide-react/dist/esm/icons/wrench';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';

export const metadata = {
  title: 'Kemitraan Agensi Digital | Fovea Technology',
  description:
    'Technical partner terpercaya untuk digital agency. Jasa outsourcing white-label website, landing page, dan dashboard klien Anda.',
};

/* ─────────────────────── Terminal mockup visual ─────────────────────── */
function TerminalVisual() {
  const lines = [
    { prefix: '$', text: 'git clone client-landing-page', color: '#94A3B8' },
    { prefix: '✓', text: 'Dependencies installed (2.1s)', color: '#34D399' },
    { prefix: '✓', text: 'Build optimized 98/100 Lighthouse', color: '#34D399' },
    { prefix: '✓', text: 'Deployed to production edge', color: '#34D399' },
    { prefix: '~', text: 'NDA signed · Delivery on time', color: '#93C5FD' },
    { prefix: '$', text: '█', color: '#94A3B8' },
  ];

  return (
    <div className="relative w-full select-none" aria-hidden="true">
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: '-32px',
          background:
            'radial-gradient(ellipse 70% 55% at 45% 55%, rgba(59,130,246,0.10) 0%, transparent 70%)',
          filter: 'blur(28px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Terminal window */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background: '#0B1221',
          border: '1px solid #1E293B',
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow:
            '0 4px 6px -1px rgba(0,0,0,0.12), 0 24px 56px -8px rgba(0,0,0,0.35)',
        }}
      >
        {/* Title bar */}
        <div
          style={{
            background: '#111827',
            borderBottom: '1px solid #1E293B',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', gap: '5px' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FC6058' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEC02F' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#2ACA44' }} />
          </div>
          <span
            style={{
              fontSize: '11px',
              fontFamily: 'monospace',
              color: '#475569',
              marginLeft: '6px',
            }}
          >
            fovea white-label delivery
          </span>
          <span
            style={{
              marginLeft: 'auto',
              fontSize: '10px',
              fontFamily: 'monospace',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '4px',
              background: 'rgba(16,185,129,0.12)',
              color: '#10B981',
              border: '1px solid rgba(16,185,129,0.2)',
            }}
          >
            LIVE
          </span>
        </div>

        {/* Body */}
        <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {lines.map((l, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  color: l.color,
                  flexShrink: 0,
                  lineHeight: 1.8,
                }}
              >
                {l.prefix}
              </span>
              <span
                style={{
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  color: i === lines.length - 1 ? '#94A3B8' : '#CBD5E1',
                  lineHeight: 1.8,
                }}
              >
                {l.text}
              </span>
            </div>
          ))}

          {/* Metrics row */}
          <div
            style={{
              marginTop: '6px',
              paddingTop: '14px',
              borderTop: '1px solid #1E293B',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '10px',
            }}
          >
            {[
              { label: 'Deliveries', val: '100%', sub: 'On-Time' },
              { label: 'Code Quality', val: 'A+', sub: 'Clean & typed' },
              { label: 'NDA Status', val: 'Signed', sub: 'Full secrecy' },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  background: '#060D18',
                  border: '1px solid #1E293B',
                  borderRadius: '8px',
                  padding: '10px',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: '9.5px',
                    fontFamily: 'monospace',
                    color: '#475569',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '4px',
                  }}
                >
                  {m.label}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: '#34D399',
                    lineHeight: 1.2,
                  }}
                >
                  {m.val}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    color: '#334155',
                    marginTop: '2px',
                  }}
                >
                  {m.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Main Page ─────────────────────── */
export default function AgencyPartnershipPage() {
  const suits = [
    {
      title: 'Digital Agency',
      desc: 'Tim developer tambahan untuk menyelesaikan proyek klien tepat waktu tanpa harus merekrut full-time.',
      icon: <Globe size={18} />,
      accentBg: '#EFF6FF',
      accentBorder: '#BFDBFE',
      accentColor: '#2563EB',
    },
    {
      title: 'Creative & Branding Agency',
      desc: 'Fokus pada strategi brand & desain UI/UX, serahkan urusan coding ke partner teknis yang andal.',
      icon: <Sparkles size={18} />,
      accentBg: '#F5F3FF',
      accentBorder: '#DDD6FE',
      accentColor: '#7C3AED',
    },
    {
      title: 'Social Media Agency',
      desc: 'Tawarkan jasa pembuatan website & landing page ke klien secara white-label tanpa dev internal.',
      icon: <HeartHandshake size={18} />,
      accentBg: '#ECFDF5',
      accentBorder: '#A7F3D0',
      accentColor: '#059669',
    },
  ];

  const services = [
    {
      num: '01',
      title: 'White-Label Web Development',
      desc: 'Kami membangun website klien Anda secara penuh dan rahasia. Klien hanya tahu tim internal Anda yang mengerjakannya.',
      icon: <Code2 size={20} />,
    },
    {
      num: '02',
      title: 'Landing Page Campaign',
      desc: 'Halaman promosi berkecepatan tinggi, dioptimasi untuk conversion rate iklan Facebook Ads & Google Ads.',
      icon: <Zap size={20} />,
    },
    {
      num: '03',
      title: 'Dashboard & Sistem Kustom',
      desc: 'Pengembangan database, portal login internal klien, sistem CRM kustom, atau integrasi API kompleks.',
      icon: <LayoutDashboard size={20} />,
    },
    {
      num: '04',
      title: 'Bug Fixing & SLA Maintenance',
      desc: 'Jaminan website klien tetap berjalan optimal dengan pemantauan error rutin dan SLA yang tertulis jelas.',
      icon: <Wrench size={20} />,
    },
  ];

  const benefits = [
    {
      title: 'Fokus pada Penjualan',
      desc: 'Anda fokus mencari klien dan mendesain strategi marketing, kami selesaikan urusan pemrograman.',
    },
    {
      title: 'Kualitas Premium',
      desc: 'Website klien dikembangkan dengan kode yang bersih, cepat, terstruktur, dan memiliki performa SEO tinggi tanpa kompromi.',
    },
    {
      title: 'NDA Terjamin Aman',
      desc: 'Kami menjamin kerahasiaan penuh agensi Anda dengan NDA (Non-Disclosure Agreement) tertulis resmi.',
    },
    {
      title: 'Skalabilitas Kapasitas',
      desc: 'Terima proyek sebanyak apa pun tanpa memikirkan biaya tetap developer internal yang membengkak.',
    },
  ];

  return (
    <main className="min-h-screen pt-10" style={{ background: 'var(--bg)' }}>

      {/* ── Hero ── */}
      <header
        className="relative overflow-hidden"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        {/* Dot grid */}
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
                <ShieldCheck size={12} />
                Agency Technical Partner
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
                Partner Teknis Terpercaya untuk Agensi Kreatif Anda
              </h1>
              <p
                className="text-slate-600 leading-relaxed mb-8"
                style={{ fontSize: '1rem', maxWidth: '50ch' }}
              >
                Fovea Teknologi bertindak sebagai tim developer bayangan (white-label) yang andal. Anda mencari proyek dan membuat desainnya, kami yang merekayasa kodenya.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-8 mt-2">
                {[
                  { val: 'NDA', label: 'Tertulis Resmi' },
                  { val: '100%', label: 'On-Time Delivery' },
                  { val: 'White-Label', label: 'Full Confidential' },
                ].map((badge) => (
                  <div
                    key={badge.label}
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
                        fontSize: '1rem',
                        fontWeight: 800,
                        color: '#0F172A',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                      }}
                    >
                      {badge.val}
                    </span>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        color: '#64748B',
                        fontWeight: 600,
                        marginTop: '2px',
                      }}
                    >
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>

              <nav aria-label="Hero actions" className="flex flex-wrap gap-3">
                <Link href="/#contact" className="btn-primary cursor-pointer text-sm">
                  Jadwalkan Kemitraan
                  <ArrowRight size={14} className="ml-1.5" />
                </Link>
                <a
                  href="https://wa.me/628818204100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  Hubungi WhatsApp
                </a>
              </nav>
            </div>

            {/* Right: terminal visual */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-xl">
                <TerminalVisual />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Cocok Untuk — 3-col cards with accent top strip ── */}
      <section
        className="section-padding"
        style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border)' }}
      >
        <div className="page-shell">
          <header className="mb-14" style={{ maxWidth: '520px' }}>
            <h2
              className="text-slate-900 mb-3"
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                textWrap: 'balance',
              }}
            >
              Didesain untuk Berbagai Jenis Agensi
            </h2>
            <p className="text-slate-600 leading-relaxed" style={{ fontSize: '1.0625rem' }}>
              Kami menyatu secara mulus dengan alur kerja tim agensi Anda saat ini.
            </p>
          </header>

          <div className="grid gap-5 md:grid-cols-3">
            {suits.map((s) => (
              <article
                key={s.title}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                }}
              >
                {/* Accent top strip */}
                <div
                  style={{
                    height: '4px',
                    background: s.accentColor,
                    opacity: 0.7,
                  }}
                />
                <div style={{ padding: '24px' }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '10px',
                      background: s.accentBg,
                      border: `1px solid ${s.accentBorder}`,
                      color: s.accentColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '8px',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>
                    {s.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Layanan — Numbered list with dividers ── */}
      <section
        className="section-padding"
        style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="page-shell">
          {/* 2-col header */}
          <header
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '48px',
              alignItems: 'end',
              marginBottom: '56px',
            }}
            className="services-header"
          >
            <h2
              className="text-slate-900"
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                textWrap: 'balance',
              }}
            >
              Layanan yang Bisa Kami Kerjakan
            </h2>
            <p className="text-slate-600 leading-relaxed" style={{ fontSize: '1.0625rem' }}>
              Solusi rekayasa website end-to-end mulai dari frontend responsif hingga arsitektur database dan integrasi API.
            </p>
          </header>

          {/* Service items with dividers */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {services.map((s, idx) => (
              <article
                key={s.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '64px 1fr auto',
                  gap: '24px',
                  alignItems: 'center',
                  padding: '28px 0',
                  borderTop: idx === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: '1px solid var(--border)',
                }}
                className="service-row"
              >
                {/* Number */}
                <span
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#94A3B8',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {s.num}
                </span>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      letterSpacing: '-0.02em',
                      marginBottom: '6px',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65, maxWidth: '60ch' }}>
                    {s.desc}
                  </p>
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '12px',
                    background: 'var(--secondary-light)',
                    border: '1px solid var(--secondary-mid)',
                    color: 'var(--secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                  className="service-icon"
                >
                  {s.icon}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Keuntungan — Split layout: left claim + right checklist ── */}
      <section
        className="section-padding"
        style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border)' }}
      >
        <div className="page-shell">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '72px',
              alignItems: 'start',
            }}
            className="benefits-grid"
          >
            {/* Left: claim */}
            <header style={{ position: 'sticky', top: '120px' }}>
              <h2
                className="text-slate-900 mb-4"
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  textWrap: 'balance',
                }}
              >
                Mengapa Agensi Memilih Fovea?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8" style={{ fontSize: '1.0625rem', maxWidth: '40ch' }}>
                Kami bukan sekadar freelancer lepasan. Kami berkomitmen untuk mendukung pertumbuhan bisnis agensi Anda dalam jangka panjang dengan sistem solid, SLA terjamin, dan kepercayaan penuh.
              </p>

              {/* Quote block */}
              <div
                className="mt-2"
                style={{
                  padding: '20px 24px',
                  background: 'var(--secondary-light)',
                  border: '1px solid var(--secondary-mid)',
                  borderRadius: '12px',
                }}
              >
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#1E40AF',
                    fontWeight: 600,
                    lineHeight: 1.65,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;Klien Anda akan berpikir sepenuhnya bahwa tim internal Anda yang mengerjakan. Nama Fovea tidak akan pernah muncul.&rdquo;
                </p>
                <p style={{ fontSize: '0.875rem', color: '#3B82F6', fontWeight: 700, marginTop: '10px' }}>
                  Dari Fovea Teknologi, Komitmen Mutlak NDA
                </p>
              </div>
            </header>

            {/* Right: checklist items */}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0', listStyle: 'none', padding: 0, margin: 0 }}>
              {benefits.map((b, idx) => (
                <li
                  key={b.title}
                  style={{
                    padding: '24px 0',
                    borderBottom: idx < benefits.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: '#ECFDF5',
                      border: '1px solid #A7F3D0',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '1.0625rem',
                        fontWeight: 700,
                        color: '#0F172A',
                        letterSpacing: '-0.015em',
                        marginBottom: '5px',
                      }}
                    >
                      {b.title}
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65 }}>
                      {b.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA — dark full-width strip ── */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: 'var(--bg-dark)' }}
      >
        {/* Glow */}
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
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-60px',
            left: '-60px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)',
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
            <span
              className="inline-flex items-center gap-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider"
              style={{
                background: 'rgba(59,130,246,0.12)',
                border: '1px solid rgba(59,130,246,0.25)',
                color: '#93C5FD',
                padding: '5px 14px',
              }}
            >
              Mulai Kemitraan
            </span>
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
              Kurangi Beban Teknis Agensi Anda Mulai Hari Ini
            </h2>
            <p
              className="leading-relaxed mb-8"
              style={{ fontSize: '1rem', color: 'var(--muted-dark)', maxWidth: '46ch' }}
            >
              Kirimkan kriteria web dev partner yang Anda cari. Kami menjamin kerahasiaan penuh agensi Anda secara hukum dengan NDA tertulis.
            </p>
            <nav aria-label="CTA actions" className="flex flex-wrap justify-center gap-3 mt-4">
              <Link href="/#contact" className="btn-primary cursor-pointer text-sm">
                Hubungi Tim Ahli Fovea
                <ArrowRight size={14} className="ml-1.5" />
              </Link>
              <a
                href="https://wa.me/628818204100"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-dark text-sm"
              >
                Chat via WhatsApp
              </a>
            </nav>
          </article>
        </div>
      </section>

    </main>
  );
}
