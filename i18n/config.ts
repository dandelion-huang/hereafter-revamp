import {
  COOKIE_NAME as cookieName,
  FALLBACK_LANGUAGE as defaultLocale,
  DEFAULT_NAMESPACE as defaultNamespace,
  LANGUAGES as locales,
  LOCALE_EMOJIS as localesEmojis,
} from '@/constants/i18n';

import { type Locale, type Namespaces } from '@/types/i18n';

export const i18nConfig = {
  defaultLocale,
  locales,
  localesEmojis,
  defaultNamespace,
  cookieName,
} as const;

export function getOptions(
  lng: Locale = defaultLocale,
  ns: Namespaces = defaultNamespace
) {
  return {
    // debug: true,
    supportedLngs: locales,
    // preload: locales,
    fallbackLng: defaultLocale,
    lng,
    fallbackNS: defaultNamespace,
    defaultNS: defaultNamespace,
    ns,
  };
}
