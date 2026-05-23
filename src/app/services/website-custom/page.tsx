import ServiceTemplate from '@/components/ServiceTemplate';

export const metadata = {
  title: 'Jasa Website Custom | Fovea Technology: Web Company Profile, Landing Page, Katalog',
  description: 'Jasa pembuatan website custom profesional: company profile, landing page konversi tinggi, katalog produk, dan sistem booking. Desain eksklusif, SEO optimized, fast loading. Oleh Fovea Technology.',
  alternates: {
    canonical: 'https://www.fovea.digital/services/website-custom',
  },
  openGraph: {
    title: 'Jasa Website Custom Profesional | Fovea Technology',
    description: 'Jasa pembuatan website custom yang rapi, cepat, dan SEO-friendly. Mulai dari company profile, landing page, hingga katalog produk interaktif. Hubungi Fovea Technology.',
    url: 'https://www.fovea.digital/services/website-custom',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Jasa Website Custom Fovea Technology' }],
  },
};

export default function WebsiteCustomPage() {
  return (
    <ServiceTemplate
      title={{
        id: 'Jasa Pembuatan Website Custom',
        en: 'Custom Website Development',
      }}
      subtitle={{
        id: 'Website profesional, interaktif, dan berkinerja tinggi yang dirancang khusus untuk merepresentasikan identitas brand Anda.',
        en: 'Professional, interactive, and high-performance websites custom-designed to represent your brand identity.',
      }}
      overview={{
        id: 'Kami merancang dan mengembangkan website dari nol tanpa bergantung pada template pasaran (seperti WordPress theme standar). Fokus kami adalah pada performa super cepat (SEO friendly), desain yang memukau (UI/UX), dan keamanan yang tidak bisa ditembus. Cocok untuk Company Profile, Landing Page premium, hingga sistem katalog produk interaktif.',
        en: 'We design and develop websites from scratch without relying on generic templates. Our focus is on lightning-fast performance (SEO friendly), stunning design (UI/UX), and impenetrable security. Ideal for Company Profiles, premium Landing Pages, and interactive product catalogs.',
      }}
      features={[
        {
          title: { id: 'Custom UI/UX Design', en: 'Custom UI/UX Design' },
          desc: { id: 'Desain orisinal dan modern yang merefleksikan nilai unik bisnis Anda.', en: 'Original and modern designs reflecting your unique business values.' },
        },
        {
          title: { id: 'SEO Optimized', en: 'SEO Optimized' },
          desc: { id: 'Struktur web dan tag HTML yang dirancang untuk mudah ditemukan di Google (PageSpeed tinggi).', en: 'Web structure and HTML tags designed for high Google visibility (high PageSpeed).' },
        },
        {
          title: { id: 'Fully Responsive', en: 'Fully Responsive' },
          desc: { id: 'Tampilan sempurna dan interaktif di berbagai ukuran layar (HP, Tablet, Desktop).', en: 'Perfect and interactive displays across all screen sizes (Mobile, Tablet, Desktop).' },
        },
        {
          title: { id: 'Headless CMS', en: 'Headless CMS Integration' },
          desc: { id: 'Kemudahan mengedit konten web tanpa merusak kode, menggunakan platform seperti Sanity atau Strapi.', en: 'Easy web content editing without breaking code, using platforms like Sanity or Strapi.' },
        },
        {
          title: { id: 'Fast Loading', en: 'Fast Loading' },
          desc: { id: 'Optimasi gambar dan kode untuk waktu pemuatan website (load time) di bawah 2 detik.', en: 'Image and code optimization for website load times under 2 seconds.' },
        },
        {
          title: { id: 'Interactive Animations', en: 'Interactive Animations' },
          desc: { id: 'Animasi scroll dan mikro-interaksi yang memukau (menggunakan Framer Motion / GSAP).', en: 'Stunning scroll animations and micro-interactions (using Framer Motion / GSAP).' },
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
          title: { id: '1. Requirement Analysis', en: '1. Requirement Analysis' },
          desc: { id: 'Diskusi struktur halaman, konten, dan gaya desain (moodboard).', en: 'Discussing page structures, content, and design styles (moodboard).' },
        },
        {
          title: { id: '2. Design (Figma)', en: '2. Design (Figma)' },
          desc: { id: 'Pembuatan desain visual dan mockup resolusi tinggi untuk disetujui.', en: 'Creating visual designs and high-resolution mockups for approval.' },
        },
        {
          title: { id: '3. Development', en: '3. Development' },
          desc: { id: 'Implementasi desain menjadi kode website interaktif (Next.js / React).', en: 'Implementing designs into interactive website code (Next.js / React).' },
        },
        {
          title: { id: '4. Optimization & Go-Live', en: '4. Optimization & Go-Live' },
          desc: { id: 'SEO, optimasi performa, dan peluncuran website ke domain Anda.', en: 'SEO, performance optimization, and launching the website to your domain.' },
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
    />
  );
}
