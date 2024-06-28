import { useTranslation as getServerSideTranslation } from '@/i18n';
import { type Locale } from '@/i18n/config';

export default async function Home({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) {
  const { t } = await getServerSideTranslation(locale);

  return (
    <main>
      <div className="py-24 text-center font-noto-sans">{t('HereAfter')}</div>
    </main>
  );
}
