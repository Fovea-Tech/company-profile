export type Locale = 'id' | 'en';

export const locales: Locale[] = ['id', 'en'];

export const defaultLocale: Locale = 'id';

export const localePrefix = 'always'; // or 'never' or 'as-needed'

export const pathnames = {
  '/': '/',
  // Add other paths if needed for language-specific routing
};

export const localeDetection = false; // Disable automatic locale detection for manual control