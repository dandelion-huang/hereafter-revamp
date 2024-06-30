import {
  COOKIE_NAME,
  DEFAULT_NAMESPACE,
  FALLBACK_LANGUAGE,
  LANGUAGES,
  LOCALE_EMOJIS,
  NAMESPACES,
} from '@/constants/i18n';

export const i18nConfig = {
  defaultLocale: FALLBACK_LANGUAGE,
  locales: LANGUAGES,
  localesEmojis: LOCALE_EMOJIS,
  defaultNamespace: DEFAULT_NAMESPACE,
  cookieName: COOKIE_NAME,
} as const;

const { locales, defaultLocale, defaultNamespace } = i18nConfig;

export type Locale = (typeof locales)[number];
export type Namespace = (typeof NAMESPACES)[number];
export type Namespaces = Namespace | Namespace[];
export type TranslationOptions = { keyPrefix?: string };

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
