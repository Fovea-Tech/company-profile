'use client';

import React, { useState } from 'react';
import Check from 'lucide-react/dist/esm/icons/check';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="section-padding" style={{ background: '#F8FAFC', borderBottom: '1px solid var(--border)' }}>
      <div className="page-shell">
        <header className="text-center mb-10" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
          <span
            className="inline-flex items-center gap-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider"
            style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)', color: '#2563EB', padding: '5px 14px' }}
          >
            Paket Harga Spesial
          </span>
          <h2 className="text-slate-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', textWrap: 'balance' }}>
            Investasi Digital untuk Masa Depan
          </h2>
          <p className="text-slate-600 leading-relaxed" style={{ fontSize: '1rem' }}>
            Harga transparan yang disesuaikan dengan kebutuhan edukasi. Tingkatkan kredibilitas tanpa membebani anggaran tahunan.
          </p>
        </header>

        {/* Toggle Bulanan / Tahunan */}
        <div className="flex justify-center mb-12 mt-4">
          <div className="relative flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative z-10 w-32 py-2.5 text-sm font-semibold rounded-full transition-colors ${!isAnnual ? 'text-white' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative z-10 w-32 py-2.5 text-sm font-semibold rounded-full transition-colors ${isAnnual ? 'text-white' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Tahunan
              <span className="absolute -top-3.5 -right-3 text-[10px] uppercase font-extrabold px-2.5 py-1 rounded-full bg-emerald-500 text-white shadow-sm ring-2 ring-white">
                Paling Hemat
              </span>
            </button>
            <div
              className="absolute top-1 bottom-1 w-32 bg-blue-600 rounded-full transition-all duration-300 ease-out"
              style={{
                left: isAnnual ? 'calc(100% - 8rem - 4px)' : '4px',
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Paket 1: EduStarter */}
          <div className="mnt-plan-card">
            <div className="mnt-plan-header">
              <h3 className="mnt-plan-name">EduStarter</h3>
              <p className="mnt-plan-tagline">Untuk profil sekolah dasar & TK.</p>
            </div>
            <div className="mnt-plan-price-row mt-2">
              <span className="mnt-plan-price" style={{ fontSize: '1.75rem' }}>{isAnnual ? 'Rp5Jt' : 'Rp500rb'}</span>
              <span className="mnt-plan-period">{isAnnual ? '/ tahun' : '/ bulan'}</span>
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-1">
              + Rp1.5Jt Setup Awal (1x)
            </div>
            <ul className="mnt-plan-features mt-4">
              {[
                'Website Profil Landing Page',
                'Domain .sch.id & Hosting',
                'Optimasi SEO Basic',
                'Tombol WhatsApp Langsung',
                'Update konten hingga 2x per bulan',
              ].map((ft) => (
                <li key={ft} className="mnt-plan-feature">
                  <Check size={16} className="mnt-check-icon" />
                  {ft}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/628818204100?text=Halo%20Fovea,%20saya%20tertarik%20dengan%20paket%20EduStarter%20untuk%20sekolah%20kami." target="_blank" rel="noopener noreferrer" className="mnt-plan-cta-ghost mt-6">
              Pilih EduStarter
            </a>
          </div>

          {/* Paket 2: CampusBasic */}
          <div className="mnt-plan-card">
            <div className="mnt-plan-header">
              <h3 className="mnt-plan-name">CampusBasic</h3>
              <p className="mnt-plan-tagline">Pilihan tepat untuk SMP & SMA.</p>
            </div>
            <div className="mnt-plan-price-row mt-2">
              <span className="mnt-plan-price" style={{ fontSize: '1.75rem' }}>{isAnnual ? 'Rp10Jt' : 'Rp1Jt'}</span>
              <span className="mnt-plan-period">{isAnnual ? '/ tahun' : '/ bulan'}</span>
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-1">
              + Rp3Jt Setup Awal (1x)
            </div>
            <ul className="mnt-plan-features mt-4">
              {[
                'Website CMS (Berita & Galeri)',
                'Sistem PPDB (Formulir Online)',
                'Dashboard Admin Basic',
                'Layanan Maintenance Rutin',
                'Sertifikat SSL Gratis',
              ].map((ft) => (
                <li key={ft} className="mnt-plan-feature">
                  <Check size={16} className="mnt-check-icon" />
                  {ft}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/628818204100?text=Halo%20Fovea,%20saya%20tertarik%20dengan%20paket%20CampusBasic%20untuk%20sekolah%20kami." target="_blank" rel="noopener noreferrer" className="mnt-plan-cta-ghost mt-6">
              Pilih CampusBasic
            </a>
          </div>

          {/* Paket 3: ScholarPro */}
          <div className="mnt-plan-card mnt-plan-card--highlight relative z-10 transform transition-transform duration-300 lg:scale-105 lg:-translate-y-2" style={{ padding: '32px 24px' }}>
            <span className="mnt-plan-badge">PALING POPULER</span>
            <div className="mnt-plan-header">
              <h3 className="mnt-plan-name">ScholarPro</h3>
              <p className="mnt-plan-tagline">Ekosistem digital lengkap & otomatis.</p>
            </div>
            <div className="mnt-plan-price-row mt-2">
              <span className="mnt-plan-price" style={{ fontSize: '1.75rem' }}>{isAnnual ? 'Rp16Jt' : 'Rp1.5Jt'}</span>
              <span className="mnt-plan-period">{isAnnual ? '/ tahun' : '/ bulan'}</span>
            </div>
            <div className="text-xs font-semibold text-slate-500 mt-1">
              + Rp6Jt Setup Awal (1x)
            </div>
            <ul className="mnt-plan-features mt-4">
              {[
                'Sistem PPDB Lanjutan (CBT)',
                'Portal Nilai & Absensi (SIAKAD)',
                'Notifikasi WhatsApp Gateway',
                'Server Auto-Scale Anti Down',
                'Akses Multi-Role (Guru, Siswa)',
              ].map((ft) => (
                <li key={ft} className="mnt-plan-feature">
                  <Check size={16} className="mnt-check-icon" />
                  <span style={{ fontWeight: 600, color: '#0F172A' }}>{ft}</span>
                </li>
              ))}
            </ul>
            <a href="https://wa.me/628818204100?text=Halo%20Fovea,%20saya%20tertarik%20dengan%20paket%20ScholarPro%20untuk%20sekolah%20kami." target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 text-sm flex" style={{ marginTop: 'auto', textAlign: 'center', justifyContent: 'center', padding: '13px 20px' }}>
              Pilih ScholarPro
            </a>
          </div>

          {/* Paket 4: PioneerEnterprise */}
          <div className="mnt-plan-card">
            <div className="mnt-plan-header">
              <h3 className="mnt-plan-name">PioneerEnterprise</h3>
              <p className="mnt-plan-tagline">Solusi custom untuk yayasan besar.</p>
            </div>
            <div className="mnt-plan-price-row mt-2">
              <span className="mnt-plan-price" style={{ fontSize: '1.45rem' }}>Hubungi Kami</span>
            </div>
            <ul className="mnt-plan-features mt-4">
              {[
                'Semua Fitur ScholarPro',
                'Custom App / Mobile App',
                'Integrasi Keuangan & Gateway',
                'SLA Uptime 99.9%',
                'Dedicated Support 24/7',
              ].map((ft) => (
                <li key={ft} className="mnt-plan-feature">
                  <Check size={16} className="mnt-check-icon" />
                  {ft}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/628818204100?text=Halo%20Fovea,%20saya%20tertarik%20dengan%20paket%20PioneerEnterprise%20untuk%20yayasan%20kami." target="_blank" rel="noopener noreferrer" className="mnt-plan-cta-ghost mt-6">
              Hubungi Tim Ahli
            </a>
          </div>

        </div>
        
        <div className="mnt-pricing-note mt-8 text-center text-slate-500 text-sm">
          Harga dapat disesuaikan dengan skala dan kebutuhan spesifik sekolah Anda.
        </div>
      </div>
    </section>
  );
}
