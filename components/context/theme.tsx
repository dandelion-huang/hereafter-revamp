'use client';

import { useEffect } from 'react';

import { setCookie } from 'cookies-next';
import { ThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

import { COOKIE_NAME as cookieName } from '@/constants/theme';

import { useTheme } from '@/hooks/useTheme';
import { type Theme } from '@/types/theme';

type AppThemeProviderProps = Omit<ThemeProviderProps, 'themes' | 'theme'> & {
  theme?: Theme;
};

const AppThemeProvider = ({ children, ...props }: AppThemeProviderProps) => {
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
    if (theme) {
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
