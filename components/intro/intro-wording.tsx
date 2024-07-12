'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { motion, type MotionValue } from 'framer-motion';

import { cn } from '@/utils/misc';

const introWordingVariants = cva('fixed w-full', {
  variants: {
    vertical: {
      default: 'top-[80%]',
      center: 'top-[80%] md:top-1/2 md:-translate-y-1/2',
      'lg:center': 'top-[80%] lg:top-1/2 lg:-translate-y-1/2',
    },
  },
  defaultVariants: {
    vertical: 'default',
  },
});

export interface IntroWordingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof introWordingVariants> {
  children?: React.ReactNode;
  className?: string;
  opacity: MotionValue<number>;
  translateY: MotionValue<string>;
}

const IntroWording = ({
  children,
  className,
  opacity,
  translateY,
  vertical,
}: IntroWordingProps) => {
  return (
    <div className={cn(introWordingVariants({ vertical, className }))}>
      <motion.div
        className="container whitespace-pre-line text-center font-semibold tracking-widest text-white sm:px-8 sm:text-lg md:text-left md:text-2xl lg:px-12 xl:text-4xl"
        style={{
          opacity,
          translateY,
        }}
      >
        <h2>{children}</h2>
      </motion.div>
    </div>
  );
};

export { IntroWording };