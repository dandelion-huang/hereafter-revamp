import { z } from 'zod';

import { i18nConfig, type Locale } from '@/i18n/config';

const { locales, defaultLocale } = i18nConfig;

export const firstSegmentWithSlashRegex = /^\/([^/]+)/;
export const validLocaleRegex = /^[a-z]{2}(-[A-Z]{2})?$/; // ISO 3166
export const localeSchema = z.enum(locales);

export function isValidLocale(locale: string): locale is Locale {
  return localeSchema.safeParse(locale).success;
}

export function parseLocale(locale: string): Locale {
  const result = localeSchema.safeParse(locale);

  if (result.success) {
    return result.data;
  }

  return defaultLocale;
}
