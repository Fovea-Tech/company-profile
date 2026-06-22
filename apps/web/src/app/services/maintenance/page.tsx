import Shield from 'lucide-react/dist/esm/icons/shield';
import RefreshCw from 'lucide-react/dist/esm/icons/refresh-cw';
import Zap from 'lucide-react/dist/esm/icons/zap';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import Bug from 'lucide-react/dist/esm/icons/bug';
import Server from 'lucide-react/dist/esm/icons/server';
import Check from 'lucide-react/dist/esm/icons/check';
import X from 'lucide-react/dist/esm/icons/x';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import Terminal from 'lucide-react/dist/esm/icons/terminal';
import Activity from 'lucide-react/dist/esm/icons/activity';
import Link from 'next/link';

export const metadata = {
  title: 'Paket Maintenance Website | Fovea Teknologi',
  description: 'Pilih paket maintenance website yang tepat untuk bisnis Anda. Monitoring 24/7, security patching, backup otomatis, bug fixing, dan laporan bulanan. Retainer mulai dari Rp 500rb/bulan.',
  alternates: {
    canonical: 'https://www.fovea.digital/services/maintenance',
  },
  openGraph: {
    title: 'Paket Maintenance Website | Fovea Teknologi',
    description: 'Pilih layanan maintenance website dari Fovea dengan fitur monitoring 24/7, pembaruan keamanan, backup data otomatis, dan laporan transparan setiap bulan.',
    url: 'https://www.fovea.digital/services/maintenance',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Paket Maintenance Fovea Teknologi' }],
  },
};

function ServerMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto select-none" aria-hidden="true">
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          inset: '-40px',
          background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)',
          filter: 'blur(32px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      {/* Terminal Window */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background: '#0F172A',
          border: '1px solid #1E293B',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)',
        }}
      >
        {/* Title bar */}
        <div style={{ background: '#1E293B', borderBottom: '1px solid #334155', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EAB308' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10B981' }} />
          </div>
          <div style={{ marginLeft: '12px', fontSize: '13px', color: '#94A3B8', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Terminal size={14} /> server-monitor.sh
          </div>
        </div>
        {/* Body */}
        <div style={{ padding: '24px', fontFamily: 'monospace', fontSize: '14px', lineHeight: 1.8, color: '#A3E635' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>[SYSTEM] Uptime:</span>
            <span>99.99%</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>[SECURITY] Firewall:</span>
            <span style={{ color: '#38BDF8' }}>ACTIVE</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>[BACKUP] Last Sync:</span>
            <span>2 mins ago</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span>[TRAFFIC] Current Load:</span>
            <span>Optimal</span>
          </div>
          
          <div style={{ marginTop: '16px', borderTop: '1px dashed #334155', paddingTop: '16px', color: '#F1F5F9' }}>
            <div style={{ marginBottom: '12px', color: '#94A3B8' }}>$ running health-check...</div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
              <span>All systems operational.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MaintenancePage() {
  const PLANS = [
    {
      id: 'starter',
      name: 'Starter',
      tagline: 'Cocok untuk website company profile & landing page',
      price: 'Rp 500.000',
      period: '/ bulan',
      minContract: 'Minimal 6 bulan',
      highlighted: false,
      cta: 'Konsultasi Gratis',
      ctaHref: '/#contact',
      features: [
        { label: 'Monitoring uptime 24/7', included: true },
        { label: 'Security patching', included: true },
        { label: 'Backup mingguan (cloud)', included: true },
        { label: 'Bug fixing (maks. 4 jam/bulan)', included: true },
        { label: 'Laporan bulanan dasar', included: true },
        { label: 'Performance optimization', included: false },
        { label: 'Database optimization', included: false },
        { label: 'Priority response < 4 jam', included: false },
      ],
    },
    {
      id: 'professional',
      name: 'Professional',
      tagline: 'Untuk aplikasi web aktif dengan traffic harian',
      price: 'Rp 1.500.000',
      period: '/ bulan',
      minContract: 'Minimal 6 bulan',
      highlighted: true,
      badge: 'Paling Populer',
      cta: 'Pilih Paket Ini',
      ctaHref: '/#contact',
      features: [
        { label: 'Monitoring uptime 24/7', included: true },
        { label: 'Security patching', included: true },
        { label: 'Backup harian (cloud)', included: true },
        { label: 'Bug fixing (maks. 10 jam/bulan)', included: true },
        { label: 'Laporan bulanan lengkap', included: true },
        { label: 'Performance optimization', included: true },
        { label: 'Database optimization', included: true },
        { label: 'Priority response < 4 jam', included: false },
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      tagline: 'Untuk sistem kritikal & SaaS dengan SLA ketat',
      price: 'Custom',
      period: '',
      minContract: 'Kontrak tahunan',
      highlighted: false,
      cta: 'Hubungi Tim Kami',
      ctaHref: 'https://wa.me/628818204100',
      features: [
        { label: 'Monitoring uptime + alert real-time', included: true },
        { label: 'Security patching', included: true },
        { label: 'Backup harian (multi-region)', included: true },
        { label: 'Bug fixing (unlimited jam/bulan)', included: true },
        { label: 'Laporan + dashboard analytics', included: true },
        { label: 'Performance optimization', included: true },
        { label: 'Database optimization', included: true },
        { label: 'Priority response < 1 jam', included: true },
      ],
    },
  ];

  const FEATURES = [
    {
      icon: <Server size={24} />,
      title: 'Monitoring 24/7',
      desc: 'Server, uptime, dan performa dipantau secara proaktif. Anda akan tahu lebih dulu sebelum pengguna merasakannya.',
      color: '#3B82F6', // Blue
    },
    {
      icon: <Shield size={24} />,
      title: 'Security Patching',
      desc: 'Pembaruan framework, library, dan database secara rutin untuk menutup celah keamanan sebelum dieksploitasi.',
      color: '#10B981', // Emerald
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Backup Otomatis',
      desc: 'Backup data dan sistem dijadwalkan ke penyimpanan cloud eksternal. Tidak ada data yang hilang permanen.',
      color: '#F59E0B', // Amber
    },
    {
      icon: <Bug size={24} />,
      title: 'Bug Fixing',
      desc: 'Penanganan cepat terhadap error yang dilaporkan. Kami bagaikan dokter yang datang sebelum Anda menelepon.',
      color: '#EF4444', // Red
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Optimization',
      desc: 'Pembersihan database, optimasi query, dan pembaruan kode usang agar sistem tetap cepat seiring waktu.',
      color: '#8B5CF6', // Violet
    },
    {
      icon: <FileText size={24} />,
      title: 'Laporan Bulanan',
      desc: 'Laporan transparan kondisi server, log error, uptime, dan tindakan perbaikan yang telah dilakukan.',
      color: '#06B6D4', // Cyan
    },
  ];

  const FAQS = [
    {
      q: 'Apakah layanan ini hanya untuk aplikasi yang dibangun Fovea?',
      a: 'Tidak. Kami juga menerima maintenance untuk sistem yang dibangun pihak lain, selama stack teknologinya sesuai keahlian kami (React, Next.js, Node.js, Laravel, dsb). Kami mulai dengan system audit terlebih dahulu.',
    },
    {
      q: 'Apakah ada kontrak yang harus ditandatangani?',
      a: 'Ya, kami meminta komitmen minimal 6 bulan untuk paket Starter & Professional, dan kontrak tahunan untuk Enterprise. Ini memastikan tim kami bisa memberikan layanan yang konsisten dan mengenal sistem Anda dengan mendalam.',
    },
    {
      q: 'Apakah penambahan fitur baru termasuk dalam maintenance?',
      a: 'Maintenance berfokus pada pemeliharaan dan perbaikan. Minor update kecil mungkin tercakup dalam alokasi jam, namun penambahan fitur mayor akan dihitung sebagai proyek terpisah dengan estimasi biaya tersendiri.',
    },
    {
      q: 'Bagaimana cara melaporkan bug atau masalah?',
      a: 'Tergantung paket: Starter & Professional via email/WhatsApp. Enterprise mendapat dedicated channel (WhatsApp Group / Slack) dengan response time terjamin di bawah 1 jam di jam kerja.',
    },
    {
      q: 'Apakah bisa upgrade atau downgrade paket?',
      a: 'Bisa upgrade kapan saja dengan penyesuaian biaya pro-rata. Downgrade bisa dilakukan di awal periode kontrak baru.',
    },
  ];

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
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  color: '#059669',
                }}
              >
                <Activity size={14} />
                Layanan Maintenance
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
                Website Anda Layak Dijaga 24/7.
              </h1>
              
              <p
                className="text-slate-600 leading-relaxed mb-8"
                style={{ fontSize: '1.0625rem', maxWidth: '50ch' }}
              >
                Jangan tunggu website mogok. Fovea hadir sebagai partner IT andalan Anda yang bertugas memantau, mengamankan, dan memperbaiki sistem website secara proaktif sebelum masalah menyentuh pengguna.
              </p>

              <nav aria-label="Hero actions" className="flex flex-wrap gap-3 mt-2">
                <Link href="#pricing" className="btn-primary cursor-pointer text-sm">
                  Lihat Paket Harga
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
              <ServerMockup />
            </div>
          </div>
        </div>
      </header>

      {/* ── Features (Bento Grid) ── */}
      <section className="section-padding" style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border)' }}>
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
              Semua yang Anda Dapatkan
            </h2>
            <p className="text-slate-600 text-lg">Setiap paket mencakup perlindungan dasar. Pilih tingkat yang sesuai skala dan risiko bisnis Anda.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => {
              const isWide = i === 0 || i === 3;
              return (
                <article
                  key={i}
                  className="card-clean p-8 flex flex-col justify-between group"
                  style={{
                    gridColumn: isWide ? 'span 2' : 'span 1',
                    background: 'var(--bg)',
                  }}
                >
                  <div>
                    <div
                      style={{
                        height: 48,
                        borderRadius: '12px',
                        background: `${f.color}15`,
                        color: f.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        border: `1px solid ${f.color}30`,
                        width: 48,
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

      {/* ── Pricing ── */}
      <section id="pricing" className="section-padding" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
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
              Pilih Paket Anda
            </h2>
            <p className="text-slate-600 text-lg">Transparansi harga tanpa biaya tersembunyi. Kontrak minimal 6 bulan.</p>
          </header>

          <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {PLANS.map((plan) => (
              <article
                key={plan.id}
                className="flex flex-col relative"
                style={{
                  background: plan.highlighted ? '#1E293B' : '#FFFFFF',
                  borderRadius: '24px',
                  border: plan.highlighted ? '1px solid #334155' : '1px solid var(--border)',
                  boxShadow: plan.highlighted ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 'var(--shadow-sm)',
                  padding: '40px 32px',
                  color: plan.highlighted ? '#FFFFFF' : '#0F172A',
                  zIndex: plan.highlighted ? 10 : 1,
                  transform: plan.highlighted ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                {plan.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--secondary)',
                      color: '#FFFFFF',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      padding: '4px 16px',
                      borderRadius: '99px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                    }}
                  >
                    {plan.badge}
                  </div>
                )}
                
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>{plan.name}</h3>
                  <p style={{ fontSize: '0.95rem', color: plan.highlighted ? '#94A3B8' : '#64748B', lineHeight: 1.5, minHeight: '44px' }}>
                    {plan.tagline}
                  </p>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.04em' }}>
                      {plan.price}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: plan.highlighted ? '#94A3B8' : '#64748B', marginTop: '4px' }}>
                    {plan.period} <span style={{ opacity: 0.5 }}>•</span> {plan.minContract}
                  </div>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px', flex: 1 }}>
                  {plan.features.map((f, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      {f.included ? (
                        <Check size={18} color={plan.highlighted ? '#10B981' : 'var(--secondary)'} style={{ flexShrink: 0, marginTop: '2px' }} />
                      ) : (
                        <X size={18} color={plan.highlighted ? '#475569' : '#CBD5E1'} style={{ flexShrink: 0, marginTop: '2px' }} />
                      )}
                      <span style={{ fontSize: '0.95rem', color: plan.highlighted ? (f.included ? '#F8FAFC' : '#475569') : (f.included ? '#334155' : '#94A3B8') }}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  className={plan.highlighted ? 'btn-primary text-center justify-center' : 'btn-secondary text-center justify-center'}
                  style={plan.highlighted ? { width: '100%' } : { width: '100%', background: '#F8FAFC' }}
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
          <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto px-4">
              Semua harga belum termasuk PPN 11%. Harga dapat berubah untuk sistem dengan kompleksitas tinggi setelah system audit awal.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="page-shell max-w-3xl">
          <header className="text-center mb-12">
            <h2
              className="text-slate-900"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.03em' }}
            >
              Pertanyaan Umum
            </h2>
          </header>
          <div className="grid gap-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-border bg-var(--bg) p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all duration-200">
                <summary className="flex items-center justify-between text-base md:text-lg font-bold text-slate-900 outline-none select-none">
                  {faq.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-transform group-open:rotate-180 group-open:bg-emerald-50 group-open:text-emerald-600">↓</span>
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
            background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
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
              Masih ragu pilih paket yang mana?
            </h2>
            <p
              className="leading-relaxed mb-8"
              style={{ fontSize: '1.0625rem', color: 'var(--muted-dark)', maxWidth: '46ch' }}
            >
              Ceritakan sistem Anda kepada kami. Kami siap merekomendasikan paket layanan maintenance website terbaik untuk Anda, sepenuhnya gratis tanpa komitmen.
            </p>
            <nav aria-label="CTA actions" className="flex flex-wrap justify-center gap-3 mt-3">
              <Link href="/#contact" className="btn-primary cursor-pointer text-sm">
                Konsultasi Gratis
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
