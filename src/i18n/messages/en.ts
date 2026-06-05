import type { Translations } from '@/i18n/types';

const en: Translations = {
  nav: {
    brand: 'Fovea Teknologi',
    home: 'Home',
    whoWeAre: 'Who We Are',
    process: 'Work Process',
    services: 'Services',
    faq: 'FAQ',
    contact: 'Contact',
    portfolio: 'Portfolio',
  },
  hero: {
    tagline: 'TRUSTED INDONESIA SOFTWARE HOUSE',
    title: 'Custom Websites & Digital Systems Designed for Your Business Growth.',
    subtitle:
      'Leave rigid templates behind. Fovea Teknologi helps SMBs, startups, and enterprises build custom websites, booking systems, and SaaS apps that are fast-loading, secure, and ready to attract more customers.',
    cta: 'Consult Your Project (Free)',
    ctaSecondary: 'View Services',
    ctaWA: 'Chat via WhatsApp',
    trustMicrocopy: ['✅ Exclusive Design', '✅ SEO Optimized', '✅ Ongoing Tech Support'],
  },
  whoAreWe: {
    heading: 'WHO WE ARE',
    title: 'We Build Websites That Don\'t Just Look Good, They Deliver Results.',
    subtitle: 'Fovea Teknologi is more than a vendor; we are your digital partner. We ensure every line of code and design element serves one goal: accelerating your business growth.',
    titleCards: ['Built from Scratch (Custom)', 'Performance & SEO Friendly', 'Long-term Support'],
    descCards: [
      'Forget generic templates. We design exclusive UI/UX tailored to your brand identity and target market.',
      'Slow websites lose visitors. We optimize loading speeds so your website is loved by both users and search engines (Google).',
      'A website doesn\'t die after launch. We are ready to assist with maintenance, updates, and future feature development.',
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
    heading: 'OUR SERVICES',
    title: 'The Right Technology Solutions for Your Business Scale.',
    subtitle: 'From company profiles to internal operational systems, we are ready to make it happen.',
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
  featuredPortfolio: {
    heading: 'Portfolio',
    title: 'Our Work for Your Business Growth',
    subtitle: 'From landing pages to complex SaaS applications, we design digital solutions that prioritize performance, security, and aesthetics.',
    cta: 'View All Portfolios',
  },
  faq: {
    heading: 'FAQ',
    title: 'Questions that often arise before starting a project.',
    subtitle: 'Some things that are usually asked before working with Fovea Teknologi.',
    items: [
      {
        q: 'Does Fovea Teknologi provide maintenance services after launch?',
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
        q: 'What technology stack does Fovea Teknologi typically use?',
        a: 'We use modern, scalable, and reliable tech stacks, such as React/Next.js for the frontend, and Node.js, and Go for the backend, paired with cloud infrastructure (AWS/GCP).',
      },
    ],
  },
  contact: {
    heading: 'LET\'S COLLABORATE',
    title: 'Have a Brilliant Idea or Operational Issue? Let\'s Find the Solution Together.',
    subtitle: 'Don\'t let your ideas remain just plans. Tell us your needs, and our team will design the most efficient technology solution.',
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
    brand: 'Fovea Teknologi',
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
