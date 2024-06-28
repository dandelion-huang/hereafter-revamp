import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { type NextRequest, NextResponse } from 'next/server';

import { i18nConfig, type Locale } from '@/i18n/config';
import {
  firstSegmentWithSlashRegex,
  isValidLocale as isSupportedLocale,
  validLocaleRegex,
} from '@/schemas/localeSchema';

const { cookieName, locales, defaultLocale } = i18nConfig;

function getLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(cookieName)?.value;

  if (cookieLocale && isSupportedLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguages = new Negotiator({
    headers: {
      'accept-language': request.headers.get('Accept-Language') ?? '',
    },
  }).languages();

  return matchLocale(acceptLanguages, locales, defaultLocale) as Locale; // skip type check
}

function getLocaleAndRedirectUrl(request: NextRequest): [Locale, string?] {
  const { pathname } = request.nextUrl;
  const pathnameLocale = pathname.split('/')[1];

  if (pathnameLocale === '') {
    const locale = getLocale(request);

    return [locale, `/${locale}`];
  }

  if (isSupportedLocale(pathnameLocale)) {
    return [pathnameLocale];
  }

  const supportedPathnameLocale = locales.find((locale) => {
    return locale.split('-').some(
      (l) =>
        l.localeCompare(pathnameLocale, undefined, {
          sensitivity: 'base',
        }) === 0
    );
  });

  if (supportedPathnameLocale) {
    return [
      supportedPathnameLocale,
      pathname.replace(
        firstSegmentWithSlashRegex,
        `/${supportedPathnameLocale}`
      ),
    ];
  }

  const isValidLocale = validLocaleRegex.test(pathnameLocale);
  const locale = getLocale(request);
  const redirectUrl = isValidLocale
    ? pathname.replace(firstSegmentWithSlashRegex, `/${locale}`)
    : `/${locale}${pathname}`;

  return [locale, redirectUrl];
}

export function middleware(request: NextRequest) {
  const [locale, localeRedirectUrl] = getLocaleAndRedirectUrl(request);

  if (localeRedirectUrl) {
    return NextResponse.redirect(new URL(localeRedirectUrl, request.url));
  }

  const cookieLocale = request.cookies.get(cookieName)?.value;

  if (cookieLocale !== locale) {
    const response = NextResponse.next();

    response.cookies.set(cookieName, locale, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });

    return response;
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
  ],
};
