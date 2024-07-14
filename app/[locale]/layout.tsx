import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { getCookie } from 'cookies-next';
import { dir } from 'i18next';
import { type Metadata } from 'next';

import { DEFAULT_THEME as defaultTheme } from '@/constants/theme';

import { mPlusRounded1c, notoSans, notoSansTC } from '@/app/fonts';
import { AppThemeProvider } from '@/components/context/theme';
import { useTranslation as serverSideTranslation } from '@/i18n';
import { i18nConfig, type Locale } from '@/i18n/config';
import defaultMetadata from '@/i18n/locales/en-US/metadata.json';
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
  const theme = getCookie('next-theme') ?? defaultTheme;
  const isTwLocale = locale === i18nConfig.locales[1];

  return (
    <html
      suppressHydrationWarning
      className={cn(theme, 'scroll-smooth bg-bgc')}
      dir={dir(locale)}
      lang={locale}
    >
      <body
        className={cn(
          notoSans.variable,
          mPlusRounded1c.variable,
          isTwLocale && notoSansTC.variable
        )}
      >
        <AppThemeProvider attribute="class" defaultTheme={theme}>
          {children}
        </AppThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
