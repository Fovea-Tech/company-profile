// ─── Types ───────────────────────────────────────────────────────────────────

export type PortfolioCategory = 'saas' | 'upcoming' | 'custom';

/** Translated fields per item */
export interface ItemI18n {
  description: string;
  longDescription: string;
  features: string[];
}

export interface BaseItem {
  id: number;
  name: string;
  /** Default (ID) — kept for backwards compat with portfolio grid */
  description: string;
  longDescription: string;
  screenshot: string;
  features: string[];
  year: number;
  /** Bilingual content */
  i18n: { id: ItemI18n; en: ItemI18n };
}

export interface SaasProduct extends BaseItem {
  techStack: string[];
  status: 'live';
  url: string;
  category: 'saas';
}

export interface UpcomingSaas extends BaseItem {
  status: 'in-development' | 'coming-soon';
  progress: number;
  notifyUrl: string;
  category: 'upcoming';
}

export interface CustomProject extends BaseItem {
  clientIndustry: string;
  url: string;
  client: string;
  category: 'custom';
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const saasProducts: SaasProduct[] = [

];

export const upcomingSaas: UpcomingSaas[] = [
  {
    id: 1,
    category: 'upcoming',
    name: 'ClientReport Mini',
    description: 'Laporan mingguan klien dalam 5 menit. Untuk freelancer dan agency kecil yang capek nulis update manual setiap minggu.',
    longDescription:
      'ClientReport Mini adalah tool sederhana yang membantu freelancer dan agency kecil membuat laporan mingguan klien secara cepat dan terstruktur. Cukup isi 5 field — apa yang selesai, sedang dikerjakan, kendala, next step, dan link file — lalu laporan siap di-copy ke WhatsApp, email, atau di-download sebagai PDF. Tidak perlu lagi nulis manual 30–90 menit per klien setiap minggunya.',
    screenshot: '/images/client-report-mini.webp',
    status: 'in-development',
    progress: 40,
    notifyUrl: '#',
    year: 2026,
    features: [
      'Login aman dengan email & password via NextAuth',
      'Manajemen multi-klien dan multi-project dalam satu dashboard',
      'Form update mingguan 5 field dengan auto-set periode Senin',
      'Generate laporan terformat otomatis dengan preview lengkap',
      'Copy ke clipboard — siap kirim ke WhatsApp, email, atau Notion',
      'Export PDF layout A4 langsung dari browser',
      'Histori laporan per project, bisa lihat ulang, edit, dan hapus',
    ],
    i18n: {
      id: {
        description: 'Laporan mingguan klien dalam 5 menit. Untuk freelancer dan agency kecil yang capek nulis update manual setiap minggu.',
        longDescription:
          'ClientReport Mini adalah tool sederhana yang membantu freelancer dan agency kecil membuat laporan mingguan klien secara cepat dan terstruktur. Cukup isi 5 field — apa yang selesai, sedang dikerjakan, kendala, next step, dan link file — lalu laporan siap di-copy ke WhatsApp, email, atau di-download sebagai PDF. Tidak perlu lagi nulis manual 30–90 menit per klien setiap minggunya.',
        features: [
          'Login aman dengan email & password via NextAuth',
          'Manajemen multi-klien dan multi-project dalam satu dashboard',
          'Form update mingguan 5 field dengan auto-set periode Senin',
          'Generate laporan terformat otomatis dengan preview lengkap',
          'Copy ke clipboard — siap kirim ke WhatsApp, email, atau Notion',
          'Export PDF layout A4 langsung dari browser',
          'Histori laporan per project, bisa lihat ulang, edit, dan hapus',
        ],
      },
      en: {
        description: 'Weekly client reports in 5 minutes. For freelancers and small agencies tired of writing manual updates every week.',
        longDescription:
          'ClientReport Mini is a simple tool that helps freelancers and small agencies create structured weekly client reports in minutes. Just fill in 5 fields — what was completed, in progress, blockers, next steps, and file links — then copy the report to WhatsApp, email, or download it as a PDF. No more spending 30–90 minutes per client writing updates manually every week.',
        features: [
          'Secure login with email & password via NextAuth',
          'Multi-client and multi-project management in one dashboard',
          '5-field weekly update form with auto-set Monday period',
          'Auto-generate formatted reports with full preview',
          'Copy to clipboard — ready to send via WhatsApp, email, or Notion',
          'A4 PDF export rendered directly in the browser',
          'Report history per project with view, edit, and delete support',
        ],
      },
    },
  },
];

export const customWebsiteProjects: CustomProject[] = [

];

// ─── Lookup helpers ───────────────────────────────────────────────────────────

type AnyItem = SaasProduct | UpcomingSaas | CustomProject;

export function getAllItems(): AnyItem[] {
  return [...saasProducts, ...upcomingSaas, ...customWebsiteProjects];
}

export function getItemByCategory(category: PortfolioCategory, id: number): AnyItem | undefined {
  switch (category) {
    case 'saas': return saasProducts.find((i) => i.id === id);
    case 'upcoming': return upcomingSaas.find((i) => i.id === id);
    case 'custom': return customWebsiteProjects.find((i) => i.id === id);
  }
}

export function getCategoryItems(category: PortfolioCategory): AnyItem[] {
  switch (category) {
    case 'saas': return saasProducts;
    case 'upcoming': return upcomingSaas;
    case 'custom': return customWebsiteProjects;
  }
}