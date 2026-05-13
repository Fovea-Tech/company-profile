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