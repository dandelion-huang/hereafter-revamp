'use client';

import { I18nProvider as AriaI18nProvider } from 'react-aria-components';

type AppI18nProviderProps = {
  children: React.ReactNode;
  locale: string;
};

const AppI18nProvider = ({ children, locale }: AppI18nProviderProps) => {
  return <AriaI18nProvider locale={locale}>{children}</AriaI18nProvider>;
};

export { AppI18nProvider };
export type { AppI18nProviderProps };
