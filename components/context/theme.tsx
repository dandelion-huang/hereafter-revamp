'use client';

import { useEffect } from 'react';

import { setCookie } from 'cookies-next';
import { ThemeProvider, useTheme } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

import { COOKIE_NAME as cookieName, THEMES as themes } from '@/constants/theme';

import { isValidTheme } from '@/schemas/themeSchema';

export type Theme = (typeof themes)[number];

const AppThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ThemeProvider enableColorScheme={false} {...props}>
      <AppThemeProviderHelper />
      {children}
    </ThemeProvider>
  );
};

const AppThemeProviderHelper = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (isValidTheme(theme!)) {
      setCookie(cookieName, theme, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });
    }
  }, [theme]);

  return null;
};

export { AppThemeProvider };
