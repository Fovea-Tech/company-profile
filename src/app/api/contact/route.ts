import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,   // akun Gmail pengirim
    pass: process.env.GMAIL_PASS,   // App Password (bukan password Gmail biasa)
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body as {
      name: string;
      email: string;
      service: string;
      message: string;
    };

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const serviceLabel: Record<string, string> = {
      saas: 'SaaS Product Development',
      website: 'Custom Website Development',
      other: 'Other / Lainnya',
    };

    await transporter.sendMail({
      from: `"Fovea Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Fovea] Pesan baru dari ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0f1117; color: #e2e8f0; padding: 32px; border-radius: 16px;">
          <div style="margin-bottom: 24px;">
            <h1 style="font-size: 22px; font-weight: 700; color: #a78bfa; margin: 0 0 4px;">
              Pesan Baru — Fovea Tech
            </h1>
            <p style="color: #64748b; font-size: 13px; margin: 0;">Diterima dari form kontak website</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 110px;">Nama</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 14px;">
                <a href="mailto:${email}" style="color: #a78bfa; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Layanan</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9; font-size: 14px;">${serviceLabel[service] ?? service}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Pesan</p>
            <div style="background: #1e293b; border-radius: 12px; padding: 16px; font-size: 14px; color: #f1f5f9; line-height: 1.7; white-space: pre-wrap;">${message}</div>
          </div>

          <p style="margin-top: 32px; font-size: 12px; color: #475569; border-top: 1px solid #1e293b; padding-top: 16px;">
            Email ini dikirim otomatis dari form kontak <strong style="color: #a78bfa;">fovea.digital</strong>.<br/>
            Balas email ini untuk langsung membalas ke ${name}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact/route]', err);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
