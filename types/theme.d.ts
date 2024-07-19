import { THEMES as themes } from '@/constants/theme';

export type Themes = typeof themes;
export type Theme = (typeof themes)[number];
