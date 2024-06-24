import { M_PLUS_Rounded_1c, Noto_Sans, Noto_Sans_TC } from 'next/font/google';

export const notoSans = Noto_Sans({
  display: 'swap',
  preload: true,
  weight: ['100', '200', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans',
});

export const notoSansTC = Noto_Sans_TC({
  display: 'swap',
  preload: true,
  weight: ['100', '200', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans-tc',
});

export const mPlusRounded1c = M_PLUS_Rounded_1c({
  display: 'swap',
  preload: true,
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-m-plus-rounded-1c',
});
