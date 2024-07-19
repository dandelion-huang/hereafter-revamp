import { Intro as IntroWrapper } from '@/components/intro/intro';
import { useTranslation as getServerSideTranslation } from '@/i18n';
import { type Locale } from '@/types/i18n';

export default async function Intro({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) {
  const { t } = await getServerSideTranslation(locale, 'intro');

  return (
    <IntroWrapper
      appearanceSlogan={t('appearanceSlogan')}
      godSlogan={t('godSlogan')}
      placeSlogan={t('placeSlogan')}
      starSlogan={t('starSlogan')}
      timeSlogan={t('timeSlogan')}
      welcomeSlogan={t('welcomeSlogan')}
    />
  );
}
