'use client';

import { useEffect } from 'react';

import { setCookie } from 'cookies-next';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { type ThemeProviderProps as NextThemeProviderProps } from 'next-themes/dist/types';

import {
  THEMES as _themes,
  COOKIE_NAME as cookieName,
} from '@/constants/theme';

import { useTheme } from '@/hooks/useTheme';
import { type Theme, type Themes } from '@/types/theme';

type ThemeProviderProps = Omit<NextThemeProviderProps, 'themes'> & {
  themes: Themes;
};

const ThemeProvider = ({ themes, ...props }: ThemeProviderProps) => {
  return <NextThemeProvider themes={[...themes]} {...props} />;
};

type AppThemeProviderProps = Omit<ThemeProviderProps, 'themes' | 'theme'> & {
  theme?: Theme;
};

const AppThemeProvider = ({ children, ...props }: AppThemeProviderProps) => {
  return (
    <ThemeProvider enableColorScheme={false} themes={_themes} {...props}>
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
