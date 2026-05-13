'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

export default function FAQ() {
  const { t } = useLang();

  return (
    <section id="faq" className="py-16 sm:py-24 relative overflow-hidden bg-transparent z-10">
      {/* Wave Divider at Top */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[60px] md:h-[80px]" preserveAspectRatio="none">
          <path d="M0 80H1440V40C1200 0 960 80 720 40C480 0 240 80 0 40V80Z" fill="var(--surface)" />
        </svg>
      </div>

      {/* Decorative Blob */}
      <div className="absolute -left-40 top-20 w-[30rem] h-[30rem] bg-gradient-to-br from-accent/20 to-blue-300/20 rounded-full filter blur-[128px] opacity-40 animate-morph" />
      <div className="absolute -right-40 bottom-20 w-[30rem] h-[30rem] bg-gradient-to-tr from-pink-300/20 to-purple-500/20 rounded-full filter blur-[128px] opacity-40 animate-morph animation-delay-2000" />

      <div className="w-full px-5 sm:px-8 md:px-12 lg:w-[80%] lg:mx-auto lg:px-[4vw] xl:px-0 xl:max-w-3xl xl:mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">
            {t.faq.heading}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-gradient">
            {t.faq.subheading}
          </h2>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {t.faq.items.map((item, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-shadow duration-300 border-white/10"
            >
              <summary className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden outline-none">
                <span className="font-medium text-fg text-sm sm:text-base pr-3">{item.q}</span>
                <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full transition-all duration-300 group-open:rotate-180 group-open:bg-accent group-open:text-white group-open:shadow-lg bg-white/5 text-muted">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-2 text-muted leading-relaxed text-sm animate-[fadeIn_0.3s_ease-out]">
                {item.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
