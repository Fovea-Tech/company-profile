'use client';

export const GOOGLE_ADS_ID = 'AW-18160946006';
export const GOOGLE_ADS_CONVERSION_LABEL = 'AW-18160946006/VlFLCInT1qwcENaW6NND';

interface TrackGoogleAdsConversionOptions {
  transactionId: string;
  newCustomer?: boolean;
}

export function trackGoogleAdsConversion({ transactionId, newCustomer = false }: TrackGoogleAdsConversionOptions) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (typeof window === 'undefined' || typeof w.gtag !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[google-ads] gtag is not ready; conversion event skipped');
    }
    return;
  }

  w.gtag('event', 'conversion', {
    send_to: GOOGLE_ADS_CONVERSION_LABEL,
    transaction_id: transactionId,
    new_customer: newCustomer,
  });
}
