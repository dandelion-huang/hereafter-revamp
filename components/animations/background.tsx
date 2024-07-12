import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/misc';

const backgroundVariants = cva(
  'fixed top-0 -z-50 min-h-dvh w-full bg-gradient-to-b from-bgc to-bgc-to',
  {
    variants: {
      theme: {
        light: 'light',
        dark: 'dark',
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }
);

export interface BackgroundProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof backgroundVariants> {
  children?: React.ReactNode;
  className?: string;
}

const Background = ({ children, className, theme }: BackgroundProps) => {
  return (
    <div
      aria-hidden="true"
      className={cn(backgroundVariants({ theme, className }))}
    >
      {children}
    </div>
  );
};

export { Background };
