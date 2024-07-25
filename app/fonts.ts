import { M_PLUS_Rounded_1c, Noto_Sans } from 'next/font/google';

export const notoSans = Noto_Sans({
  display: 'swap',
  preload: true,
  weight: ['300', '500'],
  subsets: ['latin'],
  variable: '--font-noto-sans',
});

export const mPlusRounded1cMedium = M_PLUS_Rounded_1c({
  display: 'swap',
  preload: true,
  weight: ['500'],
  subsets: ['latin'],
  variable: '--font-m-plus-rounded-1c-medium',
});
