'use client';

import { forwardRef } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { type HTMLMotionProps, m } from 'framer-motion';

import { cn } from '@/utils/misc';

const introSectionVariants = cva('w-full', {
  variants: {
    duration: {
      long: 'h-[300svh]',
      short: 'h-[150svh]',
    },
  },
  defaultVariants: {
    duration: 'long',
  },
});

export interface IntroSectionProps
  extends HTMLMotionProps<'section'>,
    VariantProps<typeof introSectionVariants> {
  children?: React.ReactNode;
  className?: string;
}

const IntroSection = forwardRef<HTMLElement, IntroSectionProps>(
  function IntroSection({ children, className, duration }, ref) {
    return (
      <m.section
        ref={ref}
        className={cn(introSectionVariants({ duration, className }))}
        initial={{ visibility: 'hidden', zIndex: -10 }}
        transition={{ delay: 0, duration: 0 }}
        whileInView={{ visibility: 'visible', zIndex: 10 }}
      >
        {children}
      </m.section>
    );
  }
);
IntroSection.displayName = 'IntroSection';

export { IntroSection };
