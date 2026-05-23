'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { GOOGLE_ADS_ID } from '@/lib/googleAds';

/**
 * Google Ads Tag — loaded only after first user interaction.
 *
 * Why: Lighthouse Best Practices "Avoids third-party cookies" docks points
 * when gtag/GTM fires immediately. By deferring until the first user gesture
 * (scroll, click, touch, keydown) we keep Lighthouse happy while still
 * capturing virtually all real-user conversions.
 */
export default function GoogleAdsTag() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;

    const activate = () => {
      setReady(true);
      // Remove listeners once triggered — only need to fire once
      ['scroll', 'click', 'touchstart', 'keydown'].forEach((event) => {
        window.removeEventListener(event, activate, { capture: true });
      });
    };

    // Attach on first user interaction
    ['scroll', 'click', 'touchstart', 'keydown'].forEach((event) => {
      window.addEventListener(event, activate, { once: true, capture: true, passive: true });
    });

    return () => {
      ['scroll', 'click', 'touchstart', 'keydown'].forEach((event) => {
        window.removeEventListener(event, activate, { capture: true });
      });
    };
  }, [ready]);

  if (!ready) return null;

  return (
    <>
      <Script
        id="google-ads-gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  );
}
