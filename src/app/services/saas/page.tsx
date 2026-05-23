import ServiceTemplate from '@/components/ServiceTemplate';

export const metadata = {
  title: 'Produk SaaS Fovea | Aplikasi SaaS Siap Pakai untuk Bisnis Indonesia',
  description: 'Produk SaaS (Software as a Service) milik Fovea Technology yang siap pakai, terjangkau, dan selalu diperbarui. Cocok untuk freelancer, UMKM, dan digital agency di Indonesia.',
  alternates: {
    canonical: 'https://www.fovea.digital/services/saas',
  },
  openGraph: {
    title: 'Produk SaaS Fovea | Aplikasi SaaS Siap Pakai untuk Bisnis Indonesia',
    description: 'Produk SaaS milik Fovea Technology: siap pakai, harga langganan terjangkau, selalu diperbarui. Daftar sekarang dan tingkatkan produktivitas bisnis Anda.',
    url: 'https://www.fovea.digital/services/saas',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Produk SaaS Fovea Technology' }],
  },
};

export default function SaaSServicePage() {
  return (
    <ServiceTemplate
      title={{
        id: 'Produk SaaS Fovea',
        en: 'Fovea SaaS Products',
      }}
      subtitle={{
        id: 'Layanan SaaS (Software as a Service) milik Fovea yang dirancang untuk mempermudah pekerjaan sehari-hari Anda secara instan dan efisien.',
        en: 'Fovea\'s proprietary SaaS (Software as a Service) solutions designed to instantly and efficiently simplify your daily tasks.',
      }}
      overview={{
        id: 'Sebagai inovator di bidang teknologi, kami tidak hanya membuat software untuk klien, tetapi juga merancang dan mengembangkan lini produk SaaS (Software as a Service) kami sendiri. Produk-produk ini merupakan Hak Kekayaan Intelektual (IP) milik Fovea Technology yang dipublikasikan secara umum dan dapat digunakan oleh siapa saja, mulai dari pengguna individu, freelancer, hingga perusahaan berskala besar.',
        en: 'As technology innovators, we don\'t just build software for clients; we design and develop our own line of SaaS (Software as a Service) products. These products are the intellectual property of Fovea Technology, published publicly and available for anyone to use, from individuals and freelancers to large-scale enterprises.',
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
