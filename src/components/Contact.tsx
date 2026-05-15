'use client';

import { Check } from 'lucide-react';
import { useState } from 'react';
import { useLang } from '@/context/LanguageContext';
import { trackGoogleAdsConversion } from '@/lib/googleAds';

interface ContactResponse {
  success: true;
  transactionId: string;
}

export default function Contact() {
  const { t, lang } = useLang();
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error('send_failed');
      }

      const data = (await res.json()) as ContactResponse;
      trackGoogleAdsConversion({ transactionId: data.transactionId, newCustomer: false });

      setDone(true);
      setForm({ name: '', email: '', service: '', message: '' });
    } catch {
      setError(
        lang === 'id'
          ? 'Pesan belum terkirim. Coba lagi atau hubungi kami langsung.'
          : 'Your message could not be sent. Please try again or contact us directly.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell">
      <div className="page-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div
          className="aurora-panel mesh-card rounded-3xl p-6 sm:p-8"
        >
          <span className="eyebrow">{t.nav.contact}</span>
          <h2 className="section-subtitle mt-5 aurora-text">{t.contact.heading}</h2>
          <p className="section-copy mt-4">{t.contact.subheading}</p>

          <div className="mt-8 space-y-4">
            {[
              ['Email', 'hello@fovea.digital'],
              ['Website', 'www.fovea.digital'],
              ['WhatsApp', '+62 821 2542 8320'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1.2rem] border border-white/10 bg-slate-950/24 p-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{label}</p>
                <p className="mt-2 text-base font-medium text-fg">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div
        >
          {done ? (
            <div className="aurora-panel rounded-3xl p-8 text-center sm:p-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-cyan-50 shadow-[0_10px_30px_rgba(89,243,255,0.12)]">
                <Check className="h-7 w-7" aria-hidden="true" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-fg">{lang === 'id' ? 'Pesan terkirim' : 'Message sent'}</h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted">{t.contact.success}</p>
              <button type="button" onClick={() => setDone(false)} className="aurora-button mt-6">
                {t.contact.send}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="aurora-panel rounded-3xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label-shell">
                    {t.contact.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="input-shell"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label-shell">
                    {t.contact.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className="input-shell"
                    required
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="service" className="label-shell">
                  {t.contact.service}
                </label>
                <select id="service" name="service" value={form.service} onChange={handleChange} className="input-shell" required>
                  <option value="">{t.contact.servicePlaceholder}</option>
                  <option value="saas">{t.contact.optSaas}</option>
                  <option value="website">{t.contact.optWeb}</option>
                  <option value="other">{t.contact.optOther}</option>
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="label-shell">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  className="input-shell min-h-36 resize-none"
                  required
                />
              </div>

              {error && <p className="mt-4 text-sm text-rose-300">{error}</p>}

              <button type="submit" disabled={submitting} className="aurora-button mt-6 w-full disabled:opacity-60">
                {submitting ? t.contact.sending : t.contact.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
