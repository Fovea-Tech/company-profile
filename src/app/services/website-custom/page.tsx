import ServiceTemplate from '@/components/ServiceTemplate';

export const metadata = {
  title: 'Jasa Website Custom | Fovea Teknologi: Web Company Profile, Landing Page, Katalog',
  description: 'Jasa pembuatan website custom profesional: company profile, landing page konversi tinggi, katalog produk, dan sistem booking. Desain eksklusif, SEO optimized, fast loading. Oleh Fovea Teknologi.',
  alternates: {
    canonical: 'https://www.fovea.digital/services/website-custom',
  },
  openGraph: {
    title: 'Jasa Website Custom Profesional | Fovea Teknologi',
    description: 'Jasa pembuatan website custom yang rapi, cepat, dan SEO-friendly. Mulai dari company profile, landing page, hingga katalog produk interaktif. Hubungi Fovea Teknologi.',
    url: 'https://www.fovea.digital/services/website-custom',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Jasa Website Custom Fovea Teknologi' }],
  },
};

export default function WebsiteCustomPage() {
  return (
    <ServiceTemplate
      title={{
        id: 'Jasa Pembuatan Website Custom yang Mencerminkan Kelas Bisnis Anda.',
        en: 'Custom Website Development that Reflects Your Business Class.',
      }}
      subtitle={{
        id: 'Dapatkan website eksklusif, aman, dan super cepat. Dirancang khusus dari nol tanpa template pasaran untuk merepresentasikan identitas brand Anda secara sempurna.',
        en: 'Get an exclusive, secure, and lightning-fast website. Designed from scratch without generic templates to perfectly represent your brand identity.',
      }}
      overview={{
        id: 'Kami percaya setiap bisnis itu unik, begitu pula websitenya. Kami tidak menggunakan WordPress theme standar. Kami merancang Company Profile, Landing Page, dan Katalog Produk dengan teknologi modern agar website Anda tidak hanya memukau secara visual, tapi juga mendominasi pencarian Google.',
        en: 'We believe every business is unique, and its website should be too. We don\'t use standard WordPress themes. We design Company Profiles, Landing Pages, and Product Catalogs with modern technology so your website isn\'t just visually stunning, but also dominates Google searches.',
      }}
      features={[
        {
          title: { id: 'Desain UI/UX Eksklusif (100% Original)', en: 'Exclusive UI/UX Design (100% Original)' },
          desc: { id: 'Tidak ada website lain yang kembar dengan milik Anda. Desain dirancang khusus sesuai karakter dan panduan visual brand Anda.', en: 'No other website will look identical to yours. Designs are custom-tailored to your brand\'s character and visual guidelines.' },
        },
        {
          title: { id: 'Super Cepat & Disukai Google (SEO)', en: 'Lightning Fast & Google Friendly (SEO)' },
          desc: { id: 'Website lelet membuat pelanggan kabur. Kami memastikan waktu loading di bawah 2 detik agar skor SEO Anda maksimal.', en: 'Slow websites drive customers away. We ensure load times are under 2 seconds to maximize your SEO score.' },
        },
        {
          title: { id: 'Tampil Sempurna di Semua Perangkat', en: 'Flawless on All Devices' },
          desc: { id: '80% pengunjung datang dari HP. Website Anda akan otomatis beradaptasi dengan mulus di layar mobile, tablet, maupun desktop.', en: '80% of visitors use mobile phones. Your website will seamlessly adapt to mobile, tablet, and desktop screens.' },
        },
        {
          title: { id: 'Mudah Dikelola (Sistem CMS Modern)', en: 'Easy to Manage (Modern CMS)' },
          desc: { id: 'Anda tidak perlu paham koding. Kami sediakan panel admin yang semudah menggunakan Microsoft Word untuk mengubah teks dan gambar.', en: 'No coding knowledge required. We provide an admin panel as easy to use as Microsoft Word for updating text and images.' },
        },
        {
          title: { id: 'Animasi yang Menghidupkan Website', en: 'Animations that Bring Your Site to Life' },
          desc: { id: 'Tinggalkan website yang kaku. Kami menyematkan interaksi dan animasi halus agar pengunjung betah berlama-lama.', en: 'Leave rigid websites behind. We embed smooth interactions and animations to keep visitors engaged.' },
        },
        {
          title: { id: 'Keamanan Tingkat Tinggi', en: 'High-Level Security' },
          desc: { id: 'Karena dibangun secara custom, website Anda jauh lebih kebal dari serangan hacker dan spam dibanding CMS tradisional.', en: 'Because it\'s custom-built, your website is far more immune to hacker attacks and spam compared to traditional CMS platforms.' },
        },
      ]}
      idealFor={[
        { id: 'Perusahaan skala menengah hingga besar (Company Profile)', en: 'Medium to large-scale enterprises (Company Profile)' },
        { id: 'Brand produk yang membutuhkan Landing Page konversi tinggi', en: 'Product brands needing high-conversion Landing Pages' },
        { id: 'Agensi Kreatif & Arsitek (Portfolio Web)', en: 'Creative Agencies & Architects (Portfolio Web)' },
        { id: 'Bisnis B2B (Katalog Produk & Solusi)', en: 'B2B Businesses (Product & Solution Catalogs)' },
      ]}
      process={[
        {
          title: { id: '1. Analisis Kebutuhan', en: '1. Requirement Analysis' },
          desc: { id: 'Kita mulai dengan mengobrol santai. Kami bedah apa tujuan bisnis Anda dan fitur apa yang sebenarnya dibutuhkan.', en: 'We start with a casual chat. We dissect your business goals and the exact features you actually need.' },
        },
        {
          title: { id: '2. Desain Visual (Mockup)', en: '2. Visual Design (Mockup)' },
          desc: { id: 'Tim desainer kami akan menggambar blueprint dan antarmuka (UI) website untuk Anda setujui sebelum mulai dikerjakan.', en: 'Our design team will sketch out the blueprint and website interface (UI) for your approval before coding starts.' },
        },
        {
          title: { id: '3. Pengembangan (Coding)', en: '3. Development (Coding)' },
          desc: { id: 'Desain disulap menjadi website interaktif yang responsif dan siap digunakan dengan teknologi Next.js terkini.', en: 'The design is magically transformed into an interactive, responsive website ready for use with the latest Next.js technology.' },
        },
        {
          title: { id: '4. Optimasi & Peluncuran', en: '4. Optimization & Launch' },
          desc: { id: 'Kami lakukan quality control, pengecekan kecepatan, optimasi SEO, lalu website Anda siap live dan menyapa dunia!', en: 'We perform quality control, speed checks, SEO optimization, and then your website is ready to go live and greet the world!' },
        },
      ]}
      deliverables={[
        { id: 'Website Live di Domain Anda', en: 'Live Website on Your Domain' },
        { id: 'Akses CMS Panel', en: 'CMS Panel Access' },
        { id: 'Laporan Performa (Lighthouse)', en: 'Performance Report (Lighthouse)' },
        { id: 'Figma Design', en: 'Figma Design' },
        { id: 'Source Code', en: 'Source Code' },
      ]}
      faqs={[
        {
          q: { id: 'Apa bedanya dengan website WordPress / Wix?', en: 'How is this different from WordPress / Wix websites?' },
          a: { id: 'Website custom dikoding secara khusus (hardcoded) menggunakan teknologi terkini. Hasilnya 10x lebih cepat, aman dari peretasan (karena bukan CMS tradisional), dan desainnya tidak kaku.', en: 'Custom websites are hardcoded using modern tech. The result is 10x faster, secure from hacks (unlike traditional CMS), and designs are unrestricted.' },
        },
        {
          q: { id: 'Apakah saya bisa mengubah konten (teks/gambar) sendiri?', en: 'Can I change the content (text/images) myself?' },
          a: { id: 'Tentu. Kami dapat mengintegrasikan Headless CMS yang sangat mudah digunakan, sehingga Anda dapat mengubah konten seperti menulis di Word, tanpa menyentuh kodingan.', en: 'Absolutely. We can integrate a highly user-friendly Headless CMS, letting you edit content like in MS Word without touching code.' },
        },
        {
          q: { id: 'Apakah domain dan hosting sudah termasuk?', en: 'Are domain and hosting included?' },
          a: { id: 'Kami dapat membantu Anda melakukan pendaftaran domain dan hosting (deployment) di cloud provider modern seperti Vercel. Biaya tahunan server bisa ditagihkan terpisah atau masuk ke paket.', en: 'We can assist with domain registration and hosting (deployment) on modern cloud providers like Vercel. Annual server costs can be billed separately or included in the package.' },
        },
      ]}
      pricing={[
        {
          title: { id: 'Landing Page', en: 'Landing Page' },
          price: 'Mulai dari Rp 3.000.000',
          features: [
            { id: '1 Halaman Responsif', en: '1 Responsive Page' },
            { id: 'Desain Premium', en: 'Premium Design' },
            { id: 'Optimasi SEO Dasar', en: 'Basic SEO Optimization' },
            { id: 'Formulir Kontak / Integrasi WA', en: 'Contact Form / WA Integration' },
          ],
          cta: { id: 'Konsultasi Sekarang', en: 'Consult Now' },
        },
        {
          title: { id: 'Company Profile', en: 'Company Profile' },
          price: 'Mulai dari Rp 5.000.000',
          isPopular: true,
          features: [
            { id: 'Hingga 5 Halaman', en: 'Up to 5 Pages' },
            { id: 'Desain Custom Eksklusif', en: 'Exclusive Custom Design' },
            { id: 'Animasi Interaktif', en: 'Interactive Animations' },
            { id: 'Optimasi Kecepatan Lanjutan', en: 'Advanced Speed Optimization' },
            { id: 'Integrasi Analitik', en: 'Analytics Integration' },
          ],
          cta: { id: 'Konsultasi Sekarang', en: 'Consult Now' },
        },
        {
          title: { id: 'Katalog Produk', en: 'Product Catalog' },
          price: 'Mulai dari Rp 8.000.000',
          features: [
            { id: 'Halaman Tak Terbatas (CMS)', en: 'Unlimited Pages (CMS)' },
            { id: 'Panel Akses Admin', en: 'Admin Access Panel' },
            { id: 'Fitur Pencarian & Filter', en: 'Search & Filter Features' },
            { id: 'Katalog Produk Dinamis', en: 'Dynamic Product Catalog' },
            { id: 'SEO Lanjutan', en: 'Advanced SEO' },
          ],
          cta: { id: 'Konsultasi Sekarang', en: 'Consult Now' },
        },
      ]}
    />
  );
}
