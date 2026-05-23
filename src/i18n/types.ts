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
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
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
