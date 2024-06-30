import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: 'rgba(var(--primary-rgb))',
        secondary: 'rgba(var(--secondary-rgb))',
        action: 'rgba(var(--action-rgb))',
        alert: 'rgba(var(--alert-rgb))',
        disabled: 'rgba(var(--disabled-rgb))',
        highlight: 'rgba(var(--highlight-rgb))',
        'accent-blue': 'rgba(var(--accent-blue-rgb))',
        'accent-green': 'rgba(var(--accent-green-rgb))',
        bgc: 'rgba(var(--background-rgb))',
        'bgc-to': 'rgba(var(--background-to-rgb))',
        'bgc-light': 'rgba(var(--background-light-rgb))',
        'bgc-light-to': 'rgba(var(--background-light-to-rgb))',
        'bgc-dark': 'rgba(var(--background-dark-rgb))',
        'bgc-nav': 'rgba(var(--background-nav-rgb))',
        header: 'rgba(var(--header-rgb))',
        'bgc-header-decor': 'rgba(var(--background-header-decoration-rgba))',
        'main-accent': 'rgba(var(--main-blue-rgba))',
        'main-primary': 'rgba(var(--main-primary-rgba))',
        'main-secondary': 'rgba(var(--main-secondary-rgba))',
        'main-title-accent': 'rgba(var(--main-title-accent-rgb))',
        'main-title-primary': 'rgba(var(--main-title-primary-rgb))',
        'main-title-secondary': 'rgba(var(--main-title-secondary-rgb))',
        'bgc-main': 'rgba(var(--background-main-rgba))',
        'bgc-main-blur': 'rgba(var(--background-main-blur-rgba))',
        'bgc-gooddeed-card': 'rgba(var(--background-gooddeed-card-rgba))',
        'bgc-gooddeed-card-btn':
          'rgba(var(--background-gooddeed-card-btn-rgba))',
        'bgc-member-card': 'rgba(var(--background-member-card-rgba))',
        'bc-avatar': 'rgba(var(--border-avatar-rgb))',
        'bgc-avatar-maker': 'rgba(var(--background-avatar-maker-rgba))',
        'bgc-avatar-maker-to': 'rgba(var(--background-avatar-maker-to-rgba))',
        'bgc-showcase-card': 'rgba(var(--background-showcase-card-rgba))',
        'comment-input': 'rgba(var(--comment-input-rgba))',
        'bgc-place': 'rgba(var(--background-place-rgba))',
        'bgc-place-inner': 'rgba(var(--background-place-inner-rgba))',
        'bc-place-card': 'rgba(var(--border-place-card-rgba))',
        'bgc-reborn-cart': 'rgba(var(--background-reborn-cart-rgba))',
        'bgc-reborn-cart-inner':
          'rgba(var(--background-reborn-cart-inner-rgba))',
      },
      fontFamily: {
        'noto-sans': [
          'var(--font-noto-sans)',
          'var(--font-noto-sans-tc)',
          ...fontFamily.sans,
        ],
        'm-plus': ['var(--font-m-plus-rounded-1c)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
