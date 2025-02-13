import { match as matchLocale } from '@formatjs/intl-localematcher';
import { getCookie, setCookie } from 'cookies-next';
import Negotiator from 'negotiator';
import { type NextRequest, NextResponse } from 'next/server';

import { i18nConfig } from '@/i18n/config';
import {
  firstSegmentWithSlashRegex,
  isValidLocale as isSupportedLocale,
  parseLocale,
  validLocaleRegex,
} from '@/schemas/locale-schema';
import { type Locale } from '@/types/i18n';

const { cookieName, locales, defaultLocale } = i18nConfig;

function getLocale(request: NextRequest) {
  const cookieLocale = getCookie(cookieName, { req: request });

  if (cookieLocale && isSupportedLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguages = new Negotiator({
    headers: {
      'accept-language': request.headers.get('Accept-Language') ?? '',
    },
  }).languages();

  return parseLocale(matchLocale(acceptLanguages, locales, defaultLocale));
}

function getLocaleAndRedirectUrl(
  request: NextRequest
): [Locale, string, string?] {
  const { pathname } = request.nextUrl;
  const pathnameLocale = pathname.split('/')[1];
  const pathnameRoute = pathname.split('/')[2] ?? 'intro';

  if (pathnameLocale === '') {
    const locale = getLocale(request);

    return [locale, pathnameRoute, `/${locale}`];
  }

  if (isSupportedLocale(pathnameLocale)) {
    return [pathnameLocale, pathnameRoute];
  }

  const isValidLocale = validLocaleRegex.test(pathnameLocale);

  const supportedPathnameLocale =
    isValidLocale &&
    locales.find((locale) => {
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
      pathnameRoute,
      pathname.replace(
        firstSegmentWithSlashRegex,
        `/${supportedPathnameLocale}`
      ),
    ];
  }

  const locale = getLocale(request);
  const redirectUrl = isValidLocale
    ? pathname.replace(firstSegmentWithSlashRegex, `/${locale}`)
    : `/${locale}${pathname}`;

  return [locale, pathnameRoute, redirectUrl];
}

export function middleware(request: NextRequest): NextResponse<unknown> {
  const [locale, pathnameRoute, localeRedirectUrl] =
    getLocaleAndRedirectUrl(request);

  if (localeRedirectUrl) {
    return NextResponse.redirect(new URL(localeRedirectUrl, request.url));
  }

  const response = NextResponse.next();

  response.headers.set('next-route', pathnameRoute);

  const cookieLocale = getCookie(cookieName, { req: request });

  if (cookieLocale !== locale) {
    setCookie(cookieName, locale, {
      req: request,
      res: response,
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });

    return response;
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)',
  ],
};
