'use client';

export const GOOGLE_ADS_ID = 'AW-18160946006';
export const GOOGLE_ADS_CONVERSION_LABEL = 'AW-18160946006/VlFLCInT1qwcENaW6NND';

type GtagCommand =
  | ['js', Date]
  | ['config', string]
  | ['event', 'conversion', { send_to: string; transaction_id: string; new_customer?: boolean }];

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: GtagCommand) => void;
  }
}

interface TrackGoogleAdsConversionOptions {
  transactionId: string;
  newCustomer?: boolean;
}

export function trackGoogleAdsConversion({ transactionId, newCustomer = false }: TrackGoogleAdsConversionOptions) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[google-ads] gtag is not ready; conversion event skipped');
    }
    return;
  }

  window.gtag('event', 'conversion', {
    send_to: GOOGLE_ADS_CONVERSION_LABEL,
    transaction_id: transactionId,
    new_customer: newCustomer,
  });
}
