'use client';

import { forwardRef } from 'react';

import {
  type HTMLMotionProps,
  motion,
  MotionValue,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';

import { IntroSection } from '@/components/intro/intro-section';
import { IntroWording } from '@/components/intro/intro-wording';

export interface ScrollMotionWelcomeProps extends HTMLMotionProps<'div'> {
  slogan: string;
  scrollY: MotionValue<number>;
}

const ScrollMotionWelcome = forwardRef<
  HTMLDivElement,
  ScrollMotionWelcomeProps
>(function ScrollMotionWelcome({ slogan, scrollY }, ref) {
  const opacityWelcome = useTransform(scrollY, [0.2, 0.4], [0, 1]);
  const opacityWelcomeWording = useTransform(scrollY, [0, 0.2], [0, 1]);
  const translateYWelcomeWording = useTransform(
    scrollY,
    [0, 0.2],
    ['50px', '0px']
  );

  return (
    <IntroSection ref={ref} duration="short">
      <div className="fixed left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          style={{
            opacity: opacityWelcome,
            translateY: translateYWelcomeWording,
          }}
        >
          <div className="relative aspect-[369/320] w-[300px] before:absolute before:aspect-square before:w-full before:animate-pulse before:rounded-full before:bg-gradient-radial before:from-primary/50 before:via-secondary before:to-secondary/50 before:blur-2xl sm:w-[400px]">
            <Image
              src="/assets/images/hereafter-logo.svg"
              alt="HereAfter logo"
              fill
            />
          </div>
        </motion.div>
      </div>

      <IntroWording
        opacity={opacityWelcomeWording}
        translateY={translateYWelcomeWording}
      >
        {slogan}
      </IntroWording>
    </IntroSection>
  );
});
ScrollMotionWelcome.displayName = 'ScrollMotionWelcome';

export { ScrollMotionWelcome };
