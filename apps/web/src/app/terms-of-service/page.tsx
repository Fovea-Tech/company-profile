import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import Briefcase from 'lucide-react/dist/esm/icons/briefcase';
import Copyright from 'lucide-react/dist/esm/icons/copyright';
import CreditCard from 'lucide-react/dist/esm/icons/credit-card';
import UserCheck from 'lucide-react/dist/esm/icons/user-check';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import AlertTriangle from 'lucide-react/dist/esm/icons/triangle-alert';
import Key from 'lucide-react/dist/esm/icons/key';
import Scale from 'lucide-react/dist/esm/icons/scale';
import Mail from 'lucide-react/dist/esm/icons/mail';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import FileText from 'lucide-react/dist/esm/icons/file-text';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan | Fovea Teknologi',
  description: 'Syarat & Ketentuan Layanan Fovea Teknologi. Hubungan hukum dan aturan penggunaan jasa pembuatan website, aplikasi, dan pemeliharaan sistem kami.',
  alternates: {
    canonical: 'https://www.fovea.digital/terms-of-service',
  },
};

const SECTIONS = [
  { id: 'lingkup-layanan', title: 'Lingkup Layanan', icon: <Briefcase size={16} /> },
  { id: 'hak-cipta', title: 'Hak Cipta & Kepemilikan', icon: <Copyright size={16} /> },
  { id: 'pembayaran', title: 'Ketentuan Pembayaran', icon: <CreditCard size={16} /> },
  { id: 'kewajiban', title: 'Kewajiban Klien', icon: <UserCheck size={16} /> },
  { id: 'garansi', title: 'Garansi & Maintenance', icon: <ShieldCheck size={16} /> },
  { id: 'batasan', title: 'Batasan Tanggung Jawab', icon: <AlertTriangle size={16} /> },
  { id: 'kerahasiaan', title: 'Kerahasiaan (NDA)', icon: <Key size={16} /> },
  { id: 'hukum', title: 'Hukum yang Berlaku', icon: <Scale size={16} /> },
  { id: 'kontak', title: 'Hubungi Kami', icon: <Mail size={16} /> },
];

export default function TermsOfServicePage() {
  const lastUpdated = '21 Juni 2026';

  return (
    <main className="min-h-screen pb-24 pt-32" style={{ background: 'var(--bg)' }}>
      {/* ── Hero ── */}
      <header className="relative overflow-hidden" style={{ borderBottom: '1px solid var(--border)', background: '#FFFFFF' }}>
        <div className="hero-glow-tr absolute" aria-hidden="true" />
        <div className="page-shell relative z-10 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-6 uppercase tracking-wider"
              style={{
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                color: 'var(--primary)',
              }}
            >
              <FileText size={14} />
              Legal & Syarat Layanan
            </span>

            <h1
              className="text-slate-900 mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                textWrap: 'balance',
              }}
            >
              Syarat & Ketentuan
            </h1>
            
            <p
              className="text-slate-600 leading-relaxed mb-8"
              style={{ fontSize: '1.125rem', maxWidth: '60ch' }}
            >
              Selamat datang di <strong>Fovea Teknologi</strong>. Dokumen ini mengatur hubungan hukum antara Fovea Teknologi dengan Anda selaku klien yang menggunakan layanan pembuatan website, produk SaaS, maupun paket maintenance kami.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', color: '#64748B', fontWeight: 500 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981' }} />
              Terakhir Diperbarui: {lastUpdated}
            </div>
          </div>
        </div>
      </header>

      {/* ── Content Split Layout ── */}
      <div className="page-shell mt-12 lg:mt-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Sidebar / TOC (Sticky) */}
          <aside
            className="hidden lg:flex flex-col gap-2 w-72 shrink-0"
            style={{ position: 'sticky', top: '120px' }}
          >
            <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', paddingLeft: '16px' }}>
              Daftar Isi
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <span style={{ color: '#94A3B8' }}>{sec.icon}</span>
                  {sec.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Clauses */}
          <article className="flex-1 max-w-3xl flex flex-col gap-16">
            
            <section id="lingkup-layanan" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>1</span>
                Lingkup Layanan Kami
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>Fovea Teknologi menyediakan jasa profesional dalam bidang teknologi informasi yang mencakup:</p>
                <ul style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', listStyle: 'none', margin: 0 }}>
                  <li style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ color: 'var(--primary)', marginTop: '4px' }}><Briefcase size={20} /></div>
                    <div>
                      <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>Website Custom & Dashboard</strong>
                      Pembuatan antarmuka web, portal PPDB/sekolah, sistem manajemen (CMS/ERP), dan integrasi API berdasarkan spesifikasi desain dan fitur yang disepakati.
                    </div>
                  </li>
                  <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
                  <li style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ color: 'var(--primary)', marginTop: '4px' }}><FileText size={20} /></div>
                    <div>
                      <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>SaaS Product Integration</strong>
                      Penyediaan akses dan kustomisasi produk software-as-a-service (SaaS) milik Fovea Teknologi.
                    </div>
                  </li>
                  <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
                  <li style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ color: 'var(--primary)', marginTop: '4px' }}><ShieldCheck size={20} /></div>
                    <div>
                      <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>Pemeliharaan & SLA</strong>
                      Jasa pemantauan uptime server, backup harian/mingguan, patch keamanan, bug fixing, dan pelaporan kesehatan sistem bulanan.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section id="hak-cipta" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>2</span>
                Hak Cipta & Kepemilikan Intelektual
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingLeft: '0', listStyle: 'none' }}>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', marginTop: '12px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#0F172A' }}>Hak Milik Klien:</strong> Setelah seluruh kewajiban pembayaran dilunasi, seluruh hak kepemilikan kode sumber aplikasi custom (source code) dan aset desain yang dibuat khusus akan sepenuhnya diserahkan kepada Klien, kecuali modul pihak ketiga atau modul core milik Fovea.
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', marginTop: '12px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#0F172A' }}>Hak Milik Fovea (Modul Framework & SaaS):</strong> Modul dasar, library core, dan kode produk SaaS yang dikembangkan secara internal oleh Fovea Teknologi tetap merupakan hak kekayaan intelektual kami. Klien diberikan lisensi penggunaan non-eksklusif.
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', marginTop: '12px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#0F172A' }}>Aset Klien:</strong> Semua logo, teks, data, gambar, dan video yang diberikan oleh Klien kepada Kami untuk keperluan proyek sepenuhnya merupakan hak milik Klien dan tanggung jawab hukum Klien.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section id="pembayaran" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>3</span>
                Ketentuan Pembayaran & Batal Proyek
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <ul style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
                    <strong style={{ color: '#0F172A', display: 'block', marginBottom: '8px' }}>Down Payment (DP) & Termin</strong>
                    <p style={{ fontSize: '0.95rem', margin: 0 }}>Proyek pengembangan dimulai setelah Klien membayar uang muka (DP) sebesar 30-50%. Sisa pembayaran dilakukan dalam termin berdasarkan tahapan milestones yang disepakati.</p>
                  </li>
                  <li style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
                    <strong style={{ color: '#0F172A', display: 'block', marginBottom: '8px' }}>Metode Pembayaran</strong>
                    <p style={{ fontSize: '0.95rem', margin: 0 }}>Pembayaran dilakukan via transfer bank ke rekening resmi Fovea Teknologi sesuai nominal yang tercantum pada Invoice resmi.</p>
                  </li>
                  <li style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
                    <strong style={{ color: '#0F172A', display: 'block', marginBottom: '8px' }}>Keterlambatan Pembayaran</strong>
                    <p style={{ fontSize: '0.95rem', margin: 0 }}>Keterlambatan lebih dari 14 hari sejak tanggal jatuh tempo tanpa pemberitahuan memberi Kami hak untuk menghentikan pengerjaan sementara.</p>
                  </li>
                  <li style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '12px', padding: '20px' }}>
                    <strong style={{ color: '#92400E', display: 'block', marginBottom: '8px' }}>Pembatalan Sepihak</strong>
                    <p style={{ fontSize: '0.95rem', color: '#92400E', margin: 0 }}>Apabila proyek dibatalkan sepihak oleh Klien tanpa kesalahan dari Kami, DP yang telah dibayarkan bersifat tidak dapat dikembalikan (non-refundable).</p>
                  </li>
                </ul>
              </div>
            </section>

            <section id="kewajiban" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>4</span>
                Kewajiban & Tanggung Jawab Klien
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>Untuk memastikan proyek selesai tepat waktu, Klien berkewajiban untuk:</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '0', listStyle: 'none' }}>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', marginTop: '12px', flexShrink: 0 }} />
                    <span>Menyediakan data, konten, teks, logo, kredensial hosting, dan dokumen pendukung proyek lainnya secara berkala.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', marginTop: '12px', flexShrink: 0 }} />
                    <span>Melakukan pengujian fitur dan memberikan feedback review dalam jangka waktu yang disepakati pada masa UAT (User Acceptance Testing).</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', marginTop: '12px', flexShrink: 0 }} />
                    <span>Menunjuk satu orang perwakilan (Single Point of Contact) yang berwenang mengambil keputusan persetujuan.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="garansi" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>5</span>
                Jaminan Garansi & Layanan Maintenance
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '12px', padding: '16px 20px', color: '#166534', fontSize: '0.95rem', marginBottom: '8px' }}>
                  <strong>Garansi Bebas Bug (30 Hari):</strong> Kami memberikan garansi perbaikan bug/error gratis selama 30 hari kalender terhitung sejak serah terima sistem (handover).
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '0', listStyle: 'none' }}>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', marginTop: '12px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#0F172A' }}>Batasan Garansi:</strong> Garansi tidak mencakup kerusakan sistem atau bug yang timbul akibat modifikasi kode sumber secara mandiri oleh Klien atau pihak ketiga lainnya tanpa persetujuan tertulis dari Fovea Teknologi.
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', marginTop: '12px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#0F172A' }}>Layanan Maintenance Lanjutan:</strong> Setelah masa garansi 30 hari berakhir, pemeliharaan sistem dapat diakomodasi melalui langganan Paket Maintenance bulanan/tahunan (SLA).
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section id="batasan" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>6</span>
                Batasan Tanggung Jawab
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>
                <p>Dalam hal apa pun Fovea Teknologi tidak bertanggung jawab atas kerugian tidak langsung, kehilangan keuntungan bisnis, kehilangan data, atau gangguan operasional Klien yang disebabkan oleh penggunaan produk software kami, downtime server pihak ketiga (hosting/Cloudflare), atau perubahan kebijakan API pihak ketiga di luar kendali kami.</p>
              </div>
            </section>

            <section id="kerahasiaan" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>7</span>
                Kerahasiaan Informasi (NDA)
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>
                <p>Kedua belah pihak setuju untuk menjaga kerahasiaan informasi bisnis, data pengguna, rahasia dagang, strategi pemasaran, atau dokumen teknis lainnya yang dibagikan selama masa kerja sama. Ketentuan ini tetap berlaku bahkan setelah proyek pengembangan selesai.</p>
              </div>
            </section>

            <section id="hukum" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>8</span>
                Hukum yang Berlaku
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>
                <p>Syarat & Ketentuan Layanan ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku di Negara Kesatuan Republik Indonesia. Setiap perselisihan yang timbul dari Syarat & Ketentuan ini akan diselesaikan secara musyawarah mufakat terlebih dahulu sebelum menempuh jalur hukum.</p>
              </div>
            </section>

            <section id="kontak" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>9</span>
                Hubungi Kami
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p>Jika Anda memiliki pertanyaan mengenai Syarat & Ketentuan Layanan ini, silakan hubungi kami di:</p>
                <div style={{ background: '#1E293B', color: '#FFFFFF', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>Fovea Teknologi Customer Relation</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95rem', color: '#94A3B8' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ width: '80px' }}>Email:</span>
                      <a href="mailto:hello@fovea.digital" style={{ color: '#FFFFFF', textDecoration: 'none' }}>hello@fovea.digital</a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ width: '80px' }}>WhatsApp:</span>
                      <a href="https://wa.me/628818204100" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'none' }}>+62 881-8204-100</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </article>
        </div>
      </div>

      {/* ── Footer CTA ── */}
      <nav aria-label="Footer actions" className="page-shell mt-24">
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', display: 'flex', justifyContent: 'center' }}>
          <Link href="/" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#FFFFFF' }}>
            <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
            Kembali ke Beranda
          </Link>
        </div>
      </nav>
    </main>
  );
}
