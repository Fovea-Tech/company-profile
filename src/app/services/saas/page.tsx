import ServiceTemplate from '@/components/ServiceTemplate';

export const metadata = {
  title: 'Produk SaaS Fovea | Aplikasi SaaS Siap Pakai untuk Bisnis Indonesia',
  description: 'Produk SaaS (Software as a Service) milik Fovea Teknologi yang siap pakai, terjangkau, dan selalu diperbarui. Cocok untuk freelancer, UMKM, dan digital agency di Indonesia.',
  alternates: {
    canonical: 'https://www.fovea.digital/services/saas',
  },
  openGraph: {
    title: 'Produk SaaS Fovea | Aplikasi SaaS Siap Pakai untuk Bisnis Indonesia',
    description: 'Produk SaaS milik Fovea Teknologi: siap pakai, harga langganan terjangkau, selalu diperbarui. Daftar sekarang dan tingkatkan produktivitas bisnis Anda.',
    url: 'https://www.fovea.digital/services/saas',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Produk SaaS Fovea Teknologi' }],
  },
};

export default function SaaSServicePage() {
  return (
    <ServiceTemplate
      title={{
        id: 'Aplikasi SaaS Siap Pakai untuk Percepat Bisnis Anda.',
        en: 'Ready-to-Use SaaS Apps to Accelerate Your Business.',
      }}
      subtitle={{
        id: 'Hemat waktu dan biaya. Tidak perlu membangun sistem dari nol. Gunakan produk software berlangganan kami yang dirancang khusus untuk menyelesaikan masalah operasional Anda secara instan.',
        en: 'Save time and money. No need to build systems from scratch. Use our subscription-based software products specifically designed to solve your operational issues instantly.',
      }}
      overview={{
        id: 'Membangun sistem IT sendiri membutuhkan biaya ratusan juta dan waktu berbulan-bulan. Solusinya? Gunakan lini produk SaaS unggulan dari Fovea Teknologi. Anda cukup berlangganan dengan biaya sangat terjangkau, dan langsung nikmati aplikasi canggih yang selalu di-update secara otomatis tanpa perlu pusing memikirkan biaya server atau maintenance.',
        en: 'Building your own IT system requires thousands of dollars and months of time. The solution? Use Fovea Teknologi\'s flagship SaaS product line. Simply subscribe at a very affordable rate, and instantly enjoy advanced applications that are automatically updated without worrying about server costs or maintenance.',
      }}
      features={[
        {
          title: { id: 'Siap Pakai (Ready to Use)', en: 'Ready to Use' },
          desc: { id: 'Aplikasi bisa langsung digunakan tanpa proses setup atau development berbulan-bulan.', en: 'Applications can be used immediately without months of setup or development.' },
        },
        {
          title: { id: 'Selalu Diperbarui (Continuous Updates)', en: 'Continuous Updates' },
          desc: { id: 'Mendapatkan update fitur baru dan perbaikan bug secara otomatis dan gratis.', en: 'Receive new features and bug fixes automatically and for free.' },
        },
        {
          title: { id: 'Infrastruktur Tahan Banting', en: 'Robust Infrastructure' },
          desc: { id: 'Dibangun di atas cloud modern yang cepat, aman, dan bisa melayani ribuan user sekaligus.', en: 'Built on modern cloud infrastructure that is fast, secure, and can serve thousands of users simultaneously.' },
        },
        {
          title: { id: 'Harga Terjangkau (Subscription)', en: 'Affordable Subscription' },
          desc: { id: 'Sistem pembayaran langganan (bulanan/tahunan) yang jauh lebih hemat dibanding membuat aplikasi custom.', en: 'Monthly or annual subscription models that are far more cost-effective than building custom applications.' },
        },
        {
          title: { id: 'Keamanan Data Terjamin', en: 'Guaranteed Data Security' },
          desc: { id: 'Data pengguna diamankan dengan standar enkripsi industri terkini.', en: 'User data is secured with the latest industry standard encryption.' },
        },
        {
          title: { id: 'Komunitas & Dukungan Pelanggan', en: 'Community & Support' },
          desc: { id: 'Dukungan penuh dari tim Fovea dan akses ke komunitas pengguna yang solid.', en: 'Full support from the Fovea team and access to a solid user community.' },
        },
      ]}
      idealFor={[
        { id: 'Freelancer & Pekerja Mandiri yang butuh alat bantu operasional cepat', en: 'Freelancers & Independent Workers needing fast operational tools' },
        { id: 'UMKM yang ingin mendigitalisasi bisnis tanpa biaya besar', en: 'SMEs looking to digitalize without huge upfront costs' },
        { id: 'Digital Agency untuk manajemen proyek atau laporan klien', en: 'Digital Agencies for project management or client reporting' },
        { id: 'Perusahaan skala besar yang butuh solusi instan untuk tim spesifik', en: 'Large enterprises needing instant solutions for specific teams' },
      ]}
      process={[
        {
          title: { id: '1. Eksplorasi & Registrasi', en: '1. Explore & Register' },
          desc: { id: 'Kunjungi situs produk SaaS kami dan buat akun baru dengan mudah.', en: 'Visit our SaaS product site and create a new account easily.' },
        },
        {
          title: { id: '2. Pilih Paket Langganan', en: '2. Choose a Plan' },
          desc: { id: 'Pilih paket bulanan, tahunan, atau gratis (freemium) sesuai kebutuhan Anda.', en: 'Select a monthly, annual, or free (freemium) plan according to your needs.' },
        },
        {
          title: { id: '3. Langsung Gunakan', en: '3. Start Using Instantly' },
          desc: { id: 'Nikmati fitur lengkap untuk menyelesaikan pekerjaan Anda lebih cepat.', en: 'Enjoy the full features to complete your work faster.' },
        },
        {
          title: { id: '4. Beri Feedback', en: '4. Give Feedback' },
          desc: { id: 'Sampaikan saran fitur baru kepada kami, dan nikmati update berikutnya!', en: 'Suggest new features to us, and enjoy them in the next update!' },
        },
      ]}
      deliverables={[
        { id: 'Akses Penuh Aplikasi (24/7)', en: 'Full Application Access (24/7)' },
        { id: 'Layanan Bantuan Pelanggan (CS)', en: 'Customer Support Service' },
        { id: 'Penyimpanan Data di Cloud', en: 'Cloud Data Storage' },
        { id: 'Pembaruan Sistem Rutin', en: 'Routine System Updates' },
      ]}
      faqs={[
        {
          q: { id: 'Apakah saya bisa melakukan request fitur pada produk SaaS Fovea?', en: 'Can I request features for Fovea\'s SaaS products?' },
          a: { id: 'Ya, kami sangat terbuka dengan feedback pengguna. Saran fitur yang paling banyak diminta akan kami rilis pada update berikutnya.', en: 'Yes, we are very open to user feedback. The most requested features will be released in subsequent updates.' },
        },
        {
          q: { id: 'Bagaimana sistem pembayarannya?', en: 'How does the payment system work?' },
          a: { id: 'Setiap produk SaaS kami biasanya menyediakan paket berlangganan bulanan atau tahunan (subscription), dan beberapa menyediakan skema Pay-As-You-Go atau Freemium.', en: 'Each of our SaaS products typically offers monthly or annual subscriptions, and some provide Pay-As-You-Go or Freemium schemes.' },
        },
        {
          q: { id: 'Apakah data saya aman di platform SaaS Fovea?', en: 'Is my data secure on Fovea\'s SaaS platforms?' },
          a: { id: 'Sangat aman. Produk kami dibangun di atas layanan cloud kelas enterprise dengan sistem keamanan ketat dan pencadangan (backup) rutin.', en: 'Extremely secure. Our products are built on enterprise-grade cloud services with strict security systems and regular backups.' },
        },
      ]}
    />
  );
}
