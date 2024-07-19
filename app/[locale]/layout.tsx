import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { getCookie } from 'cookies-next';
import { dir } from 'i18next';
import { type Metadata } from 'next';
import { headers } from 'next/headers';

import { mPlusRounded1c, notoSans, notoSansTC } from '@/app/fonts';
import { AppI18nProvider } from '@/components/context/i18n';
import { AppRouterProvider } from '@/components/context/router';
import { AppThemeProvider } from '@/components/context/theme';
import { useTranslation as serverSideTranslation } from '@/i18n';
import { i18nConfig } from '@/i18n/config';
import defaultMetadata from '@/i18n/locales/en-US/metadata.json';
import { isTwLocale } from '@/schemas/locale-schema';
import { parseTheme } from '@/schemas/theme-schema';
import { type Locale } from '@/types/i18n';
import { cn } from '@/utils/misc';

import '@/styles/global.css';
import '@/styles/tailwind.css';

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>): Promise<Metadata> {
  const { t } = await serverSideTranslation(locale, 'metadata');
  const { languages: _languages } = t('alternates', {
    returnObjects: true,
  }) satisfies {
    languages: Record<Locale, string>;
  };
  const { [locale]: canonical, ...languages } = _languages;

  return {
    ...defaultMetadata,
    metadataBase: new URL(t('metadataBase')),
    title: t('title'),
    description: t('description'),
    openGraph: {
      ...defaultMetadata.openGraph,
      images: {
        ...defaultMetadata.openGraph.images,
        alt: t('title'),
      },
      locale,
    },
    alternates: {
      canonical,
      languages,
    },
  };
}

export default function AppLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const route = headers().get('next-route');
  const cookieTheme = getCookie('next-theme');
  const theme =
    route === 'intro'
      ? 'dark'
      : route === 'nextlife'
        ? 'light'
        : parseTheme(cookieTheme ?? '');

  return (
    <html
      className={cn(theme, 'scroll-smooth')}
      dir={dir(locale)}
      lang={locale}
      suppressHydrationWarning
    >
      <body
        className={cn(
          notoSans.variable,
          mPlusRounded1c.variable,
          isTwLocale(locale) && notoSansTC.variable
        )}
      >
        <AppRouterProvider>
          <AppThemeProvider attribute="class" defaultTheme={theme}>
            <AppI18nProvider locale={locale}>{children}</AppI18nProvider>
          </AppThemeProvider>
        </AppRouterProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
