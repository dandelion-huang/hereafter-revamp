'use client';

import { forwardRef } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { type HTMLMotionProps, motion } from 'framer-motion';

import { cn } from '@/utils/misc';

const introSectionVariants = cva('w-full', {
  variants: {
    size: {
      tall: 'h-[300dvh]',
      short: 'h-[150dvh]',
    },
  },
  defaultVariants: {
    size: 'tall',
  },
});

export interface IntroSectionProps
  extends HTMLMotionProps<'section'>,
    VariantProps<typeof introSectionVariants> {
  children?: React.ReactNode;
  className?: string;
}

const IntroSection = forwardRef<HTMLElement, IntroSectionProps>(
  function IntroSection({ children, className, size }, ref) {
    return (
      <motion.section
        ref={ref}
        initial={{ visibility: 'hidden', zIndex: -10 }}
        transition={{ delay: 0, duration: 0 }}
        whileInView={{ visibility: 'visible', zIndex: 10 }}
        className={cn(introSectionVariants({ size, className }))}
      >
        {children}
      </motion.section>
    );
  }
);
IntroSection.displayName = 'IntroSection';

export { IntroSection };
