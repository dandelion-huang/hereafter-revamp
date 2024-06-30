import { z } from 'zod';

import { THEMES as themes } from '@/constants/theme';

import { type Theme } from '@/components/context/theme';

export const themeSchema = z.enum(themes);

export function isValidTheme(theme: string): theme is Theme {
  return themeSchema.safeParse(theme).success;
}
