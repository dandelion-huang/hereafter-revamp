const FALLBACK_LANGUAGE = 'en-US';
const LANGUAGES = [FALLBACK_LANGUAGE, 'zh-TW'] as const;
const LOCALE_EMOJIS = ['🇺🇸', '🇹🇼'] as const;
const DEFAULT_NAMESPACE = 'common';
const NAMESPACES = [DEFAULT_NAMESPACE, 'metadata'] as const;
const COOKIE_NAME = 'i18next';

export const i18nConfig = {
  defaultLocale: FALLBACK_LANGUAGE,
  locales: LANGUAGES,
  localesEmojis: LOCALE_EMOJIS,
  defaultNamespace: DEFAULT_NAMESPACE,
  cookieName: COOKIE_NAME,
} as const;

export type Locale = (typeof i18nConfig.locales)[number];
export type Namespace = (typeof NAMESPACES)[number];
export type Namespaces = Namespace | Namespace[];
export type TranslationOptions = { keyPrefix?: string };

export function getOptions(
  lng: Locale = i18nConfig.defaultLocale,
  ns: Namespaces = i18nConfig.defaultNamespace
) {
  return {
    // debug: true,
    supportedLngs: i18nConfig.locales,
    // preload: i18nConfig.locales,
    fallbackLng: i18nConfig.defaultLocale,
    lng,
    fallbackNS: i18nConfig.defaultNamespace,
    defaultNS: i18nConfig.defaultNamespace,
    ns,
  };
}
