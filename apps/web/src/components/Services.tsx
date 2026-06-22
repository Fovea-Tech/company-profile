'use client';

import Link from 'next/link';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Check from 'lucide-react/dist/esm/icons/check';
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap';
import Users from 'lucide-react/dist/esm/icons/users';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';

/* ─── Stat bar inside the hero card ─────────────────────────────────────────── */
function HeroStatBar() {
  const stats = [
    { value: '61+', label: 'Institusi Dilayani' },
    { value: '99.9%', label: 'Uptime Terjamin' },
    { value: '< 4 mgg', label: 'Rata-rata Go-Live' },
    { value: 'NDA', label: 'Kerahasiaan Proyek' },
  ];

  return (
    <dl
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        borderTop: '1px solid rgba(255,255,255,0.15)',
        marginTop: '28px',
        paddingTop: '22px',
        gap: '1px',
      }}
      className="sm:grid-cols-4 grid-cols-2 m-0 p-0"
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          style={{
            textAlign: 'center',
            padding: '0 8px',
            borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
          }}
        >
          <dd style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1, margin: 0 }}>{s.value}</dd>
          <dt style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.65)', marginTop: '3px', fontWeight: 500 }}>{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────────── */
export default function Services() {

  const [heroCard, ...supportCards] = [
      {
        title: 'Education Digitalization',
        desc: 'Ekosistem digital mutakhir untuk sekolah swasta, SMK, pesantren, dan bimbingan belajar, mencakup website premium profesional hingga sistem operasional PPDB yang skalabel.',
        bullets: [
          'Website Sekolah Modern & Responsif',
          'Sistem PPDB Online Skalabel',
          'Portal Siswa, Nilai & Absensi',
          'Dashboard Admin Manajemen Sekolah',
          'Integrasi Pembayaran SPP Online',
          'Dukungan Teknis Purna Jual',
        ],
        cta: 'Konsultasi Gratis Solusi Sekolah',
        href: 'https://wa.me/628818204100?text=Halo%20Fovea%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20solusi%20digitalisasi%20pendidikan%20dan%20sistem%20sekolah.',
      },
      {
        title: 'Agency Development Partner',
        desc: 'Tim developer bayangan (white-label) yang andal untuk mengerjakan proyek coding agensi digital Anda dengan standar NDA ketat dan delivery tepat waktu.',
        bullets: [
          'Outsource Coding Rahasia (NDA)',
          'Landing Page & Website Konversi Tinggi',
          'Dashboard & Panel Admin Klien',
          'Dukungan SLA Bug Fixing Prioritas',
        ],
        cta: 'Jadwalkan Kerja Sama',
        href: 'https://wa.me/628818204100?text=Halo%20Fovea%2C%20saya%20ingin%20berdiskusi%20mengenai%20kerja%20sama%20white-label%20development%20untuk%20agensi%20saya.',
      },
      {
        title: 'Maintenance & Technical Support',
        desc: 'Layanan pemeliharaan rutin dan dukungan teknis untuk memastikan sistem digital Anda berjalan optimal, aman, dan bebas gangguan.',
        bullets: [
          'Monitoring & Pemeliharaan Rutin',
          'Update Keamanan & Performa',
          'Priority Bug Fixing & Hotfix',
          'Laporan Bulanan Kesehatan Sistem',
        ],
        cta: 'Lihat Paket Maintenance',
        href: '/services/maintenance',
      },
    ];

  const supportMeta = [
    {
      icon: Users,
      iconBg: { background: 'linear-gradient(135deg, #3B82F6 0%, #38BDF8 100%)' },
      badgeColor: '#3B82F6',
      badgeBg: '#EFF6FF',
      badgeBorder: '#BFDBFE',
      accentColor: '#3B82F6',
    },
    {
      icon: ShieldCheck,
      iconBg: { background: 'linear-gradient(135deg, #059669 0%, #34D399 100%)' },
      badgeColor: '#059669',
      badgeBg: '#D1FAE5',
      badgeBorder: '#A7F3D0',
      accentColor: '#059669',
    },
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="section-padding bg-bg border-t border-border"
    >
      <div className="page-shell">
        {/* Section Header */}
        <header className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-primary mb-4 border border-blue-100">
            LAYANAN UTAMA
          </span>
          <h2
            id="services-title"
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
            Layanan Rekayasa Perangkat Lunak Terfokus.
          </h2>
          <p className="max-w-2xl text-slate-600 text-base md:text-lg leading-relaxed mt-3" style={{ fontSize: '1.125rem' }}>
            Membantu Anda mempercepat peluncuran sistem operasional digital yang kokoh.
          </p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* ── Hero Service Card: Education Digitalization ─────────────────── */}
          <article
            aria-label={heroCard.title}
            style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #0F172A 45%, #3B82F6 100%)',
              borderRadius: '16px',
              padding: '32px 36px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative grid lines */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                pointerEvents: 'none',
              }}
            />
            {/* Glow orb */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-80px',
                right: '-80px',
                width: '320px',
                height: '320px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'grid',
                gap: '32px',
                alignItems: 'start',
              }}
              className="lg:grid-cols-[1fr_auto]"
            >
              {/* Left: text content */}
              <div>
                {/* Badge + icon row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    <GraduationCap size={22} aria-hidden="true" />
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.9)',
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.25)',
                      padding: '4px 12px',
                      borderRadius: '99px',
                    }}
                  >
                    ✦ Fokus Utama
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(22px, 3vw, 30px)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    margin: '0 0 12px',
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {heroCard.title}
                </h3>

                <p
                  style={{
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: 1.7,
                    maxWidth: '540px',
                    margin: 0,
                  }}
                >
                  {heroCard.desc}
                </p>

                {/* Bullets in 2-column grid */}
                <ul
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '8px 16px',
                    marginTop: '20px',
                    padding: 0,
                    listStyle: 'none',
                  }}
                >
                  {heroCard.bullets.map((item) => (
                    <li
                      key={item}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                      <span
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.2)',
                          border: '1px solid rgba(255,255,255,0.35)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF',
                          flexShrink: 0,
                        }}
                      >
                        <Check size={10} aria-hidden="true" />
                      </span>
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.88)', fontWeight: 500 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Stat bar */}
                <HeroStatBar />
              </div>

              {/* Right: CTA block */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  minWidth: '200px',
                }}
                className="lg:items-end"
              >
                <Link
                  href={heroCard.href}
                  target={heroCard.href.startsWith('http') ? '_blank' : undefined}
                  rel={heroCard.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: '#FFFFFF',
                    color: '#0F172A',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '12px 22px',
                    borderRadius: '99px',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                  }}
                >
                  {heroCard.cta}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>

          {/* ── Support Cards: Agency + Maintenance ─────────────────────────── */}
          <div style={{ display: 'grid', gap: '16px' }} className="lg:grid-cols-2">
            {supportCards.map((card, idx) => {
              const meta = supportMeta[idx];
              const Icon = meta.icon;

              return (
                <article
                  key={card.title}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)',
                    padding: '24px 26px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0',
                    transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                  }}
                  className="group hover:-translate-y-0.5 hover:shadow-md"
                >
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '14px' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '11px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        flexShrink: 0,
                        ...meta.iconBg,
                      }}
                    >
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: meta.badgeColor,
                          background: meta.badgeBg,
                          border: `1px solid ${meta.badgeBorder}`,
                          padding: '2px 8px',
                          borderRadius: '99px',
                          marginBottom: '5px',
                        }}
                      >
                        {idx === 0 ? 'Agency & White-label' : 'SLA & Maintenance'}
                      </span>
                      <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A', margin: 0, lineHeight: 1.2 }}>
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.65, margin: '0 0 16px' }}>
                    {card.desc}
                  </p>

                  {/* Bullets */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {card.bullets.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                        <Check size={14} style={{ color: meta.accentColor, flexShrink: 0 }} aria-hidden="true" />
                        <span style={{ fontSize: '13px', color: '#334155', fontWeight: 500 }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer CTA */}
                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '16px',
                      borderTop: '1px solid #F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                    }}
                  >
                    <Link
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: meta.accentColor,
                        textDecoration: 'none',
                      }}
                    >
                      {card.cta}
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                    <span
                      style={{
                        fontSize: '11px',
                        color: '#94A3B8',
                        fontWeight: 500,
                      }}
                    >
                      Konsultasi gratis
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}