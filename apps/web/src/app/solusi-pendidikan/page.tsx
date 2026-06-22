import Link from 'next/link';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Check from 'lucide-react/dist/esm/icons/check';
import Settings from 'lucide-react/dist/esm/icons/settings';
import Monitor from 'lucide-react/dist/esm/icons/monitor';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import AlertTriangle from 'lucide-react/dist/esm/icons/triangle-alert';
import Zap from 'lucide-react/dist/esm/icons/zap';
import Shield from 'lucide-react/dist/esm/icons/shield';
import BarChart3 from 'lucide-react/dist/esm/icons/chart-column';
import React from 'react';

export const metadata = {
  title: 'Solusi Pendidikan Swasta | Fovea Technology',
  description:
    'Bangun website profesional dan sistem digital operasional sekolah swasta, SMK, pesantren, dan bimbingan belajar dengan performa tinggi.',
};

/* ─────────────────────── Dashboard Visual ─────────────────────── */
function DashboardVisual() {
  const rows = [
    { name: 'Andi Saputra', type: 'SMA', status: 'Diterima', bg: '#ECFDF5', color: '#059669', border: '#A7F3D0' },
    { name: 'Siti Rahma', type: 'SMK', status: 'Verifikasi', bg: '#EFF6FF', color: '#2563EB', border: '#BFDBFE' },
    { name: 'Budi Hartono', type: 'SMP', status: 'Review', bg: '#FFFBEB', color: '#D97706', border: '#FDE68A' },
  ];
  const menuItems = ['Ringkasan', 'PPDB Online', 'Data Siswa', 'Keuangan'];

  return (
    <div className="relative w-full select-none" aria-hidden="true">
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: '-32px',
          background: 'radial-gradient(ellipse 80% 60% at 55% 50%, rgba(59,130,246,0.12) 0%, transparent 70%)',
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
          border: '1px solid #E2E8F0',
          borderRadius: '14px',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.04), 0 20px 48px -8px rgba(68,56,149,0.12)',
          overflow: 'hidden',
        }}
      >
        {/* Browser chrome */}
        <div style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FC6058' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEC02F' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#2ACA44' }} />
          </div>
          <div style={{ flex: 1, background: '#EFF6FF', borderRadius: '6px', padding: '4px 10px', fontSize: '10.5px', color: '#0F172A', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '5px', border: '1px solid #DBEAFE' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#2ACA44', display: 'inline-block' }} />
            ppdb.nusantara.sch.id
          </div>
        </div>

        {/* App body */}
        <div style={{ display: 'flex', height: '320px', background: '#F8FAFC' }}>
          {/* Sidebar */}
          <div style={{ width: '140px', borderRight: '1px solid #E2E8F0', background: '#FFFFFF', padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: '2px', flexShrink: 0 }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', padding: '0 6px 8px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
              Portal Sekolah
            </div>
            {menuItems.map((item, i) => (
              <div
                key={item}
                style={{
                  padding: '6px 8px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: i === 0 ? 600 : 500,
                  color: i === 0 ? '#2563EB' : '#475569',
                  background: i === 0 ? '#EFF6FF' : 'transparent',
                  cursor: 'default',
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Main */}
          <div style={{ flex: 1, padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>Dashboard PPDB</div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 8px', borderRadius: '99px', background: '#ECFDF5', border: '1px solid #A7F3D0', fontSize: '10px', fontWeight: 700, color: '#059669' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                Server 99.9%
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '10px' }}>
                <div style={{ fontSize: '10px', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Total Pendaftar</div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', lineHeight: 1 }}>1,248</div>
                <div style={{ fontSize: '10px', color: '#16A34A', fontWeight: 600, marginTop: '4px' }}>↑ +14% minggu ini</div>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '10px' }}>
                <div style={{ fontSize: '10px', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Kuota Terisi</div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', lineHeight: 1 }}>86%</div>
                <div style={{ width: '100%', background: '#E2E8F0', borderRadius: '99px', height: '4px', marginTop: '5px', overflow: 'hidden' }}>
                  <div style={{ width: '86%', height: '4px', background: '#3B82F6', borderRadius: '99px' }} />
                </div>
              </div>
            </div>
            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', overflow: 'hidden', flex: 1 }}>
              <div style={{ padding: '7px 10px', background: '#F8FAFC', borderBottom: '1px solid #F1F5F9', fontSize: '10px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Registrasi Terbaru
              </div>
              {rows.map((row, idx) => (
                <div key={idx} style={{ padding: '7px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: idx < rows.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#1E293B' }}>{row.name}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '11px', color: '#94A3B8', fontFamily: 'monospace' }}>{row.type}</span>
                    <span style={{ background: row.bg, color: row.color, border: `1px solid ${row.border}`, fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '99px' }}>
                      {row.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Server Telemetry Visual ─────────────────────── */
function ServerTelemetryVisual() {
  const bars = [20, 30, 25, 45, 60, 85, 95, 90, 88, 92, 95];
  return (
    <div className="relative w-full select-none" aria-hidden="true">
      <div style={{ background: '#0B1221', border: '1px solid #1E293B', borderRadius: '12px', padding: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1E293B', paddingBottom: '12px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            <span style={{ fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, color: '#64748B' }}>fovea-cloud-node-01</span>
          </div>
          <span style={{ fontSize: '10px', fontFamily: 'monospace', fontWeight: 700, padding: '3px 10px', borderRadius: '4px', background: 'rgba(16,185,129,0.12)', color: '#10B981', border: '1px solid rgba(16,185,129,0.25)' }}>
            AUTO-SCALE ACTIVE
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '12px' }}>
          {[
            { label: 'Requests/Sec', value: '450 rps', valueColor: '#F1F5F9' },
            { label: 'Avg Latency', value: '12ms', valueColor: '#34D399' },
            { label: 'CPU Load', value: '28%', valueColor: '#F1F5F9' },
          ].map((m) => (
            <div key={m.label} style={{ background: '#060D18', padding: '10px', borderRadius: '8px', border: '1px solid #1E293B' }}>
              <span style={{ display: 'block', fontSize: '10px', fontFamily: 'monospace', color: '#475569', textTransform: 'uppercase', marginBottom: '4px' }}>{m.label}</span>
              <span style={{ display: 'block', fontSize: '15px', fontFamily: 'monospace', fontWeight: 700, color: m.valueColor }}>{m.value}</span>
            </div>
          ))}
        </div>
        <div style={{ background: '#060D18', padding: '12px', borderRadius: '8px', border: '1px solid #1E293B' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#475569' }}>Lalu Lintas PPDB (Simulasi 5k Pendaftar)</span>
            <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 600 }}>Uptime 100%</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '56px' }}>
            {bars.map((val, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${val}%`,
                  borderRadius: '3px 3px 0 0',
                  background: i >= 5 ? '#3B82F6' : '#1E293B',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── School Website Visual ─────────────────────── */
function SchoolWebsiteVisual() {
  return (
    <div className="relative w-full select-none" aria-hidden="true">
      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
        <div style={{ background: '#FFFFFF', borderBottom: '1px solid #F1F5F9', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#FFFFFF', fontWeight: 700 }}>N</div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>SMA Nusantara</span>
          </div>
          <div style={{ display: 'flex', gap: '12px', fontSize: '11px', color: '#64748B', fontWeight: 600 }}>
            <span>Profil</span><span>PPDB</span><span>Kontak</span>
          </div>
        </div>
        <div style={{ padding: '20px 16px', background: 'linear-gradient(135deg, #EFF6FF 0%, #F0FDFA 100%)', textAlign: 'center' }}>
          <span style={{ display: 'inline-flex', borderRadius: '99px', background: 'rgba(37,99,235,0.10)', border: '1px solid #BFDBFE', padding: '3px 12px', fontSize: '10px', fontWeight: 700, color: '#1D4ED8', marginBottom: '10px' }}>
            Pendaftaran Dibuka
          </span>
          <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', lineHeight: 1.3, marginBottom: '8px' }}>
            Membentuk Generasi Unggul Berkarakter &amp; Digital
          </div>
          <p style={{ fontSize: '11px', color: '#64748B', maxWidth: '240px', margin: '0 auto 14px', lineHeight: 1.6 }}>
            Kurikulum nasional terpadu dengan fokus teknologi informasi dan sains.
          </p>
          <div style={{ display: 'inline-flex', borderRadius: '6px', background: '#2563EB', color: '#FFFFFF', fontSize: '11px', fontWeight: 700, padding: '8px 18px', boxShadow: '0 2px 8px rgba(37,99,235,0.3)' }}>
            Daftar Sekarang
          </div>
        </div>
        <div style={{ padding: '12px 16px', background: '#FFFFFF', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', borderTop: '1px solid #F1F5F9' }}>
          {[
            { icon: '✓', label: 'Akreditasi A', sub: 'Sistem mutu terjamin', iconBg: '#ECFDF5', iconColor: '#059669', iconBorder: '#A7F3D0' },
            { icon: '✓', label: 'Fasilitas Digital', sub: 'Lab komputer & VR', iconBg: '#EFF6FF', iconColor: '#2563EB', iconBorder: '#BFDBFE' },
          ].map((f) => (
            <div key={f.label} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <div style={{ width: 20, height: 20, borderRadius: '5px', background: f.iconBg, border: `1px solid ${f.iconBorder}`, color: f.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, flexShrink: 0 }}>
                {f.icon}
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#0F172A' }}>{f.label}</div>
                <div style={{ fontSize: '10px', color: '#64748B', marginTop: '2px' }}>{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Admin Portal Visual ─────────────────────── */
function AdminPortalVisual() {
  const students = [
    { name: 'Ahmad Faisal', tugas: 85, uts: 90, uas: 88, status: 'Tuntas', statusBg: '#ECFDF5', statusColor: '#059669', statusBorder: '#A7F3D0' },
    { name: 'Dina Lestari', tugas: 92, uts: 88, uas: 95, status: 'Tuntas', statusBg: '#ECFDF5', statusColor: '#059669', statusBorder: '#A7F3D0' },
    { name: 'Eko Wahyudi', tugas: 78, uts: 80, uas: 82, status: 'Tuntas', statusBg: '#ECFDF5', statusColor: '#059669', statusBorder: '#A7F3D0' },
    { name: 'Fina Nuraini', tugas: 60, uts: 65, uas: 70, status: 'Remedial', statusBg: '#FFF1F2', statusColor: '#E11D48', statusBorder: '#FECDD3' },
  ];
  return (
    <div className="relative w-full select-none" aria-hidden="true">
      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '14px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '10px', marginBottom: '10px' }}>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>Portal Nilai Kelas X-A</div>
            <div style={{ fontSize: '11px', color: '#64748B', marginTop: '3px' }}>Mata Pelajaran: Matematika</div>
          </div>
          <span style={{ padding: '4px 10px', borderRadius: '6px', background: '#EFF6FF', border: '1px solid #BFDBFE', fontSize: '10px', fontWeight: 700, color: '#2563EB' }}>
            Semester Genap
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {students.map((s, idx) => (
            <div
              key={idx}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', background: '#F8FAFC', border: '1px solid #F1F5F9', borderRadius: '8px' }}
            >
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#1E293B', width: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.name}</div>
              <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: '#64748B', fontFamily: 'monospace' }}>
                <span>T:{s.tugas}</span>
                <span>UTS:{s.uts}</span>
                <span>UAS:{s.uas}</span>
              </div>
              <span style={{ fontSize: '10px', fontWeight: 700, padding: '3px 9px', borderRadius: '99px', background: s.statusBg, color: s.statusColor, border: `1px solid ${s.statusBorder}` }}>
                {s.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Main Page ─────────────────────── */
export default function SolusiPendidikanPage() {
  const steps = [
    {
      num: 1,
      title: 'Analisis Kebutuhan',
      desc: 'Konsultasi gratis memetakan alur pendaftaran PPDB dan spesifikasi kebutuhan sekolah secara menyeluruh.',
      icon: <BarChart3 size={18} />,
      accent: '#2563EB',
      accentLight: '#EFF6FF',
      accentBorder: '#BFDBFE',
    },
    {
      num: 2,
      title: 'Desain & Prototipe',
      desc: 'Perancangan visual halaman depan sekolah dan dashboard admin yang intuitif, direview bersama tim Anda.',
      icon: <Monitor size={18} />,
      accent: '#0891B2',
      accentLight: '#ECFEFF',
      accentBorder: '#A5F3FC',
    },
    {
      num: 3,
      title: 'Pembangunan Sistem',
      desc: 'Pemrograman sistem cloud berkinerja tinggi, aman, auto-scalable, dan responsif di semua perangkat.',
      icon: <Zap size={18} />,
      accent: '#7C3AED',
      accentLight: '#F5F3FF',
      accentBorder: '#DDD6FE',
    },
    {
      num: 4,
      title: 'Training & Serah Terima',
      desc: 'Pelatihan staf sekolah secara berkala hingga mandiri dan pendampingan penuh saat perilisan sistem.',
      icon: <Shield size={18} />,
      accent: '#059669',
      accentLight: '#ECFDF5',
      accentBorder: '#A7F3D0',
    },
  ];

  return (
    <main className="min-h-screen pt-10">

      {/* ── Hero ── */}
      <header
        className="relative overflow-hidden"
        style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
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
                style={{ background: 'var(--secondary-light)', border: '1px solid var(--secondary-mid)', color: 'var(--secondary)' }}
              >
                <Sparkles size={12} />
                Solusi Vertikal Pendidikan
              </span>
              <h1
                className="text-slate-900 mb-5"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.04em', textWrap: 'balance' }}
              >
                Digitalisasi Sekolah &amp; PPDB Online Anti-Macet
              </h1>
              <p className="text-slate-600 text-base leading-relaxed mb-8" style={{ maxWidth: '50ch' }}>
                Fovea Teknologi membangun website profil premium dan sistem operasional PPDB berbasis cloud scalable untuk sekolah swasta, SMK, pesantren, dan bimbingan belajar.
              </p>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3 mb-8 mt-3">
                {[
                  { val: '99.9%', label: 'Uptime Garanteed' },
                  { val: '< 1 Dtk', label: 'Page Load Speed' },
                  { val: '5k+', label: 'Akses Bersamaan' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col"
                    style={{
                      padding: '10px 18px',
                      background: '#FFFFFF',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      boxShadow: 'var(--shadow-xs)',
                    }}
                  >
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{stat.val}</span>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>{stat.label}</span>
                  </div>
                ))}
              </div>

              <nav aria-label="Hero actions" className="flex flex-wrap gap-3">
                <Link href="/#contact" className="btn-primary cursor-pointer text-sm">
                  Digitalisasi Sekolah Kami
                  <ArrowRight size={14} className="ml-1.5" />
                </Link>
                <a
                  href="https://wa.me/628818204100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  Tanya Tim Ahli
                </a>
              </nav>
            </div>

            {/* Right visual */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-xl">
                <DashboardVisual />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Bento Feature Grid ── */}
      <section className="section-padding" style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border)' }}>
        <div className="page-shell">
          {/* Section header */}
          <header className="mb-16" style={{ maxWidth: '560px' }}>
            <h2 className="text-slate-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', textWrap: 'balance' }}>
              Mengapa Bermitra dengan Fovea?
            </h2>
            <p className="text-slate-600 leading-relaxed" style={{ fontSize: '1rem' }}>
              Kami menyelesaikan tiga kendala teknologi klasik di sekolah swasta dengan solusi berbasis cloud modern.
            </p>
          </header>

          {/* Bento grid — asymmetric, 3-column on desktop */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'auto auto',
              gap: '16px',
            }}
            className="bento-grid"
          >

            {/* ── Cell 1: Server / PPDB — wide (spans 2 cols) ── */}
            <article
              style={{
                gridColumn: 'span 2',
                background: '#0B1221',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Subtle glow */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '-60px',
                  right: '-60px',
                  width: '240px',
                  height: '240px',
                  background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    borderRadius: '99px',
                    background: 'rgba(239,68,68,0.12)',
                    border: '1px solid rgba(239,68,68,0.25)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#FCA5A5',
                  }}
                >
                  <AlertTriangle size={11} />
                  Tantangan: Server Down Saat PPDB
                </span>
              </div>

              {/* Text */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3
                  style={{
                    fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
                    fontWeight: 800,
                    color: '#F1F5F9',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.25,
                    marginBottom: '12px',
                    textWrap: 'balance',
                  }}
                >
                  Server PPDB Tetap Tegak Saat Lonjakan Pendaftar
                </h3>
                <p style={{ fontSize: '0.9375rem', color: '#94A3B8', lineHeight: 1.7, maxWidth: '46ch', marginBottom: '16px' }}>
                  Sistem kami menggunakan arsitektur cloud auto-scalable yang otomatis menambah kapasitas saat trafik melonjak drastis, sehingga operasional tetap lancar tanpa masalah server down.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    'Auto-scaling cloud nodes (ribuan akses bersamaan)',
                    'Sistem antrean pendaftaran cerdas & stabil',
                    'Ringan diakses dari smartphone 4G sekalipun',
                  ].map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: '#CBD5E1' }}>
                      <span
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          background: 'rgba(16,185,129,0.15)',
                          border: '1px solid rgba(16,185,129,0.3)',
                          color: '#34D399',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Check size={10} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <ServerTelemetryVisual />
              </div>
            </article>

            {/* ── Cell 2: Website profil — narrow (1 col, spans 2 rows vertically) ── */}
            <article
              style={{
                gridRow: 'span 2',
                background: '#F8FAFC',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '99px',
                  background: '#EFF6FF',
                  border: '1px solid #BFDBFE',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#1D4ED8',
                  alignSelf: 'flex-start',
                }}
              >
                <Monitor size={11} />
                Kredibilitas: Tampilan Website Kuno
              </span>

              <div>
                <h3
                  style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                    fontWeight: 800,
                    color: '#0F172A',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.25,
                    marginBottom: '10px',
                    textWrap: 'balance',
                  }}
                >
                  Website Profil Premium untuk Kesan Pertama Terbaik
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                  Website adalah etalase digital sekolah Anda. Kami merancang website profil dengan estetika modern, cepat dimuat, dan SEO-friendly.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    'Desain eksklusif & responsif di semua perangkat',
                    'Optimasi SEO agar mudah ditemukan di Google',
                    'Manajemen konten prestasi, berita & galeri kegiatan',
                  ].map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: '#334155' }}>
                      <span
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          background: '#ECFDF5',
                          border: '1px solid #A7F3D0',
                          color: '#059669',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '1px',
                        }}
                      >
                        <Check size={10} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end' }}>
                <SchoolWebsiteVisual />
              </div>
            </article>

            {/* ── Cell 3: Admin portal — wide (spans 2 cols, row 2) ── */}
            <article
              style={{
                gridColumn: 'span 2',
                background: '#FFFFFF',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                gap: '32px',
                alignItems: 'center',
              }}
              className="admin-bento-cell"
            >
              {/* Left: text */}
              <div style={{ flex: '0 0 auto', maxWidth: '340px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    borderRadius: '99px',
                    background: '#FFFBEB',
                    border: '1px solid #FDE68A',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#B45309',
                    marginBottom: '16px',
                  }}
                >
                  <Settings size={11} />
                  Efisiensi: Administrasi Masih Manual
                </span>
                <h3
                  style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                    fontWeight: 800,
                    color: '#0F172A',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.25,
                    marginBottom: '10px',
                    textWrap: 'balance',
                  }}
                >
                  Kelola Nilai, Tugas, &amp; Absensi Tanpa Ribet Excel
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                  Ganti tumpukan kertas dan file Excel yang rentan hilang. Portal internal kami memudahkan guru menginput nilai dan wali murid memantau presensi secara langsung.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    'Dashboard terpusat untuk yayasan & kepala sekolah',
                    'Distribusi e-rapor & pengumuman kelulusan digital',
                    'Hak akses berlapis: Guru, Siswa, Wali Murid',
                  ].map((b) => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: '#334155' }}>
                      <span
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          background: '#ECFDF5',
                          border: '1px solid #A7F3D0',
                          color: '#059669',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '1px',
                        }}
                      >
                        <Check size={10} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: visual */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <AdminPortalVisual />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Alur Kerja — Vertical alternating timeline ── */}
      <section className="section-padding" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="page-shell">
          <header className="text-center mb-16" style={{ maxWidth: '520px', margin: '0 auto 64px' }}>
            <h2 className="text-slate-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
              Alur Kerja yang Terstruktur
            </h2>
            <p className="text-slate-600 leading-relaxed" style={{ fontSize: '1rem' }}>
              Dari pengumpulan kebutuhan awal hingga sistem operasional online di internet.
            </p>
          </header>

          {/* Timeline */}
          <div className="timeline-wrapper" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            {/* Vertical line */}
            <div
              aria-hidden="true"
              className="timeline-line"
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '2px',
                background: 'var(--border)',
                zIndex: 0,
              }}
            />

            <ol style={{ display: 'flex', flexDirection: 'column', gap: '48px', position: 'relative', zIndex: 1, listStyle: 'none', padding: 0, margin: 0 }}>
              {steps.map((step, i) => {
                const isRight = i % 2 === 0;
                return (
                  <li
                    key={step.num}
                    className="timeline-step"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto 1fr',
                      alignItems: 'center',
                      gap: '24px',
                    }}
                  >
                    {/* Left slot */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      {!isRight && (
                        <div
                          style={{
                            background: '#FFFFFF',
                            border: '1px solid var(--border)',
                            borderRadius: '12px',
                            padding: '20px 24px',
                            maxWidth: '280px',
                            boxShadow: 'var(--shadow-sm)',
                          }}
                        >
                          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: step.accent, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                            Langkah {step.num}
                          </div>
                          <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', letterSpacing: '-0.015em' }}>{step.title}</div>
                          <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.65 }}>{step.desc}</p>
                        </div>
                      )}
                    </div>

                    {/* Center badge */}
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: step.accentLight,
                        border: `2px solid ${step.accentBorder}`,
                        color: step.accent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 0 0 4px #FFFFFF',
                      }}
                    >
                      {step.icon}
                    </div>

                    {/* Right slot */}
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                      {isRight && (
                        <div
                          style={{
                            background: '#FFFFFF',
                            border: '1px solid var(--border)',
                            borderRadius: '12px',
                            padding: '20px 24px',
                            maxWidth: '280px',
                            boxShadow: 'var(--shadow-sm)',
                          }}
                        >
                          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: step.accent, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                            Langkah {step.num}
                          </div>
                          <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', letterSpacing: '-0.015em' }}>{step.title}</div>
                          <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.65 }}>{step.desc}</p>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
              style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)', color: '#93C5FD', padding: '5px 14px' }}
            >
              Mulai Digitalisasi Sekolah
            </span>
            <h2
              className="mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--ink-dark)', textWrap: 'balance' }}
            >
              Siap Memulai Transformasi Sekolah Anda?
            </h2>
            <p className="leading-relaxed mb-8" style={{ fontSize: '1rem', color: 'var(--muted-dark)', maxWidth: '48ch' }}>
              Jadikan sekolah swasta Anda lebih kompetitif dan diminati wali murid dengan website modern serta sistem PPDB tanpa drama server down.
            </p>
            <nav aria-label="CTA actions" className="flex flex-wrap justify-center gap-3 mt-3">
              <Link href="/#contact" className="btn-primary cursor-pointer text-sm">
                Konsultasikan Sekarang
                <ArrowRight size={14} className="ml-1.5" />
              </Link>
              <a
                href="https://wa.me/628818204100"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-dark text-sm"
              >
                Hubungi via WhatsApp
              </a>
            </nav>
          </article>
        </div>
      </section>

    </main>
  );
}
