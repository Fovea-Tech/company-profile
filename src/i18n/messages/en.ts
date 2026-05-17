import type { Translations } from '@/i18n/types';

const en: Translations = {
  nav: {
    brand: 'Fovea Technology',
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
  },
  hero: {
    tagline: 'SaaS · Custom Web',
    title: 'Website & Web Systems\nfor Businesses Ready to Level Up',
    subtitle:
      'Fovea Technology helps B2B businesses, service MSMEs, and local brands build ready-to-use websites, booking systems, internal dashboards, product catalogs, and SaaS applications.',
    cta: 'Free Consultation',
    ctaSecondary: 'View Solution Examples',
    trustMicrocopy: 'Custom website · SaaS MVP · Business dashboard · Monthly maintenance',
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
    maintenanceTitle: 'Maintenance & Support',
    maintenanceDesc:
      'Monthly maintenance services to ensure your website and systems are always optimal, fast, and up-to-date.',
  },
  problems: {
    heading: 'Is Your Business Still Experiencing This?',
    items: [
      'Potential customers only ask on WhatsApp but are not recorded properly.',
      'The website is just a display and does not generate leads.',
      'Orders, bookings, and customer data are still scattered in chats.',
      'The team still uses spreadsheets for critical processes.',
      'The business needs a custom system but is not ready to build a large application.',
    ],
    footer: 'Fovea helps transform these manual processes into simple web systems that can be used daily.',
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
    heading: 'About Fovea Technology',
    subheading:
      'We are a software house focused on building innovative SaaS products and delivering high-quality custom web services. Technology is our tool for creating a better future.',
    valuesHeading: 'Our Values',
    teamHeading: 'Our Team',
    values: [
      { title: 'Innovation', desc: 'Always seeking new solutions and the latest technologies.' },
      { title: 'Quality', desc: 'The highest standards in every aspect of development.' },
      { title: 'Collaboration', desc: 'Working closely with clients to realize their vision.' },
      { title: 'Sustainability', desc: 'Solutions that are relevant today and in the future.' },
    ]
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
    brand: 'Fovea Technology',
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
        q: 'Does Fovea Technology provide maintenance services after launch?',
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
        q: 'What technology stack does Fovea Technology typically use?',
        a: 'We use modern, scalable, and reliable tech stacks, such as React/Next.js for the frontend, and Node.js, and Go for the backend, paired with cloud infrastructure (AWS/GCP).',
      },
    ],
  },
};

export default en;
