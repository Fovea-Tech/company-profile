export type Lang = 'id' | 'en';

export interface Translations {
  nav: {
    brand: string;
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
    trustMicrocopy: string;
  };
  services: {
    heading: string;
    subheading: string;
    saasTitle: string;
    saasDesc: string;
    webTitle: string;
    webDesc: string;
    maintenanceTitle: string;
    maintenanceDesc: string;
  };
  problems: {
    heading: string;
    items: string[];
    footer: string;
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
    brand: string;
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
