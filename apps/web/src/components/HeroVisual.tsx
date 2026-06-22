'use client';

import React from 'react';

/**
 * HeroVisual — A fully code-rendered dashboard mockup for the Fovea hero section.
 * No external images, no licensing concerns, 100% brand-accurate.
 */
export default function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full select-none"
      style={{ maxWidth: '560px', margin: '0 auto' }}
    >
      {/* Ambient glow behind the card */}
      <div
        style={{
          position: 'absolute',
          inset: '-32px',
          background:
            'radial-gradient(ellipse 70% 60% at 55% 50%, #0F172A 0%, transparent 70%)',
          opacity: 0.12,
          filter: 'blur(32px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Browser frame */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background: '#FFFFFF',
          borderRadius: '14px',
          border: '1px solid #DADADA',
          boxShadow:
            '0 4px 6px -1px rgba(0,0,0,0.04), 0 20px 48px -8px rgba(68,56,149,0.14)',
          overflow: 'hidden',
        }}
      >
        {/* Browser chrome / top bar */}
        <div
          style={{
            background: '#F8FAFC',
            borderBottom: '1px solid #E2E8F0',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {/* Traffic lights */}
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FC6058' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEC02F' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#2ACA44' }} />
          </div>
          {/* URL bar */}
          <div
            style={{
              flex: 1,
              background: '#EFF6FF',
              borderRadius: '6px',
              padding: '4px 10px',
              fontSize: '10.5px',
              color: '#0F172A',
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '0.01em',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" fill="#2ACA44" />
            </svg>
            fovea.digital
          </div>
        </div>

        {/* Dashboard content */}
        <div style={{ padding: '18px', background: '#F3F7FA', display: 'flex', flexDirection: 'column', gap: '14px' }}>

          {/* Top metric cards row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
            {[
              { label: 'Proyek Aktif', value: '24', trend: '+8%', positive: true },
              { label: 'Klien Sekolah', value: '61', trend: '+15%', positive: true },
              { label: 'Uptime', value: '99.9%', trend: 'Stabil', positive: true },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  padding: '11px 12px',
                }}
              >
                <div style={{ fontSize: '9px', color: '#64748B', fontWeight: 600, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {m.label}
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', lineHeight: 1.1 }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '9px', color: m.positive ? '#16A34A' : '#DC2626', marginTop: '2px', fontWeight: 500 }}>
                  ↑ {m.trend}
                </div>
              </div>
            ))}
          </div>

          {/* Main panel: chart + sidebar */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '10px', alignItems: 'stretch' }}>
            {/* Bar chart */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '10px',
                border: '1px solid #E2E8F0',
                padding: '12px 14px',
              }}
            >
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#1E293B', marginBottom: '10px' }}>
                Pertumbuhan Klien
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '5px',
                  height: '64px',
                }}
              >
                {[38, 55, 45, 70, 60, 85, 78].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      borderRadius: '4px 4px 0 0',
                      background:
                        i === 5
                          ? 'linear-gradient(to top, #0F172A, #3B82F6)'
                          : i === 6
                          ? 'linear-gradient(to top, #3B82F6, #60A5FA)'
                          : '#E2E8F0',
                      transition: 'height 0.3s ease',
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '5px',
                }}
              >
                {['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'].map((m) => (
                  <span key={m} style={{ fontSize: '8px', color: '#94A3B8', flex: 1, textAlign: 'center' }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent projects list */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '10px',
                border: '1px solid #E2E8F0',
                padding: '12px 14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
              }}
            >
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                Proyek Terbaru
              </div>
              {[
                { name: 'SMK IT', type: 'Website Sekolah', color: '#0F172A' },
                { name: 'Kreativa Agency', type: 'Sistem CRM', color: '#3B82F6' },
                { name: 'SD AL', type: 'Portal Siswa', color: '#7C3AED' },
              ].map((p) => (
                <div
                  key={p.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 0',
                    borderBottom: '1px solid #F1F5F9',
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      background: p.color,
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div style={{ width: '10px', height: '8px', borderRadius: '2px', background: 'rgba(255,255,255,0.5)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#1E293B', lineHeight: 1.2 }}>{p.name}</div>
                    <div style={{ fontSize: '8px', color: '#94A3B8' }}>{p.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row: donut + tags */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '10px', alignItems: 'stretch' }}>
            {/* Donut chart */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '10px',
                border: '1px solid #E2E8F0',
                padding: '12px 14px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
                <circle cx="32" cy="32" r="24" fill="none" stroke="#EFF6FF" strokeWidth="10" />
                <circle
                  cx="32" cy="32" r="24"
                  fill="none"
                  stroke="#0F172A"
                  strokeWidth="10"
                  strokeDasharray="90 60"
                  strokeLinecap="round"
                  strokeDashoffset="0"
                  transform="rotate(-90 32 32)"
                />
                <circle
                  cx="32" cy="32" r="24"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="10"
                  strokeDasharray="45 105"
                  strokeLinecap="round"
                  strokeDashoffset="-90"
                  transform="rotate(-90 32 32)"
                />
                <text x="32" y="35" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0F172A">60%</text>
              </svg>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {[
                  { label: 'Agency', color: '#0F172A' },
                  { label: 'Sekolah', color: '#3B82F6' },
                ].map((l) => (
                  <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '2px', background: l.color }} />
                    <span style={{ fontSize: '8px', color: '#64748B' }}>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service tags / activity feed */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '10px',
                border: '1px solid #E2E8F0',
                padding: '12px 14px',
              }}
            >
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#1E293B', marginBottom: '8px' }}>
                Layanan Aktif
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {[
                  { label: 'Website Sekolah', bg: '#EFF6FF', color: '#0F172A' },
                  { label: 'Sistem CRM', bg: '#EFF6FF', color: '#3B82F6' },
                  { label: 'Portal Siswa', bg: '#F3E8FF', color: '#7C3AED' },
                  { label: 'Maintenance', bg: '#DCFCE7', color: '#16A34A' },
                  { label: 'Digital Agency', bg: '#FEF3C7', color: '#D97706' },
                  { label: 'SEO & Iklan', bg: '#FFE4E6', color: '#E11D48' },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    style={{
                      fontSize: '8.5px',
                      fontWeight: 600,
                      padding: '3px 8px',
                      borderRadius: '99px',
                      background: tag.bg,
                      color: tag.color,
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              {/* Divider + notification pill */}
              <div
                style={{
                  marginTop: '10px',
                  paddingTop: '8px',
                  borderTop: '1px solid #F1F5F9',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#16A34A',
                    flexShrink: 0,
                    boxShadow: '0 0 0 3px rgba(22, 163, 74, 0.2)',
                  }}
                />
                <span style={{ fontSize: '8.5px', color: '#64748B' }}>
                  Proyek baru dari <strong style={{ color: '#0F172A' }}>Kreativa Agency</strong> masuk hari ini
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating badge — social proof */}
      <div
        style={{
          position: 'absolute',
          bottom: '-18px',
          right: '-12px',
          background: '#0F172A',
          color: '#FFFFFF',
          borderRadius: '12px',
          padding: '10px 14px',
          boxShadow: '0 8px 24px rgba(68, 56, 149, 0.35)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, lineHeight: 1.1 }}>60+ Klien</div>
          <div style={{ fontSize: '9px', opacity: 0.75, marginTop: '1px' }}>Dipercaya sekolah & agency</div>
        </div>
      </div>

      {/* Floating badge — top left */}
      <div
        style={{
          position: 'absolute',
          top: '60px',
          left: '-20px',
          background: '#FFFFFF',
          borderRadius: '10px',
          border: '1px solid #E2E8F0',
          padding: '8px 12px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '7px',
            background: 'linear-gradient(135deg, #3B82F6, #0F172A)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: '10px', fontWeight: 700, color: '#1E293B', lineHeight: 1.1 }}>Launch Cepat</div>
          <div style={{ fontSize: '8px', color: '#94A3B8' }}>2–4 minggu live</div>
        </div>
      </div>
    </div>
  );
}
