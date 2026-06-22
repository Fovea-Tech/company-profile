import type { Metadata } from 'next';
import Link from 'next/link';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import Eye from 'lucide-react/dist/esm/icons/eye';
import RefreshCw from 'lucide-react/dist/esm/icons/refresh-cw';
import Lock from 'lucide-react/dist/esm/icons/lock';
import Users from 'lucide-react/dist/esm/icons/users';
import Scale from 'lucide-react/dist/esm/icons/scale';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import Mail from 'lucide-react/dist/esm/icons/mail';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi | Fovea Teknologi',
  description: 'Kebijakan Privasi Fovea Teknologi. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat menggunakan layanan kami.',
  alternates: {
    canonical: 'https://www.fovea.digital/privacy-policy',
  },
};

const SECTIONS = [
  { id: 'informasi', title: 'Informasi yang Dikumpulkan', icon: <Eye size={16} /> },
  { id: 'penggunaan', title: 'Penggunaan Informasi', icon: <RefreshCw size={16} /> },
  { id: 'keamanan', title: 'Perlindungan Data', icon: <Lock size={16} /> },
  { id: 'pihak-ketiga', title: 'Berbagi Pihak Ketiga', icon: <Users size={16} /> },
  { id: 'hak', title: 'Hak-Hak Anda', icon: <Scale size={16} /> },
  { id: 'perubahan', title: 'Perubahan Kebijakan', icon: <FileText size={16} /> },
  { id: 'kontak', title: 'Hubungi Kami', icon: <Mail size={16} /> },
];

export default function PrivacyPolicyPage() {
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
              <ShieldCheck size={14} />
              Legal & Privasi
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
              Kebijakan Privasi
            </h1>
            
            <p
              className="text-slate-600 leading-relaxed mb-8"
              style={{ fontSize: '1.125rem', maxWidth: '60ch' }}
            >
              Di <strong>Fovea Teknologi</strong>, kami berkomitmen untuk melindungi dan menghormati privasi Anda. Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan membagikan informasi Anda.
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
            
            <section id="informasi" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>1</span>
                Informasi yang Kami Kumpulkan
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>Kami mengumpulkan beberapa jenis informasi dari dan tentang pengguna situs web kami, termasuk:</p>
                
                <ul style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', listStyle: 'none', margin: 0 }}>
                  <li style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ color: 'var(--primary)', marginTop: '4px' }}><Eye size={20} /></div>
                    <div>
                      <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>Data Kontak Pribadi</strong>
                      Nama, alamat email, nomor telepon/WhatsApp, dan informasi bisnis yang Anda berikan secara sukarela saat mengisi formulir kontak atau konsultasi.
                    </div>
                  </li>
                  <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
                  <li style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ color: 'var(--primary)', marginTop: '4px' }}><RefreshCw size={20} /></div>
                    <div>
                      <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>Data Teknis & Penggunaan</strong>
                      Alamat IP, jenis browser, penyedia layanan internet, halaman rujukan/keluar, sistem operasi, stempel waktu, dan pola navigasi.
                    </div>
                  </li>
                  <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
                  <li style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ color: 'var(--primary)', marginTop: '4px' }}><FileText size={20} /></div>
                    <div>
                      <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>Kuki (Cookies)</strong>
                      Kami menggunakan kuki untuk meningkatkan pengalaman navigasi dan menganalisis efektivitas kampanye iklan (seperti Google Ads).
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section id="penggunaan" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>2</span>
                Bagaimana Kami Menggunakan Informasi Anda
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>Kami menggunakan informasi pribadi yang dikumpulkan untuk tujuan-tujuan berikut:</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '0', listStyle: 'none' }}>
                  {[
                    'Menghubungi Anda kembali untuk konsultasi proyek yang Anda ajukan melalui formulir kontak.',
                    'Menyediakan layanan pengembangan website, sistem digital, atau paket maintenance yang disepakati.',
                    'Mengirimkan penawaran proposal, invoice, dan laporan bulanan layanan (SLA).',
                    'Memantau dan menganalisis performa situs web kami guna meningkatkan kegunaan dan UI.',
                    'Melacak konversi iklan Google Ads untuk mengoptimalkan efisiensi pemasaran kami.'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', marginTop: '12px', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="keamanan" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>3</span>
                Perlindungan & Keamanan Data
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>
                  Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi data pribadi Anda dari akses tidak sah, pengungkapan, perubahan, atau penghancuran. Komunikasi data melalui situs web kami dilindungi oleh enkripsi SSL (Secure Sockets Layer).
                </p>
                <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '12px', padding: '16px 20px', color: '#92400E', fontSize: '0.95rem' }}>
                  <strong>Catatan Penting:</strong> Meskipun demikian, perlu diingat bahwa tidak ada metode transmisi melalui Internet atau metode penyimpanan elektronik yang 100% aman. Kami berusaha keras untuk melindungi informasi Anda tetapi tidak dapat menjamin keamanan mutlaknya.
                </div>
              </div>
            </section>

            <section id="pihak-ketiga" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>4</span>
                Berbagi dengan Pihak Ketiga
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>Kami <strong>tidak</strong> menjual, menyewakan, atau memperdagangkan informasi pribadi Anda kepada pihak ketiga. Kami hanya membagikan data Anda dalam skenario terbatas berikut:</p>
                <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                  <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
                    <strong style={{ color: '#0F172A', display: 'block', marginBottom: '8px' }}>Penyedia Layanan (Subkontraktor/Mitra)</strong>
                    <p style={{ fontSize: '0.95rem', margin: 0 }}>Kami dapat membagikan informasi dengan mitra pihak ketiga terpercaya (hosting, email, analitik), dengan syarat mereka setuju untuk menjaga kerahasiaan sesuai NDA.</p>
                  </div>
                  <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
                    <strong style={{ color: '#0F172A', display: 'block', marginBottom: '8px' }}>Kepatuhan Hukum</strong>
                    <p style={{ fontSize: '0.95rem', margin: 0 }}>Kami dapat mengungkapkan informasi Anda jika diwajibkan oleh undang-undang atau perintah pengadilan untuk memenuhi proses hukum yang berlaku.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="hak" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>5</span>
                Hak-Hak Anda Atas Data
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>Sebagai pemilik data, Anda memiliki hak-hak berikut:</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '0', listStyle: 'none' }}>
                  {[
                    'Hak untuk meminta salinan informasi pribadi Anda yang kami simpan.',
                    'Hak untuk meminta perbaikan informasi pribadi Anda yang tidak akurat.',
                    'Hak untuk meminta penghapusan informasi pribadi Anda dari sistem kami (hak untuk dilupakan).'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', marginTop: '12px', flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="perubahan" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>6</span>
                Perubahan pada Kebijakan
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>
                <p>Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan operasional atau alasan hukum. Setiap perubahan akan dipublikasikan di halaman ini dengan memperbarui tanggal &quot;Terakhir Diperbarui&quot;. Kami mendorong Anda untuk meninjau secara berkala.</p>
              </div>
            </section>

            <section id="kontak" className="scroll-mt-32">
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '10px', background: 'var(--primary)', color: '#FFFFFF', fontSize: '1rem' }}>7</span>
                Hubungi Kami
              </h2>
              <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p>Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait pengelolaan data pribadi Anda, silakan hubungi kami di:</p>
                <div style={{ background: '#1E293B', color: '#FFFFFF', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>Fovea Teknologi Legal Dept.</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95rem', color: '#94A3B8' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ width: '80px' }}>Email:</span>
                      <a href="mailto:hello@fovea.digital" style={{ color: '#FFFFFF', textDecoration: 'none' }}>hello@fovea.digital</a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ width: '80px' }}>WhatsApp:</span>
                      <a href="https://wa.me/628818204100" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', textDecoration: 'none' }}>+62 881-8204-100</a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ width: '80px' }}>Website:</span>
                      <Link href="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>www.fovea.digital</Link>
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
