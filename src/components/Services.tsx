'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    features: ['Scalable architecture', 'Multi-tenant ready', 'Analytics & billing', 'API-first design'],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Modern design', 'SEO optimized', 'High performance', 'Mobile first'],
  },
];

const Services = () => {
  const { t } = useLang();

  const serviceData = [
    { title: t.services.saasTitle, desc: t.services.saasDesc, features: services[0].features, icon: services[0].icon },
    { title: t.services.webTitle, desc: t.services.webDesc, features: services[1].features, icon: services[1].icon },
  ];

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-surface z-10">

      <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-[8vw] xl:px-[12vw] mx-auto mt-6 sm:mt-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16 w-full md:w-[60%] lg:w-[50%]"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">
            {t.services.heading}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 text-gradient">
            {t.services.subheading}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {serviceData.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 sm:p-10 hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-accent/10 to-pink-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-tr from-accent/20 to-blue-400/20 rounded-full flex items-center justify-center text-accent mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-fg mb-3">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5 sm:mb-6">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;