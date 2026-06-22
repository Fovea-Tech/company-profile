import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'Fovea Teknologi | Digitalisasi Sekolah & Partner Web Agensi';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0F172A',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '80px',
            position: 'relative',
            background: 'linear-gradient(to bottom right, #0F172A 0%, #1E293B 100%)',
          }}
        >
          {/* Subtle grid pattern background */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: 'radial-gradient(circle at 2px 2px, #E2E8F0 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#3B82F6',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: 28,
              letterSpacing: '0.04em',
              padding: '12px 28px',
              borderRadius: '999px',
              marginBottom: 40,
              textTransform: 'uppercase',
            }}
          >
            Fovea Teknologi
          </div>

          <h1
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: '#F8FAFC',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              textAlign: 'center',
              margin: 0,
              padding: 0,
              maxWidth: 960,
            }}
          >
            Digitalisasi Pendidikan &<br />Partner Web Agensi
          </h1>

          <p
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: '#94A3B8',
              lineHeight: 1.5,
              textAlign: 'center',
              marginTop: 32,
              maxWidth: 860,
            }}
          >
            Sistem PPDB online skalabel, website sekolah premium, dan white-label technical partner untuk kreatif digital agency.
          </p>

          <div
            style={{
              position: 'absolute',
              bottom: 40,
              display: 'flex',
              alignItems: 'center',
              color: '#475569',
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: '0.1em',
            }}
          >
            FOVEA.DIGITAL
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
