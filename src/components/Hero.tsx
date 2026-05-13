'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLang();
  const [line1, line2] = t.hero.title.split('\n');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-transparent overflow-hidden"
    >
      {/* Floating Abstract Background */}
      <div className="absolute top-[-10%] right-[-5%] w-[45rem] h-[45rem] bg-gradient-to-br from-accent/40 to-blue-500/30 filter blur-[120px] opacity-60 animate-morph" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[35rem] h-[35rem] bg-gradient-to-tr from-pink-400/30 to-purple-400/40 filter blur-[100px] opacity-50 animate-morph animation-delay-2000" />
      <div className="absolute top-[20%] left-[20%] w-[20rem] h-[20rem] bg-cyan-300/30 filter blur-[80px] opacity-40 animate-morph animation-delay-4000" />

      <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-[8vw] text-center max-w-4xl mx-auto">
        {/* Tagline pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-light text-accent text-xs font-medium rounded-full tracking-wide uppercase">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            {t.hero.tagline}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5 sm:mb-6"
        >
          <span className="text-gradient">{line1}</span>
          <br />
          <span className="text-fg">{line2}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-muted w-full md:w-[80%] lg:w-[80%] mx-auto leading-relaxed mb-8 sm:mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/#services"
            className="px-8 py-4 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center shadow-[0_8px_30px_rgb(139,92,246,0.3)]"
          >
            {t.hero.cta}
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-4 glass-card text-fg text-sm font-medium rounded-full hover:border-accent hover:text-accent hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
          >
            {t.hero.ctaSecondary}
          </Link>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80H1440V40C1200 0 960 80 720 40C480 0 240 80 0 40V80Z" fill="var(--surface)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;