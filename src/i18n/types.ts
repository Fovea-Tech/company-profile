export type Lang = 'id' | 'en';

export interface Translations {
  nav: {
    brand: string;
    home: string;
    whoWeAre: string;
    process: string;
    services: string;
    faq: string;
    contact: string;
    portfolio: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    ctaWA: string;
    trustMicrocopy: Array<string>;
  };
  whoAreWe: {
    heading: string;
    title: string;
    subtitle: string;
    titleCards: string[];
    descCards: string[];
  };
  process: {
    heading: string;
    title: string;
    subtitle: string;
    cards: { title: string; description: string }[];
  };
  services: {
    heading: string;
    title: string;
    subtitle: string;
    cards: {
      title: string;
      desc: string;
      bullets: string[];
      cta: string;
    }[];
  };
  featuredPortfolio: {
    heading: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  Portfolio: {
    heading: string;
    title: string;
    subtitle: string;
    BottomCTA: string[];
    CardCTA: string;
  };
  PortfolioDetail: {
    challenge: string;
    solution: string;
    results: string;
    year: string;
    technology: string;
    client: string;
    info: string;
  };
  faq: {
    heading: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  contact: {
    heading: string;
    title: string;
    subtitle: string;
    cta: string;
    form: {
      name: string;
      email: string;
      service: string;
      message: string;
      send: string;
      optSaas: string;
      optWeb: string;
      optOther: string;
      placeholderEmail: string;
      placeholderName: string;
      placeholderMessage: string;
      placeholderService: string;
    };
    success: string;
    directContact: string;
    socialMedia: string;
  };
  footer: {
    brand: string;
    title: string[];
    tagline: string;
    copyright: string;
    navigation: string[];
    services: string[];
  };
}
