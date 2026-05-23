'use client';

import { Check } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useLang } from '@/context/LanguageContext';
import { trackGoogleAdsConversion } from '@/lib/googleAds';

interface ContactResponse {
  success: true;
  transactionId: string;
}

export default function Contact() {
  const { t, lang } = useLang();

  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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

      trackGoogleAdsConversion({
        transactionId: data.transactionId,
        newCustomer: false,
      });

      setDone(true);
      setForm({
        name: '',
        email: '',
        service: '',
        message: '',
      });
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
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-shell overflow-visible py-24 sm:py-28 lg:py-32"
    >
      <div className="page-shell overflow-visible">
        <div className="rounded-[2rem] border-[3px] border-black bg-[#FFD84D] p-6 shadow-[14px_14px_0_#111111] sm:p-10 lg:p-14">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="inline-flex rounded-full border-[3px] border-black bg-white px-7 py-3 text-xs font-black uppercase tracking-wide text-black shadow-[6px_6px_0_#111111]">
                {t.contact.heading}
              </p>

              <div className="mt-10 space-y-6">
                <h2
                  id="contact-title"
                  className="text-balance text-4xl font-black leading-[1.12] tracking-[-0.05em] text-black sm:text-5xl lg:text-[52px]"
                >
                  {t.contact.title}
                </h2>

                <p className="max-w-xl text-base font-medium leading-8 text-black sm:text-lg">
                  {t.contact.subtitle}
                </p>
              </div>

              <address className="mt-9 space-y-3 not-italic">
                <p className="text-base font-black text-black">
                  Email:{' '}
                  <a
                    href="mailto:hello@fovea.digital"
                    className="hover:underline"
                  >
                    hello@fovea.digital
                  </a>
                </p>

                <p className="text-base font-black text-black">
                  WhatsApp:{' '}
                  <a
                    href="https://wa.me/628818204100"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    +62 881-8204-100
                  </a>
                </p>
              </address>
            </div>

            <div>
              {done ? (
                <div className="rounded-3xl border-[3px] border-black bg-white p-8 text-center shadow-[10px_10px_0_#111111] sm:p-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-[#6FFF9A] text-black shadow-[5px_5px_0_#111111]">
                    <Check className="h-7 w-7" aria-hidden="true" strokeWidth={3} />
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-black">
                    {lang === 'id' ? 'Pesan terkirim' : 'Message sent'}
                  </h3>

                  <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-7 text-black/70">
                    {t.contact.success}
                  </p>

                  <button
                    type="button"
                    onClick={() => setDone(false)}
                    className="mt-7 inline-flex min-h-14 items-center justify-center rounded-xl border-[3px] border-black bg-[#FFD84D] px-7 text-base font-black text-black shadow-[5px_5px_0_#111111] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_#111111] active:translate-y-1 active:shadow-[3px_3px_0_#111111]"
                  >
                    {t.contact.cta}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl border-[3px] border-black bg-white p-6 shadow-[10px_10px_0_#111111] sm:p-8"
                >
                  <div className="space-y-4">
                    <div className="grid gap-3 sm:grid-cols-[120px_1fr] sm:items-center">
                      <label
                        htmlFor="name"
                        className="text-sm font-black text-black sm:text-base"
                      >
                        {t.contact.form.name}
                      </label>

                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t.contact.form.placeholderName}
                        className="min-h-12 w-full rounded border border-black/30 bg-white px-4 text-sm font-bold text-black outline-none transition focus:border-black focus:ring-2 focus:ring-[#FFD84D]"
                        required
                      />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-[120px_1fr] sm:items-center">
                      <label
                        htmlFor="email"
                        className="text-sm font-black text-black sm:text-base"
                      >
                        {t.contact.form.email}
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t.contact.form.placeholderEmail}
                        className="min-h-12 w-full rounded border border-black/30 bg-white px-4 text-sm font-bold text-black outline-none transition focus:border-black focus:ring-2 focus:ring-[#FFD84D]"
                        required
                      />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-[120px_1fr] sm:items-center">
                      <label
                        htmlFor="service"
                        className="text-sm font-black text-black sm:text-base"
                      >
                        {t.contact.form.service}
                      </label>

                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="min-h-12 w-full rounded border border-black/30 bg-white px-4 text-sm font-bold text-black outline-none transition focus:border-black focus:ring-2 focus:ring-[#FFD84D]"
                        required
                      >
                        <option value="">
                          {t.contact.form.placeholderService}
                        </option>
                        <option value="saas">{t.contact.form.optSaas}</option>
                        <option value="website">{t.contact.form.optWeb}</option>
                        <option value="maintenance">
                          {lang === 'id' ? 'Maintenance' : 'Maintenance'}
                        </option>
                        <option value="other">{t.contact.form.optOther}</option>
                      </select>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-[120px_1fr] sm:items-start">
                      <label
                        htmlFor="message"
                        className="pt-3 text-sm font-black text-black sm:text-base"
                      >
                        {t.contact.form.message}
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder={
                          t.contact.form.placeholderMessage
                        }
                        className="min-h-20 w-full resize-none rounded border border-black/30 bg-white px-4 py-3 text-sm font-bold leading-6 text-black outline-none transition focus:border-black focus:ring-2 focus:ring-[#FFD84D]"
                        required
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="mt-4 rounded-lg border-[2px] border-black bg-[#FF7ABF] px-4 py-3 text-sm font-black text-black">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-5 min-h-16 w-full rounded-xl border-[3px] border-black bg-[#111111] px-6 text-base font-black text-white shadow-[6px_6px_0_#4D8DFF] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#4D8DFF] active:translate-y-1 active:shadow-[3px_3px_0_#4D8DFF] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting
                      ? t.contact.form.send
                      : t.contact.cta}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}