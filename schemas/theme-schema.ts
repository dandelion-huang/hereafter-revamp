import { z } from 'zod';

import {
  DEFAULT_THEME as defaultTheme,
  THEMES as themes,
} from '@/constants/theme';

import { type Theme } from '@/types/theme';

export const themeSchema = z.enum(themes);

export function isValidTheme(theme: string): theme is Theme {
  return themeSchema.safeParse(theme).success;
}

export function parseTheme(theme: string) {
  const result = themeSchema.safeParse(theme);

  if (result.success) {
    return result.data;
  }

  return defaultTheme;
}
