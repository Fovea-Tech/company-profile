'use client';

/* ─── Step meta: colors & checklist details ─────────────────────────────────── */
const STEP_META = [
  {
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.15)',
    border: 'rgba(59,130,246,0.45)',
    textColor: '#93C5FD',
    tag: 'Hari 1–3',
    detail: ['Briefing kebutuhan', 'Penandatanganan NDA', 'Estimasi waktu & biaya'],
    isTop: true,
  },
  {
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.15)',
    border: 'rgba(99,102,241,0.45)',
    textColor: '#A5B4FC',
    tag: 'Hari 3–7',
    detail: ['Wireframe halaman', 'Design system & warna', 'Review bersama klien'],
    isTop: false,
  },
  {
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.15)',
    border: 'rgba(139,92,246,0.45)',
    textColor: '#C4B5FD',
    tag: 'Minggu 2–4',
    detail: ['Frontend & backend dev', 'Unit & integration test', 'Staging deployment'],
    isTop: true,
  },
  {
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.15)',
    border: 'rgba(20,184,166,0.45)',
    textColor: '#5EEAD4',
    tag: 'Hari terakhir',
    detail: ['Go-live ke production', 'Pelatihan tim klien', 'Handover source code'],
    isTop: false,
  },
];

export default function Process() {

  const cards = [
      { title: 'Konsultasi & NDA', description: 'Memahami kebutuhan spesifik sekolah atau menyepakati kerja sama NDA tertulis dengan agensi.' },
      { title: 'Prototipe UI/UX', description: 'Perancangan struktur halaman dan tata letak dashboard admin yang intuitif.' },
      { title: 'Coding & Testing', description: 'Pengembangan menggunakan teknologi modern berkecepatan tinggi dengan jaminan performa.' },
      { title: 'Serah Terima', description: 'Peluncuran sistem, pelatihan staf sekolah, atau penyerahan kode proyek agensi.' },
    ]

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="section-padding"
      style={{ background: '#0F172A' }}
    >
      <div className="page-shell">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <header style={{ maxWidth: '720px', marginBottom: '80px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: '#3B82F6',
              background: 'rgba(59,130,246,0.12)',
              border: '1px solid rgba(59,130,246,0.3)',
              padding: '4px 12px',
              borderRadius: '9999px',
              marginBottom: '20px',
            }}
          >
            PROSES KERJA KAMI
          </span>
          <h2
            id="process-title"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: '0 0 16px',
              textWrap: 'balance',
            }}
          >
            Transparan, Terukur, & Tepat Waktu.
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#94A3B8', lineHeight: 1.7, margin: 0, maxWidth: '60ch' }}>
            Kami memastikan setiap fase pengembangan terpantau jelas oleh agensi mitra maupun pihak manajemen sekolah.
          </p>
        </header>

        {/* ── Timeline Container ─────────────────────────────────────────── */}
        <div className="relative w-full">

          {/* SVG wavy connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-0 left-0 w-full pointer-events-none"
            style={{ height: '480px' }}
            aria-hidden="true"
          >
            <svg width="100%" height="100%" viewBox="0 0 1200 480" preserveAspectRatio="none">
              <defs>
                <linearGradient id="proc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   style={{ stopColor: '#3B82F6', stopOpacity: 0.55 }} />
                  <stop offset="35%"  style={{ stopColor: '#6366F1', stopOpacity: 0.7 }} />
                  <stop offset="65%"  style={{ stopColor: '#8B5CF6', stopOpacity: 0.7 }} />
                  <stop offset="100%" style={{ stopColor: '#14B8A6', stopOpacity: 0.55 }} />
                </linearGradient>
              </defs>
              {/* 4-column S-curve: top→bottom→top→bottom */}
              <path
                d="M 150 100 C 300 100, 300 360, 450 360 C 600 360, 600 100, 750 100 C 900 100, 900 360, 1050 360"
                stroke="url(#proc-gradient)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          {/* Vertical line — mobile only */}
          <div
            className="lg:hidden absolute top-8 bottom-8 pointer-events-none"
            style={{
              left: '28px',
              width: '1px',
              background: 'linear-gradient(to bottom, rgba(59,130,246,0.2), rgba(139,92,246,0.7), rgba(20,184,166,0.2))',
            }}
            aria-hidden="true"
          />

          {/* ── Steps grid ───────────────────────────────────────────────── */}
          <ol className="relative flex flex-col lg:grid lg:grid-cols-4 gap-y-16 lg:gap-y-0 lg:gap-x-10 lg:pb-72 m-0 p-0 list-none">
            {cards.map((card, i) => {
              const meta = STEP_META[i];

              return (
                <li
                  key={card.title}
                  className={`relative px-10 lg:px-0 ${
                    meta.isTop ? 'lg:top-8' : 'lg:top-56'
                  }`}
                  style={{ gridColumnStart: i + 1 }}
                >
                  {/* Numbered circle — left on mobile, top-left on desktop */}
                  <div
                    className="lg:absolute"
                    style={{
                      /* desktop: position relative to card container */
                      top: '-20px',
                      left: '-28px',
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: meta.bg,
                      border: `1.5px solid ${meta.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '18px',
                      color: meta.textColor,
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      zIndex: 50,
                      boxShadow: `0 0 20px ${meta.color}30`,
                      /* mobile: inline above card */
                      marginBottom: '8px',
                    }}
                  >
                    {i + 1}
                  </div>

                  {/* Glass card */}
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      borderRadius: '16px',
                      padding: '20px',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                    }}
                  >
                    {/* Time tag */}
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        color: meta.textColor,
                        background: meta.bg,
                        padding: '2px 8px',
                        borderRadius: '99px',
                        marginBottom: '10px',
                      }}
                    >
                      {meta.tag}
                    </span>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        color: meta.textColor,
                        margin: '0 0 6px',
                        lineHeight: 1.3,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '13.5px',
                        color: '#CBD5E1',
                        lineHeight: 1.7,
                        margin: '0 0 14px',
                      }}
                    >
                      {card.description}
                    </p>

                    {/* Detail checklist */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {meta.detail.map((d) => (
                        <li
                          key={d}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '7px',
                            fontSize: '12.5px',
                            color: '#94A3B8',
                          }}
                        >
                          <span
                            style={{
                              width: '4px',
                              height: '4px',
                              borderRadius: '50%',
                              background: meta.color,
                              flexShrink: 0,
                            }}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

      </div>
    </section>
  );
}