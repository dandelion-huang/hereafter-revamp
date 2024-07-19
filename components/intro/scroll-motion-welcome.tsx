'use client';

import { forwardRef } from 'react';

import {
  type HTMLMotionProps,
  m,
  MotionValue,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';

import { IntroSection } from '@/components/intro/intro-section';
import { IntroWording } from '@/components/intro/intro-wording';

interface ScrollMotionWelcomeProps extends HTMLMotionProps<'div'> {
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
        <m.div
          style={{
            opacity: opacityWelcome,
            translateY: translateYWelcomeWording,
          }}
        >
          <div className="relative aspect-[369/320] w-[300px] sm:w-[400px]">
            <div className="absolute aspect-square w-full animate-pulse rounded-full bg-gradient-radial from-primary/50 via-secondary to-secondary/50 blur-2xl" />
            <Image
              alt="HereAfter logo"
              fill
              src="/assets/images/hereafter-logo.svg"
            />
          </div>
        </m.div>
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
export type { ScrollMotionWelcomeProps };
