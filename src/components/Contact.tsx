'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

const Contact = () => {
  const { t, lang } = useLang();
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('send_failed');
      setDone(true);
      setForm({ name: '', email: '', service: '', message: '' });
    } catch {
      setError(lang === 'id'
        ? 'Gagal mengirim pesan. Coba lagi atau hubungi kami langsung.'
        : 'Failed to send message. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const inp = 'w-full px-4 sm:px-5 py-3.5 sm:py-4 bg-white/5 border border-white/10 rounded-3xl text-sm text-fg placeholder-muted focus:outline-none focus:border-accent/50 focus:bg-white/10 focus:shadow-[0_8px_30px_rgb(139,92,246,0.1)] transition-all duration-300';
  const lbl = 'block text-[11px] font-semibold text-muted mb-2.5 uppercase tracking-wider pl-2';

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-purple-950/30 to-pink-950/30 -z-20" />
      <div className="absolute top-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-gradient-to-bl from-accent/20 to-blue-400/20 rounded-full filter blur-[120px] opacity-70 animate-morph -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-gradient-to-tr from-pink-300/20 to-purple-400/20 rounded-full filter blur-[120px] opacity-70 animate-morph animation-delay-2000 -z-10" />

      <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-[8vw] xl:px-[12vw] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">{t.nav.contact}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 sm:mb-5 text-gradient">
              {t.contact.heading}
            </h2>
            <p className="text-muted leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">{t.contact.subheading}</p>

            <address className="space-y-3 sm:space-y-4 not-italic">
              {[
                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Email', value: 'hello@fovea.digital' },
                { icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', label: 'Website', value: 'www.fovea.digital' },
                { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: 'WhatsApp', value: '+62 812 3456 7890' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted font-medium">{item.label}</p>
                    <p className="text-sm text-fg">{item.value}</p>
                  </div>
                </div>
              ))}
            </address>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {done ? (
              <div className="glass-card p-8 sm:p-12 text-center shadow-[0_15px_40px_rgb(0,0,0,0.3)]">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-fg mb-2">
                  {lang === 'id' ? 'Terkirim! 🎉' : 'Sent! 🎉'}
                </h3>
                <p className="text-muted text-sm">{t.contact.success}</p>
                <button
                  onClick={() => setDone(false)}
                  className="mt-6 sm:mt-8 px-8 py-3 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_rgb(139,92,246,0.2)]"
                >
                  {t.contact.send}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 glass-card p-6 sm:p-10 shadow-[0_15px_40px_rgb(0,0,0,0.3)]">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className={lbl}>{t.contact.name}</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder={t.contact.namePlaceholder} className={inp} />
                  </div>
                  <div>
                    <label htmlFor="email" className={lbl}>{t.contact.email}</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder={t.contact.emailPlaceholder} className={inp} />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className={lbl}>{t.contact.service}</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange} required className={inp}>
                    <option value="" className="bg-slate-900">{t.contact.servicePlaceholder}</option>
                    <option value="saas" className="bg-slate-900">{t.contact.optSaas}</option>
                    <option value="website" className="bg-slate-900">{t.contact.optWeb}</option>
                    <option value="other" className="bg-slate-900">{t.contact.optOther}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className={lbl}>{t.contact.message}</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} placeholder={t.contact.messagePlaceholder} className={`${inp} resize-none rounded-[2rem]`} />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-8 py-4 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 shadow-[0_8px_30px_rgb(139,92,246,0.3)] mt-2"
                >
                  {submitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      {t.contact.sending}
                    </>
                  ) : t.contact.send}
                </button>
                {error && (
                  <p className="text-sm text-red-400 text-center mt-1">{error}</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;