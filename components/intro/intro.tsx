'use client';

import { useRef } from 'react';

import { LazyMotion, useScroll } from 'framer-motion';

import { IntroBackground } from '@/components/intro/intro-background';
import { ScrollMotionAppearance } from '@/components/intro/scroll-motion-appearance';
import { ScrollMotionGod } from '@/components/intro/scroll-motion-god';
import { ScrollMotionPlace } from '@/components/intro/scroll-motion-place';
import { ScrollMotionStar } from '@/components/intro/scroll-motion-star';
import { ScrollMotionTime } from '@/components/intro/scroll-motion-time';
import { ScrollMotionWelcome } from '@/components/intro/scroll-motion-welcome';
import { ScrollStatusIndicator } from '@/components/intro/scroll-status-indicator';
import { ScrollStatusTab } from '@/components/intro/srcoll-status-tab';
import { Link } from '@/components/ui/link';
import { useScrollStatus } from '@/hooks/use-scroll-status';

const loadFeatures = () =>
  import('@/components/intro/motion-features').then((res) => res.default);

const Intro = ({
  appearanceSlogan,
  godSlogan,
  placeSlogan,
  starSlogan,
  timeSlogan,
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
  const scrollStatus = useScrollStatus(ScrollYWelcome, 0.6);

  return (
    <>
      <LazyMotion features={loadFeatures} strict>
        <ScrollStatusTab position="top">
          {scrollStatus === 'scroll' && (
            <Link
              className="-mx-3 -mt-3"
              href="/lobby"
              size="sm"
              variant="link"
            >
              skip
            </Link>
          )}
        </ScrollStatusTab>
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
        <ScrollStatusTab>
          {scrollStatus}
          <ScrollStatusIndicator status={scrollStatus} />
        </ScrollStatusTab>
      </LazyMotion>
      <IntroBackground />
    </>
  );
};

export { Intro };
