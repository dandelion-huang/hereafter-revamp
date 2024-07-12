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

  return {
    ...defaultMetadata,
    title: t('title'),
    description: t('description'),
    openGraph: {
      ...defaultMetadata.openGraph,
      locale: t('openGraph.locale'),
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
  const fontClasses =
    locale === i18nConfig.defaultLocale
      ? cn(notoSans.variable, mPlusRounded1c.variable)
      : cn(notoSans.variable, notoSansTC.variable, mPlusRounded1c.variable);

  return (
    <html
      suppressHydrationWarning
      className={cn(theme, 'scroll-smooth bg-bgc')}
      dir={dir(locale)}
      lang={locale}
    >
      <body className={fontClasses}>
        <AppThemeProvider attribute="class" defaultTheme={theme}>
          {children}
        </AppThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
