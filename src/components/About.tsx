'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

const valueIcons = [
  <svg key="0" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg key="1" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
  <svg key="2" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="3" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
];

const avatarColors = ['bg-slate-800', 'bg-blue-900/30', 'bg-emerald-900/30', 'bg-purple-900/30'];
const avatarInitials = ['AS', 'BR', 'CD', 'DP'];

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-surface z-10">
      <div className="absolute top-[-5%] left-[-10%] w-[40rem] h-[40rem] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full filter blur-[100px] opacity-60 animate-morph" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[35rem] h-[35rem] bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 rounded-full filter blur-[100px] opacity-60 animate-morph animation-delay-4000" />

      <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-[8vw] xl:px-[12vw] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16 w-full md:w-[70%] lg:w-[60%]"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">
            {t.about.heading}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-5 text-gradient">
            {t.about.heading}
          </h2>
          <p className="text-muted leading-relaxed text-sm sm:text-base">{t.about.subheading}</p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 sm:mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-5 sm:mb-6">
            {t.about.valuesHeading}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {t.about.values.map((value, i) => (
              <div
                key={i}
                className="glass-card p-5 sm:p-8 hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-light rounded-2xl flex items-center justify-center text-accent mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {valueIcons[i]}
                </div>
                <h4 className="font-semibold text-fg mb-1.5 text-xs sm:text-sm">{value.title}</h4>
                <p className="text-muted text-xs sm:text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-5 sm:mb-6">
            {t.about.teamHeading}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {t.about.team.map((member, i) => (
              <div
                key={i}
                className="glass-card p-5 sm:p-8 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-500"
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 ${avatarColors[i]} flex items-center justify-center mb-4 sm:mb-5 animate-morph`}
                  style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
                >
                  <span className="text-base sm:text-xl font-bold text-fg">{avatarInitials[i]}</span>
                </div>
                <h4 className="font-semibold text-fg text-xs sm:text-sm">{member.name}</h4>
                <p className="text-muted text-[11px] sm:text-xs mt-1">{member.position}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;