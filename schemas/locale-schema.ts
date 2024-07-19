import { z } from 'zod';

import { i18nConfig } from '@/i18n/config';
import { type Locale } from '@/types/i18n';

const { locales, defaultLocale } = i18nConfig;

export const firstSegmentWithSlashRegex = /^\/([^/]+)/;
export const validLocaleRegex = /^[a-z]{2}(-[A-Z]{2})?$/; // ISO 3166
export const localeSchema = z.enum(locales);

export function isTwLocale(locale: Locale) {
  return locale === 'zh-TW';
}

export function isValidLocale(locale: string): locale is Locale {
  return localeSchema.safeParse(locale).success;
}

export function parseLocale(locale: string) {
  const result = localeSchema.safeParse(locale);

  if (result.success) {
    return result.data;
  }

  return defaultLocale;
}
