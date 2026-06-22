'use client';

import Check from 'lucide-react/dist/esm/icons/check';
import Mail from 'lucide-react/dist/esm/icons/mail';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import Clock from 'lucide-react/dist/esm/icons/clock';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { trackGoogleAdsConversion } from '@/lib/googleAds';
import React from 'react';

interface ContactResponse {
  success: true;
  transactionId: string;
}

const TRUST_ITEMS = [
  {
    icon: Clock,
    label: 'Waktu Respons',
    value: '< 1 Jam',
    sub: 'Di jam kerja (Senin–Jumat)',
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: '+62 881-8204-100',
    sub: 'Chat langsung dengan tim kami',
    href: 'https://wa.me/628818204100',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@fovea.digital',
    sub: 'Untuk brief proyek & kolaborasi',
    href: 'mailto:hello@fovea.digital',
  },
];

export default function Contact() {
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
    setForm((prev) => ({ ...prev, [name]: value }));
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

      if (!res.ok) throw new Error('send_failed');

      const data = (await res.json()) as ContactResponse;

      trackGoogleAdsConversion({
        transactionId: data.transactionId,
        newCustomer: false,
      });

      setDone(true);
      setForm({ name: '', email: '', service: '', message: '' });
    } catch {
      setError('Pesan belum terkirim. Coba lagi atau hubungi kami langsung.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-padding panel-dark"
    >
      <div className="page-shell">

        {/* ── Centered header zone ── */}
        <header className="contact-header">
          <h2 id="contact-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, textWrap: 'balance' }}>
            Mulai Proyek Anda
          </h2>
          <p style={{ fontSize: '1.125rem' }}>
            Konsultasikan ide Anda secara gratis bersama tim teknis kami.
          </p>
        </header>

        {/* ── Two-column body ── */}
        <div className="contact-shell">

          {/* ── Left panel: trust signals ── */}
          <div className="contact-info-pane">
            <address className="contact-trust-list not-italic">
              {TRUST_ITEMS.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="contact-trust-icon" aria-hidden="true">
                      <Icon size={16} />
                    </span>
                    <span className="contact-trust-body">
                      <span className="contact-trust-label">{item.label}</span>
                      <span className="contact-trust-value">{item.value}</span>
                      <span className="contact-trust-sub">{item.sub}</span>
                    </span>
                    {item.href && (
                      <span className="contact-trust-arrow" aria-hidden="true">
                        <ArrowRight size={13} />
                      </span>
                    )}
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('https') ? '_blank' : undefined}
                    rel={item.href.startsWith('https') ? 'noreferrer' : undefined}
                    className="contact-trust-item contact-trust-item--link"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="contact-trust-item">
                    {content}
                  </div>
                );
              })}
            </address>
          </div>

          {/* ── Right panel: form ── */}
          <div className="contact-form-pane">
            {done ? (
              <div className="contact-success">
                <div className="contact-success-icon" aria-hidden="true">
                  <Check size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-4">
                  Pesan terkirim!
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-xs text-center">
                  Terima kasih! Tim kami akan segera menghubungi Anda melalui email atau WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setDone(false)}
                  className="btn-primary mt-6 text-sm cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <h3 className="contact-form-title">Ceritakan Proyek Anda</h3>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name" className="contact-label">
                      Nama Lengkap / Instansi
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe (Sekolah X)"
                      className="input-clean text-sm"
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email" className="contact-label">
                      Alamat Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="input-clean text-sm"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-service" className="contact-label">
                    Layanan yang Dibutuhkan
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="input-clean text-sm"
                    required
                  >
                    <option value="">Pilih layanan...</option>
                    <option value="saas">Sistem / Produk SaaS</option>
                    <option value="website">Website Custom</option>
                    <option value="maintenance">Website Maintenance</option>
                    <option value="other">Kebutuhan Bisnis Lainnya</option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message" className="contact-label">
                    Detail Proyek
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Ceritakan sedikit tentang kebutuhan website atau sistem yang ingin dibangun..."
                    className="input-clean text-sm min-h-28 resize-y"
                    required
                  />
                </div>

                {error && (
                  <div
                    role="alert"
                    className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700 border border-red-100"
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  id="contact-submit"
                  disabled={submitting}
                  className="btn-primary w-full text-sm font-semibold disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? 'Mengirim...' : 'Kirim Ringkasan Proyek'}
                </button>

                <p className="text-xs text-slate-500 text-center leading-relaxed">
                  Dengan mengirim form, Anda menyetujui kami menghubungi Anda untuk mendiskusikan proyek.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}