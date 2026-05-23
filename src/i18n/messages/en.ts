import type { Translations } from '@/i18n/types';

const en: Translations = {
  nav: {
    brand: 'Fovea Technology',
    home: 'Home',
    whoWeAre: 'Who We Are',
    process: 'Work Process',
    services: 'Services',
    faq: 'FAQ',
    contact: 'Contact',
  },
  hero: {
    tagline: 'INDONESIA SOFTWARE HOUSE SPECIALIZING IN WEBSITES',
    title: 'Sharp, Fast Websites Built to Scale',
    subtitle:
      'Fovea Technology helps brands, businesses, and startups build custom websites, booking systems, internal dashboards, and SaaS applications that are clean, fast, and ready to use.',
    cta: 'Free Consultation',
    ctaSecondary: 'View Services',
    trustMicrocopy: ['Fovea SaaS Products', 'Custom Website', 'Ongoing Maintenance'],
  },
  whoAreWe: {
    heading: 'About Fovea Technology',
    title: 'We build websites that not only look good, but also work clearly.',
    subtitle: 'Fovea Technology is here as a solution provider partner to design, build, and manage your business website so that it is always relevant, secure, and ready to be relied on for the long term.',
    titleCards: ['Website-first Approach', 'Clear Structure', 'Built for Growth'],
    descCards: [
      "We\'re on the website, so strategy, design, development, and maintenance are more focused and don't get bogged down in unnecessary detail.",
      "Each page is structured with a clear content flow, from the main role, supporting information, to the desired user action.",
      "The website doesn\'t stop at launch. We help maintain performance, security, and development to ensure it remains ready for growth.",
    ],
  },
  process: {
    heading: 'Work Process',
    title: 'From idea to live website, the process is made clear.',
    subtitle: 'We keep every step transparent, structured, and easy for clients to follow.',
    cards: [
      { title: 'Discovery', description: 'We understand your business needs with in-depth research to provide appropriate and relevant solutions.' },
      { title: 'Planning & Design', description: 'We design digital solutions with intuitive design and optimal user experience.' },
      { title: 'Development', description: 'The solution is built with modern technology, clean code, and reliable and secure performance.' },
      { title: 'Launch & Maintenance', description: 'The website/solution is ready to launch and we ensure it remains optimal with ongoing maintenance.' },
    ],
  },
  services: {
    heading: 'Services',
    title: 'Choose a website service according to your business needs.',
    subtitle: 'From subscribing to Fovea\'s ready-to-use SaaS products, to custom website development and system maintenance.',
    cards: [
      {
        title: 'SaaS Products',
        desc: 'Fovea\'s proprietary, ready-to-use SaaS applications designed specifically to instantly simplify users\' daily tasks.',
        bullets: [
          'Ready to Use',
          'Affordable Subscriptions',
          'Continuously Updated',
          'Community & Support',
        ],
        cta: 'Explore Products',
      },
      {
        title: 'Custom Website',
        desc: 'For more unique branding according to your needs.',
        bullets: [
          'Unlimited Pages',
          'Exclusive Design',
          'Advanced SEO',
          'Panel Access',
          'Tools Integration',
        ],
        cta: 'Register Custom Website',
      },
      {
        title: 'Maintenance',
        desc: 'For loyal customers who need regular support.',
        bullets: [
          'Content Updates',
          'Routine Backups',
          'Error Monitoring',
          'Monthly Reports',
        ],
        cta: 'Register Maintenance',
      },
    ]
  },
  faq: {
    heading: 'FAQ',
    title: 'Questions that often arise before starting a project.',
    subtitle: 'Some things that are usually asked before working with Fovea Technology.',
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
  contact: {
    heading: 'LET\'S TALK',
    title: 'Ready to build a cleaner, more scalable website?',
    subtitle: 'Tell us about your website needs, and we\'ll help direct you to the most appropriate service.',
    cta: 'Send Project Brief',
    form: {
      name: 'Full Name',
      email: 'Email',
      service: 'Service Type',
      message: 'Message',
      send: 'Send Message',
      optSaas: 'SaaS Product',
      optWeb: 'Custom Website',
      optOther: 'Other',
      placeholderEmail: 'you@example.com',
      placeholderName: 'Full Name',
      placeholderMessage: 'Tell us about your project, goals, and features..',
      placeholderService: 'Select a service',
    },
    success: 'Your message was sent! We\'ll get back to you within 24 hours.',
    directContact: 'Direct Contact',
    socialMedia: 'Social Media',
  },
  footer: {
    brand: 'Fovea Technology',
    title: [
      'Navigation',
      'Services',
      'Contact',
    ],
    tagline: 'Building the Future, One Product at a Time.',
    navigation: ['Home', 'Who We Are', 'Process', 'Services', 'FAQ', 'Contact'],
    services: ['SaaS Product', 'Custom Website', 'Maintenance'],
    copyright: 'All rights reserved.',
  },
};

export default en;
