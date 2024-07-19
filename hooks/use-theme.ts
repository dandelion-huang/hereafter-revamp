import { useTheme as useNextTheme } from 'next-themes';

import { isValidTheme } from '@/schemas/theme-schema';
import type { Theme } from '@/types/theme';

function useTheme() {
  const { theme: nextTheme, setTheme: setNextTheme } = useNextTheme();
  const theme = nextTheme && isValidTheme(nextTheme) ? nextTheme : undefined;
  const setTheme = (newTheme: Theme) => setNextTheme(newTheme);

  return {
    theme,
    setTheme,
  };
}

export { useTheme };
