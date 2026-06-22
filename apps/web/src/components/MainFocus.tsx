'use client';

import Link from 'next/link';

/* ─── Inline SVG Icons ───────────────────────────────────────────────────────── */
const IconSchool = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3L1 9l11 6 9-4.91V17M1 9v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconAgency = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCode = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Education Card (dark, featured) ───────────────────────────────────────── */
function EducationCard({ desc }: { desc: string }) {
  const rows = [
    { label: 'Website Sekolah', stack: 'Next.js + Supabase', live: true },
    { label: 'Portal PPDB', stack: 'Go + Realtime', live: true },
    { label: 'Dashboard Guru', stack: 'TypeScript + REST', live: false },
  ];

  const features = [
    'Website sekolah profesional & cepat',
    'Sistem PPDB online anti-macet',
    'Portal siswa, guru & administrasi',
    'Maintenance & SLA bulanan',
  ];

  return (
    <article
      style={{
        background: '#0F172A',
        borderRadius: '16px',
        border: '1px solid #1E293B',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '480px',
        padding: '28px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <header style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'rgba(59,130,246,0.15)',
              border: '1px solid rgba(59,130,246,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#93C5FD',
            }}
          >
            <IconSchool />
          </div>
          <span
            style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: '#14B8A6',
              background: 'rgba(20,184,166,0.12)',
              border: '1px solid rgba(20,184,166,0.25)',
              padding: '3px 10px',
              borderRadius: '99px',
            }}
          >
            ★ Pilar Utama
          </span>
        </div>
        <h3
          style={{
            fontSize: 'clamp(1.25rem, 2vw, 1.55rem)',
            fontWeight: 800,
            color: '#F1F5F9',
            margin: '0 0 8px',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}
        >
          Digitalisasi Sekolah &amp; Pesantren
        </h3>
        <p style={{ fontSize: '13.5px', color: '#94A3B8', lineHeight: 1.7, margin: 0 }}>
          {desc}
        </p>
      </header>

      {/* Feature list */}
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {features.map((f) => (
          <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px', color: '#CBD5E1' }}>
            <span
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: 'rgba(20,184,166,0.15)',
                border: '1px solid rgba(20,184,166,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* Mini system table */}
      <div
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '10px',
          overflow: 'hidden',
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr auto',
            padding: '7px 12px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {['Modul', 'Stack', 'Status'].map((h) => (
            <span key={h} style={{ fontSize: '9px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</span>
          ))}
        </div>
        {rows.map((r) => (
          <div
            key={r.label}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr auto',
              padding: '8px 12px',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#E2E8F0' }}>{r.label}</span>
            <span style={{ fontSize: '10px', color: '#64748B', fontFamily: 'monospace' }}>{r.stack}</span>
            <span
              style={{
                fontSize: '9px',
                fontWeight: 700,
                padding: '2px 7px',
                borderRadius: '99px',
                background: r.live ? 'rgba(34,197,94,0.15)' : 'rgba(234,179,8,0.15)',
                color: r.live ? '#4ADE80' : '#FCD34D',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: r.live ? '#22C55E' : '#EAB308', display: 'inline-block', flexShrink: 0 }} />
              {r.live ? 'Live' : 'Staging'}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="/solusi-pendidikan"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '13px',
          fontWeight: 700,
          color: '#14B8A6',
          textDecoration: 'none',
        }}
      >
        Lihat Solusi Pendidikan
        <IconArrow />
      </Link>
    </article>
  );
}

/* ─── Agency Card (light) ────────────────────────────────────────────────────── */
function AgencyCard({ desc }: { desc: string }) {
  const metrics = [
    { label: 'On-time Delivery', value: '100%', color: '#22C55E', bg: '#F0FDF4', border: '#BBF7D0' },
    { label: 'Waktu Respons SLA', value: '< 2 jam', color: '#3B82F6', bg: '#EFF6FF', border: '#BFDBFE' },
    { label: 'NDA White-label', value: 'Aktif', color: '#8B5CF6', bg: '#F5F3FF', border: '#DDD6FE' },
  ];

  return (
    <article
      style={{
        background: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 2px 12px rgba(15,23,42,0.05)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <header style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            flexShrink: 0,
          }}
        >
          <IconAgency />
        </div>
        <div>
          <span
            style={{
              display: 'inline-block',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: '#3B82F6',
              background: '#EFF6FF',
              border: '1px solid #BFDBFE',
              padding: '2px 8px',
              borderRadius: '99px',
              marginBottom: '4px',
            }}
          >
            Agency Partner
          </span>
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A', margin: 0, lineHeight: 1.25, letterSpacing: '-0.015em' }}>
            Technical Partner Agensi
          </h3>
        </div>
      </header>

      <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.65, margin: '0 0 16px' }}>{desc}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginTop: 'auto' }}>
        {metrics.map((m) => (
          <div
            key={m.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '9px 12px',
              borderRadius: '10px',
              background: m.bg,
              border: `1px solid ${m.border}`,
            }}
          >
            <span style={{ fontSize: '12px', fontWeight: 500, color: '#475569' }}>{m.label}</span>
            <span style={{ fontSize: '13px', fontWeight: 800, color: m.color }}>{m.value}</span>
          </div>
        ))}
      </div>

      <Link
        href="/agency-partnership"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '12.5px',
          fontWeight: 700,
          color: '#3B82F6',
          textDecoration: 'none',
          marginTop: '16px',
        }}
      >
        Lihat Kemitraan Agensi
        <IconArrow />
      </Link>
    </article>
  );
}

/* ─── Custom Software Card (tinted) ─────────────────────────────────────────── */
function CustomCard({ desc }: { desc: string }) {
  const tech = ['Next.js', 'TypeScript', 'Supabase', 'Go', 'Cloudflare', 'Docker'];

  return (
    <article
      style={{
        background: '#F8FAFC',
        borderRadius: '16px',
        border: '1px solid #E2E8F0',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <header style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #334155, #1E293B)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94A3B8',
            flexShrink: 0,
          }}
        >
          <IconCode />
        </div>
        <div>
          <span
            style={{
              display: 'inline-block',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: '#64748B',
              background: '#F1F5F9',
              border: '1px solid #E2E8F0',
              padding: '2px 8px',
              borderRadius: '99px',
              marginBottom: '4px',
            }}
          >
            Bisnis Lainnya
          </span>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', margin: 0, lineHeight: 1.25, letterSpacing: '-0.01em' }}>
            Software &amp; Website Bisnis Kustom
          </h3>
        </div>
      </header>

      <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.65, margin: '0 0 16px' }}>{desc}</p>

      <div style={{ marginTop: 'auto' }}>
        <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
          Tech Stack
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: '11.5px',
                fontWeight: 600,
                color: '#334155',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                padding: '4px 10px',
                borderRadius: '8px',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ─── Main Section ───────────────────────────────────────────────────────────── */
export default function WhoAreWe() {

  return (
    <section
      id="who-are-we"
      aria-labelledby="who-are-we-title"
      className="section-padding"
      style={{ background: '#FFFFFF' }}
    >
      <div className="page-shell">

        {/* Section Header */}
        <header style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '720px', marginBottom: '64px' }}>
          <span
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-primary border border-blue-100"
            style={{ width: 'fit-content' }}
          >
            FOKUS UTAMA KAMI
          </span>
          <h2
            id="who-are-we-title"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#0F172A',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: 0,
              textWrap: 'balance',
            }}
          >
            Teknologi Handal untuk Sekolah Swasta & Agensi Kreatif.
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.7, margin: 0, maxWidth: '60ch' }}>
            Kami mendefinisikan kontribusi kami pada dua pilar utama: menyederhanakan operasional sekolah swasta dan melipatgandakan produktivitas agensi mitra.
          </p>
        </header>

        {/* Split Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '16px',
          }}
          className="lg:grid-cols-[5fr_4fr]"
        >
          {/* Left: Education — dark featured card (full height, spans 2 rows) */}
          <div style={{ gridRow: '1 / span 2' }}>
            <EducationCard desc='Website sekolah modern, sistem PPDB online anti-macet, serta portal siswa/guru yang terintegrasi secara andal.' />
          </div>

          {/* Right top: Agency */}
          <AgencyCard desc='Menjadi tim developer bayangan (white-label) tepercaya agensi untuk coding website, dashboard, atau perbaikan bug.' />

          {/* Right bottom: Custom */}
          <CustomCard desc='Kami juga melayani pengembangan website dan software khusus untuk bisnis lainnya sesuai kebutuhan skala operasional.' />
        </div>

      </div>
    </section>
  );
}