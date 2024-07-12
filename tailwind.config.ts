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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
      keyframes: {
        'bounce-xy': {
          '0%': {
            transform: 'translate3d(-50px, 20px, 0)',
          },
          '100%': {
            transform: 'translate3d(50px, 0, 0)',
          },
        },
        'clock-face': {
          '0%': {
            transform: 'translate3d(0, -5vw, 0) rotate3d(1, 1, 1, -60deg)',
          },
          '100%': {
            transform: 'translate3d(0, 5vw, 0) rotate3d(1, 1, 1, 60deg)',
          },
        },
        'clock-hand': {
          '0%': {
            transform: 'rotate3d(0, 1, 0, 0deg)',
          },
          '100%': {
            transform: 'rotate3d(0, 1, 0, 360deg)',
          },
        },
        'earth-rotate': {
          '0%': {
            transform: 'translate3d(-100%, 0, 0)',
          },
          '100%': {
            transform: 'translate3d(100%, 0, 0)',
          },
        },
        'scroll-guide': {
          '0%': {
            transform: 'translate3d(0, -110%, 0)',
          },
          '100%': {
            transform: 'translate3d(0, 110%, 0)',
          },
        },
        sparkle: {
          '0%': {
            opacity: '1',
          },
          '33%': {
            opacity: '0',
          },
          '66%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0.3',
          },
        },
        shine: {
          '0%': {
            scale: '1',
          },
          '100%': {
            scale: '1.05',
          },
        },
      },
      animation: {
        'bounce-intro': 'bounce-xy 15s linear infinite alternate-reverse',
        'clock-face-intro': 'clock-face 10s ease-in-out infinite alternate',
        'scroll-guide': 'scroll-guide 1.5s linear infinite',
        'spin-intro': 'spin 20s linear infinite',
        'shine-intro': 'shine 1s ease-in infinite alternate-reverse',
      },
    },
  },
  plugins: [],
};
export default config;
