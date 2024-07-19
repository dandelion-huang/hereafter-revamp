'use client';

import { useEffect } from 'react';

import { default as i18next } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next';

import { useCookie } from '@/hooks/use-cookie';
import { getOptions, i18nConfig } from '@/i18n/config';
import {
  type Locale,
  type Namespace,
  type Namespaces,
  type TranslationOptions,
} from '@/types/i18n';

const { cookieName, locales } = i18nConfig;

const isServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: Locale, namespace: Namespace) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'navigator'],
      lookupCookie: cookieName,
      lookupFromPathIndex: 0,
    },
    lng: undefined,
    preload: isServerSide ? locales : [],
  });

export function useTranslation(
  lng: Locale,
  ns?: Namespaces,
  options: TranslationOptions = {}
) {
  const translation = useTranslationOrg(ns, options);
  const { i18n } = translation;
  const [cookieLocale, setCookieLocale] = useCookie(cookieName);

  if (isServerSide && lng !== i18n.resolvedLanguage) {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    if (lng !== i18n.resolvedLanguage) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  useEffect(() => {
    if (cookieLocale !== lng) {
      setCookieLocale(lng);
    }
  }, [cookieLocale, lng, setCookieLocale]);

  return translation;
}
