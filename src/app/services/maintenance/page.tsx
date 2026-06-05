import ServiceTemplate from '@/components/ServiceTemplate';

export const metadata = {
  title: 'Jasa IT Maintenance Website & Aplikasi | Fovea Teknologi',
  description: 'Jasa pemeliharaan sistem IT, website, dan aplikasi SaaS secara berkala. Server monitoring 24/7, security patching, backup otomatis, bug fixing, dan laporan bulanan. Retainer mulai 6 bulan.',
  alternates: {
    canonical: 'https://www.fovea.digital/services/maintenance',
  },
  openGraph: {
    title: 'Jasa IT Maintenance & Support | Fovea Teknologi',
    description: 'Pastikan website dan aplikasi Anda selalu optimal dengan layanan maintenance bulanan Fovea Teknologi. Monitoring 24/7, keamanan terjamin, laporan transparan.',
    url: 'https://www.fovea.digital/services/maintenance',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Jasa IT Maintenance Fovea Teknologi' }],
  },
};

export default function MaintenancePage() {
  return (
    <ServiceTemplate
      title={{
        id: 'Jasa IT Maintenance: Amankan Website Anda Sebelum Terlambat.',
        en: 'IT Maintenance: Secure Your Website Before It\'s Too Late.',
      }}
      subtitle={{
        id: 'Jangan biarkan website lambat atau diretas menghancurkan reputasi bisnis Anda. Kami bantu kelola, monitor, dan amankan sistem Anda 24/7 agar Anda bisa fokus jualan.',
        en: 'Don\'t let a slow or hacked website destroy your business reputation. We help manage, monitor, and secure your systems 24/7 so you can focus on selling.',
      }}
      overview={{
        id: 'Teknologi terus berubah setiap hari. Aplikasi web yang dibiarkan tanpa perawatan ibarat mobil yang tidak pernah ganti oli—suatu saat pasti mogok. Layanan IT Maintenance bulanan kami hadir sebagai ekstensi dari tim IT internal Anda. Kami memantau server 24/7, melakukan backup otomatis harian, dan menutup celah keamanan hacker sebelum masalah terjadi.',
        en: 'Technology changes every day. Web applications left unmaintained are like cars that never get an oil change—they will inevitably break down. Our monthly IT Maintenance service acts as an extension of your in-house IT team. We monitor servers 24/7, perform automated daily backups, and patch security vulnerabilities before problems occur.',
      }}
      features={[
        {
          title: { id: 'Server Monitoring 24/7', en: '24/7 Server Monitoring' },
          desc: { id: 'Pemantauan uptime dan performa server secara proaktif (AWS/GCP/Vercel).', en: 'Proactive uptime and server performance monitoring (AWS/GCP/Vercel).' },
        },
        {
          title: { id: 'Security Patching', en: 'Security Patching' },
          desc: { id: 'Pembaruan framework, library, dan database untuk menutup celah keamanan.', en: 'Updating frameworks, libraries, and databases to patch security vulnerabilities.' },
        },
        {
          title: { id: 'Automated Backups', en: 'Automated Backups' },
          desc: { id: 'Backup data dan sistem secara berkala (harian/mingguan) ke penyimpanan cloud eksternal.', en: 'Routine data and system backups (daily/weekly) to external cloud storage.' },
        },
        {
          title: { id: 'Bug Fixing', en: 'Bug Fixing' },
          desc: { id: 'Penanganan cepat terhadap error atau masalah yang dilaporkan pengguna Anda.', en: 'Quick resolution of errors or issues reported by your users.' },
        },
        {
          title: { id: 'Performance Optimization', en: 'Performance Optimization' },
          desc: { id: 'Pembersihan database dan optimasi kode yang usang agar sistem tetap cepat.', en: 'Database cleanup and legacy code optimization to keep systems fast.' },
        },
        {
          title: { id: 'Monthly Reporting', en: 'Monthly Reporting' },
          desc: { id: 'Laporan rutin terkait kondisi server, log error, dan perbaikan yang telah dilakukan.', en: 'Routine reports on server health, error logs, and applied fixes.' },
        },
      ]}
      idealFor={[
        { id: 'Perusahaan yang tidak memiliki tim IT internal (No In-House IT)', en: 'Companies without an in-house IT team' },
        { id: 'Pemilik produk SaaS skala menengah-besar', en: 'Mid-to-large scale SaaS product owners' },
        { id: 'Sistem e-commerce / booking dengan traffic tinggi', en: 'High-traffic e-commerce / booking systems' },
        { id: 'Platform dengan regulasi data yang ketat', en: 'Platforms with strict data regulations' },
      ]}
      process={[
        {
          title: { id: '1. System Audit', en: '1. System Audit' },
          desc: { id: 'Mengevaluasi kondisi arsitektur, keamanan, dan kode saat ini.', en: 'Evaluating current architecture, security, and codebase.' },
        },
        {
          title: { id: '2. SLA Agreement', en: '2. SLA Agreement' },
          desc: { id: 'Penentuan waktu respon, jadwal backup, dan batasan dukungan.', en: 'Defining response times, backup schedules, and support limits.' },
        },
        {
          title: { id: '3. Monitoring Setup', en: '3. Monitoring Setup' },
          desc: { id: 'Pemasangan tools analitik dan sistem notifikasi error (seperti Sentry).', en: 'Installing analytics tools and error notification systems (like Sentry).' },
        },
        {
          title: { id: '4. Routine Maintenance', en: '4. Routine Maintenance' },
          desc: { id: 'Eksekusi pemeliharaan rutin harian/bulanan.', en: 'Execution of routine daily/monthly maintenance.' },
        },
      ]}
      deliverables={[
        { id: 'Uptime 99.9% Guarantee', en: '99.9% Uptime Guarantee' },
        { id: 'Laporan Bulanan', en: 'Monthly Reports' },
        { id: 'Log Backup', en: 'Backup Logs' },
        { id: 'Dukungan Prioritas', en: 'Priority Support' },
      ]}
      faqs={[
        {
          q: { id: 'Apakah layanan ini hanya untuk aplikasi yang dibangun Fovea?', en: 'Is this service only for apps built by Fovea?' },
          a: { id: 'Tidak. Kami juga menerima maintenance untuk sistem yang dikembangkan oleh pihak lain, selama teknologi yang digunakan sesuai dengan keahlian kami (React, Node.js, Next.js, Laravel, dsb). Kami akan melakukan audit sistem terlebih dahulu.', en: 'No. We also accept maintenance for systems developed by others, provided the tech stack matches our expertise (React, Node.js, Next.js, Laravel, etc). We will conduct a system audit first.' },
        },
        {
          q: { id: 'Bagaimana sistem pembayarannya?', en: 'How is the payment structured?' },
          a: { id: 'Layanan Maintenance kami ditagihkan secara berlangganan per bulan (Retainer) dengan kontrak minimal 6 bulan.', en: 'Our Maintenance services are billed on a monthly retainer basis with a minimum 6-month contract.' },
        },
        {
          q: { id: 'Apakah termasuk penambahan fitur baru?', en: 'Does this include adding new features?' },
          a: { id: 'Secara default, maintenance fokus pada pemeliharaan dan perbaikan. Penambahan fitur skala kecil (minor update) mungkin tercakup dalam SLA jam kerja, namun fitur besar (mayor update) akan dihitung sebagai proyek terpisah.', en: 'By default, maintenance focuses on upkeep and bug fixes. Minor feature updates might be covered within SLA hours, but major feature additions will be billed as a separate project.' },
        },
      ]}
    />
  );
}
