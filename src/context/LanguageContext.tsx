'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'id' | 'en';

interface Translations {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    faq: string;
    contact: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  services: {
    heading: string;
    subheading: string;
    saasTitle: string;
    saasDesc: string;
    webTitle: string;
    webDesc: string;
  };
  portfolio: {
    heading: string;
    subheading: string;
    tabSaas: string;
    tabUpcoming: string;
    tabCustom: string;
    viewProduct: string;
    notifyMe: string;
    inDev: string;
    comingSoon: string;
    techStack: string;
    industry: string;
    emptyTitle: string;
    emptySubtitle: string;
    emptyCta: string;
  };
  portfolioDetail: {
    client: string;
    industry: string;
    techStack: string;
    progress: string;
    features: string;
    gallery: string;
    viewProduct: string;
    notifyMe: string;
    comingSoon: string;
    demoSoon: string;
    allPortfolio: string;
    prev: string;
    next: string;
    categoryLabel: { saas: string; upcoming: string; custom: string };
  };
  about: {
    heading: string;
    subheading: string;
    valuesHeading: string;
    teamHeading: string;
    values: { title: string; desc: string }[];
    team: { name: string; position: string }[];
  };
  contact: {
    heading: string;
    subheading: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    service: string;
    servicePlaceholder: string;
    optSaas: string;
    optWeb: string;
    optOther: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    directContact: string;
    socialMedia: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    ourServices: string;
    contactUs: string;
    rights: string;
  };
  faq: {
    heading: string;
    subheading: string;
    items: { q: string; a: string }[];
  };
}

const id: Translations = {
  nav: {
    home: 'Beranda',
    services: 'Layanan',
    portfolio: 'Portofolio',
    about: 'Tentang Kami',
    faq: 'FAQ',
    contact: 'Kontak',
  },
  hero: {
    tagline: 'SaaS · Custom Web',
    title: 'Bangun Masa Depan\nDigital Anda',
    subtitle:
      'Kami membangun produk SaaS inovatif dan website custom berkualitas tinggi yang mendorong pertumbuhan bisnis Anda.',
    cta: 'Lihat Layanan',
    ctaSecondary: 'Hubungi Kami',
  },
  services: {
    heading: 'Layanan Kami',
    subheading: 'Solusi digital berkualitas tinggi yang dirancang untuk kebutuhan bisnis modern.',
    saasTitle: 'SaaS Product Development',
    saasDesc:
      'Membangun produk software berbasis langganan yang scalable, secure, dan siap memenuhi kebutuhan bisnis modern Anda.',
    webTitle: 'Custom Website Development',
    webDesc:
      'Website sesuai kebutuhan klien dengan desain modern, performa tinggi, dan optimasi SEO maksimal.',
  },
  portfolio: {
    heading: 'Portofolio',
    subheading: 'Produk dan proyek yang telah kami bangun dengan penuh dedikasi.',
    tabSaas: 'SaaS Live',
    tabUpcoming: 'Segera Hadir',
    tabCustom: 'Proyek Custom',
    viewProduct: 'Lihat Produk',
    notifyMe: 'Beri Tahu Saya',
    inDev: 'Dalam Pengembangan',
    comingSoon: 'Segera Hadir',
    techStack: 'Tech Stack',
    industry: 'Industri',
    emptyTitle: 'Belum Ada Proyek',
    emptySubtitle: 'Kami sedang mempersiapkan proyek-proyek terbaik untuk kategori ini. Pantau terus!',
    emptyCta: 'Hubungi Kami',
  },
  portfolioDetail: {
    client: 'Klien',
    industry: 'Industri',
    techStack: 'Tech Stack',
    progress: 'Progress',
    features: 'Fitur Utama',
    gallery: 'Galeri',
    viewProduct: 'Lihat Produk',
    notifyMe: 'Beri Tahu Saya',
    comingSoon: 'Segera Hadir',
    demoSoon: 'Demo Segera',
    allPortfolio: 'Semua Portofolio',
    prev: 'Sebelumnya',
    next: 'Berikutnya',
    categoryLabel: { saas: 'Produk SaaS', upcoming: 'SaaS Mendatang', custom: 'Proyek Custom' },
  },
  about: {
    heading: 'Tentang Fovea Tech',
    subheading:
      'Kami adalah software house yang berfokus membangun produk SaaS inovatif dan layanan custom website berkualitas tinggi. Teknologi adalah alat kami untuk menciptakan masa depan yang lebih baik.',
    valuesHeading: 'Nilai-Nilai Kami',
    teamHeading: 'Tim Kami',
    values: [
      { title: 'Inovasi', desc: 'Selalu mencari solusi baru dan teknologi terkini.' },
      { title: 'Kualitas', desc: 'Standar tertinggi dalam setiap aspek pengembangan.' },
      { title: 'Kolaborasi', desc: 'Bekerja erat bersama klien untuk mencapai visi mereka.' },
      { title: 'Berkelanjutan', desc: 'Solusi yang relevan hari ini dan di masa depan.' },
    ],
    team: [
      { name: 'Andi Santoso', position: 'Founder & CEO' },
      { name: 'Budi Rahman', position: 'Lead Developer' },
      { name: 'Citra Dewi', position: 'UI/UX Designer' },
      { name: 'Dika Pratama', position: 'Project Manager' },
    ],
  },
  contact: {
    heading: 'Punya Ide? Mari Wujudkan.',
    subheading: 'Diskusikan proyek SaaS atau website custom Anda bersama kami.',
    name: 'Nama Lengkap',
    namePlaceholder: 'Nama lengkap Anda',
    email: 'Email',
    emailPlaceholder: 'email@contoh.com',
    service: 'Jenis Layanan',
    servicePlaceholder: 'Pilih jenis layanan',
    optSaas: 'SaaS Product Development',
    optWeb: 'Custom Website Development',
    optOther: 'Lainnya',
    message: 'Pesan',
    messagePlaceholder: 'Ceritakan kebutuhan Anda...',
    send: 'Kirim Pesan',
    sending: 'Mengirim...',
    success: 'Pesan Anda terkirim! Kami akan menghubungi Anda dalam 24 jam.',
    directContact: 'Kontak Langsung',
    socialMedia: 'Media Sosial',
  },
  footer: {
    tagline: 'Building the Future, One Product at a Time.',
    quickLinks: 'Navigasi',
    ourServices: 'Layanan',
    contactUs: 'Kontak',
    rights: 'Semua hak dilindungi.',
  },
  faq: {
    heading: 'FAQ',
    subheading: 'Pertanyaan yang sering diajukan seputar layanan kami.',
    items: [
      {
        q: 'Apakah Fovea Tech menyediakan layanan maintenance setelah website selesai dibuat?',
        a: 'Ya, kami menyediakan layanan maintenance dan dukungan teknis (SLA) pasca peluncuran untuk memastikan aplikasi atau website Anda tetap berjalan optimal dan aman.',
      },
      {
        q: 'Berapa lama waktu yang dibutuhkan untuk mengembangkan sebuah produk SaaS?',
        a: 'Waktu pengembangan bervariasi tergantung kompleksitas fitur. Untuk MVP (Minimum Viable Product) biasanya memakan waktu 2 hingga 4 bulan, sedangkan produk berskala besar bisa lebih dari 6 bulan.',
      },
      {
        q: 'Apakah saya bisa meminta custom integrasi dengan sistem yang sudah ada?',
        a: 'Tentu. Tim kami memiliki pengalaman luas dalam mengintegrasikan sistem baru dengan infrastruktur legacy, CRM, ERP, maupun payment gateway pihak ketiga.',
      },
      {
        q: 'Teknologi apa saja yang biasanya digunakan oleh Fovea Tech?',
        a: 'Kami menggunakan modern tech stack yang scalable dan reliable, seperti React/Next.js untuk frontend, serta Node.js, dan Go untuk backend, dipadukan dengan cloud infrastructure (AWS/GCP).',
      },
    ],
  },
};

const en: Translations = {
  nav: {
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
  },
  hero: {
    tagline: 'SaaS · Custom Web',
    title: 'Build Your Digital\nFuture',
    subtitle:
      'We craft innovative SaaS products and high-quality custom websites that drive your business forward.',
    cta: 'Our Services',
    ctaSecondary: 'Contact Us',
  },
  services: {
    heading: 'Our Services',
    subheading: 'High-quality digital solutions engineered for the demands of modern business.',
    saasTitle: 'SaaS Product Development',
    saasDesc:
      'We build scalable, secure subscription-based software products ready to meet the demands of your modern business.',
    webTitle: 'Custom Website Development',
    webDesc:
      'Tailored websites with modern design, high performance, and maximum SEO optimization.',
  },
  portfolio: {
    heading: 'Portfolio',
    subheading: 'Products and projects we have built with dedication and craft.',
    tabSaas: 'Live SaaS',
    tabUpcoming: 'Upcoming',
    tabCustom: 'Custom Projects',
    viewProduct: 'View Product',
    notifyMe: 'Notify Me',
    inDev: 'In Development',
    comingSoon: 'Coming Soon',
    techStack: 'Tech Stack',
    industry: 'Industry',
    emptyTitle: 'No Projects Yet',
    emptySubtitle: 'We are preparing the best projects for this category. Stay tuned!',
    emptyCta: 'Contact Us',
  },
  portfolioDetail: {
    client: 'Client',
    industry: 'Industry',
    techStack: 'Tech Stack',
    progress: 'Progress',
    features: 'Key Features',
    gallery: 'Gallery',
    viewProduct: 'View Product',
    notifyMe: 'Notify Me',
    comingSoon: 'Coming Soon',
    demoSoon: 'Demo Coming Soon',
    allPortfolio: 'All Portfolio',
    prev: 'Previous',
    next: 'Next',
    categoryLabel: { saas: 'SaaS Product', upcoming: 'Upcoming SaaS', custom: 'Custom Project' },
  },
  about: {
    heading: 'About Fovea Tech',
    subheading:
      'We are a software house focused on building innovative SaaS products and delivering high-quality custom web services. Technology is our tool for creating a better future.',
    valuesHeading: 'Our Values',
    teamHeading: 'Our Team',
    values: [
      { title: 'Innovation', desc: 'Always seeking new solutions and the latest technologies.' },
      { title: 'Quality', desc: 'The highest standards in every aspect of development.' },
      { title: 'Collaboration', desc: 'Working closely with clients to realize their vision.' },
      { title: 'Sustainability', desc: 'Solutions that are relevant today and in the future.' },
    ],
    team: [
      { name: 'Andi Santoso', position: 'Founder & CEO' },
      { name: 'Budi Rahman', position: 'Lead Developer' },
      { name: 'Citra Dewi', position: 'UI/UX Designer' },
      { name: 'Dika Pratama', position: 'Project Manager' },
    ],
  },
  contact: {
    heading: 'Have an Idea? Let\'s Build It.',
    subheading: 'Tell us about your SaaS or custom website project.',
    name: 'Full Name',
    namePlaceholder: 'Your full name',
    email: 'Email',
    emailPlaceholder: 'you@example.com',
    service: 'Service Type',
    servicePlaceholder: 'Select a service',
    optSaas: 'SaaS Product Development',
    optWeb: 'Custom Website Development',
    optOther: 'Other',
    message: 'Message',
    messagePlaceholder: 'Tell us about your needs...',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Your message was sent! We\'ll get back to you within 24 hours.',
    directContact: 'Direct Contact',
    socialMedia: 'Social Media',
  },
  footer: {
    tagline: 'Building the Future, One Product at a Time.',
    quickLinks: 'Navigation',
    ourServices: 'Services',
    contactUs: 'Contact',
    rights: 'All rights reserved.',
  },
  faq: {
    heading: 'FAQ',
    subheading: 'Frequently asked questions about our services.',
    items: [
      {
        q: 'Does Fovea Tech provide maintenance services after launch?',
        a: 'Yes, we provide ongoing maintenance and technical support (SLA) post-launch to ensure your application or website runs optimally and remains secure.',
      },
      {
        q: 'How long does it take to develop a SaaS product?',
        a: 'Development time varies depending on feature complexity. An MVP (Minimum Viable Product) usually takes 2 to 4 months, while large-scale products may take more than 6 months.',
      },
      {
        q: 'Can I request custom integration with my existing systems?',
        a: 'Absolutely. Our team has extensive experience integrating new systems with legacy infrastructure, CRMs, ERPs, and third-party payment gateways.',
      },
      {
        q: 'What technology stack does Fovea Tech typically use?',
        a: 'We use modern, scalable, and reliable tech stacks, such as React/Next.js for the frontend, and Node.js, and Go for the backend, paired with cloud infrastructure (AWS/GCP).',
      },
    ],
  },
};

const translations: Record<Lang, Translations> = { id, en };

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('id');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
