import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  darkMode: ['class'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: {
          DEFAULT: 'hsla(var(--background))',
          dark: 'hsla(var(--background-dark))',
          light: 'hsla(var(--background-light))',
          to: 'hsla(var(--background-to))',
        },
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsla(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsla(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsla(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          blue: 'hsla(var(--accent-blue))',
          green: 'hsla(var(--accent-green))',
        },
        action: {
          DEFAULT: 'hsla(var(--action))',
          foreground: 'hsl(var(--action-foreground))',
        },
        destructive: {
          DEFAULT: 'hsla(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        highlight: {
          DEFAULT: 'hsla(var(--highlight))',
          foreground: 'hsl(var(--highlight-foreground))',
        },
        muted: {
          DEFAULT: 'hsla(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        header: {
          DEFAULT: 'hsla(var(--header))',
          foreground: 'hsl(var(--header-foreground))',
        },
        nav: 'hsl(var(--nav))',
        popover: {
          DEFAULT: 'hsla(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'bounce-xy': {
          from: {
            transform: 'translate3d(-50px, 20px, 0)',
          },
          to: {
            transform: 'translate3d(50px, 0, 0)',
          },
        },
        'clock-face': {
          from: {
            transform: 'translate3d(0, -5vw, 0) rotate3d(1, 1, 1, -60deg)',
          },
          to: {
            transform: 'translate3d(0, 5vw, 0) rotate3d(1, 1, 1, 60deg)',
          },
        },
        'clock-hand': {
          from: {
            transform: 'rotate3d(0, 1, 0, 0deg)',
          },
          to: {
            transform: 'rotate3d(0, 1, 0, 360deg)',
          },
        },
        'earth-rotate': {
          from: {
            transform: 'translate3d(-100%, 0, 0)',
          },
          to: {
            transform: 'translate3d(100%, 0, 0)',
          },
        },
        'scroll-guide': {
          from: {
            transform: 'translate3d(0, -110%, 0)',
          },
          to: {
            transform: 'translate3d(0, 110%, 0)',
          },
        },
        sparkle: {
          '0%, 66%': {
            opacity: '1',
          },
          '33%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0.3',
          },
        },
        shine: {
          from: {
            scale: '1',
          },
          to: {
            scale: '1.05',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'bounce-intro': 'bounce-xy 15s linear infinite alternate-reverse',
        'clock-face-intro': 'clock-face 10s ease-in-out infinite alternate',
        'scroll-guide': 'scroll-guide 1.5s linear infinite',
        'spin-intro': 'spin 20s linear infinite',
        'shine-intro': 'shine 1s ease-in infinite alternate-reverse',
      },
    },
  },
  plugins: [require('tailwindcss-3d'), require('tailwindcss-animate')],
} satisfies Config;

export default config;
