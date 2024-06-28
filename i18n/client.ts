'use client';

import { useEffect } from 'react';

import { default as i18next } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useCookies } from 'react-cookie';
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next';

import {
  getOptions,
  i18nConfig,
  type Locale,
  type Namespace,
  type Namespaces,
  type TranslationOptions,
} from '@/i18n/config';

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
  const [cookies, setCookie] = useCookies([cookieName]);

  if (isServerSide && lng !== i18n.resolvedLanguage) {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    if (lng !== i18n.resolvedLanguage) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  useEffect(() => {
    if (cookies.i18next !== lng) {
      setCookie(cookieName, lng, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: true,
      });
    }
  }, [lng, cookies.i18next, setCookie]);

  return translation;
}
