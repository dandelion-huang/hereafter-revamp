'use client';

import { useRef } from 'react';

import { useScroll } from 'framer-motion';

import { IntroBackground } from '@/components/intro/intro-background';
import { ScrollMotionAppearance } from '@/components/intro/scroll-motion-appearance';
import { ScrollMotionGod } from '@/components/intro/scroll-motion-god';
import { ScrollMotionPlace } from '@/components/intro/scroll-motion-place';
import { ScrollMotionStar } from '@/components/intro/scroll-motion-star';
import { ScrollMotionTime } from '@/components/intro/scroll-motion-time';
import { ScrollMotionWelcome } from '@/components/intro/scroll-motion-welcome';
import { ScrollStatus } from '@/components/intro/srcoll-status';

const Intro = ({
  starSlogan,
  godSlogan,
  timeSlogan,
  placeSlogan,
  appearanceSlogan,
  welcomeSlogan,
}: Readonly<{
  appearanceSlogan: string;
  godSlogan: string;
  placeSlogan: string;
  starSlogan: string;
  timeSlogan: string;
  welcomeSlogan: string;
}>) => {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: ScrollYWelcome } = useScroll({
    target: welcomeRef,
    offset: ['start end', 'end end'],
  });

  return (
    <>
      <main>
        <ScrollMotionStar slogan={starSlogan} />
        <ScrollMotionGod slogan={godSlogan} />
        <ScrollMotionTime slogan={timeSlogan} />
        <ScrollMotionPlace slogan={placeSlogan} />
        <ScrollMotionAppearance slogan={appearanceSlogan} />
        <ScrollMotionWelcome
          ref={welcomeRef}
          scrollY={ScrollYWelcome}
          slogan={welcomeSlogan}
        />
      </main>
      <ScrollStatus scrollY={ScrollYWelcome} />
      <IntroBackground />
    </>
  );
};

export { Intro };
