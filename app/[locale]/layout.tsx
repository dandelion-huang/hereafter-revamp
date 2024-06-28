import { dir } from 'i18next';
import { type Metadata } from 'next';

import { mPlusRounded1c, notoSans, notoSansTC } from '@/app/fonts';
import { useTranslation as serverSideTranslation } from '@/i18n';
import { i18nConfig, type Locale } from '@/i18n/config';
import defaultMetadata from '@/i18n/locales/en-US/metadata.json';

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

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body
        className={`${notoSans.variable} ${notoSansTC.variable} ${mPlusRounded1c.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
