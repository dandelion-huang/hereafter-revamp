'use client';

import { useRef } from 'react';

import { m, useScroll, useTransform } from 'framer-motion';

import { Clock } from '@/components/animations/clock';
import { IntroSection } from '@/components/intro/intro-section';
import { IntroWording } from '@/components/intro/intro-wording';

const ScrollMotionTime = ({
  slogan,
}: Readonly<{
  slogan: string;
}>) => {
  const timeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: ScrollYTime } = useScroll({
    target: timeRef,
    offset: ['start end', 'end end'],
  });
  const opacityTime = useTransform(ScrollYTime, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scaleTimeClock = useTransform(ScrollYTime, [0.5, 1], [0.2, 1]);
  const translateYTimeWording = useTransform(
    ScrollYTime,
    [0.2, 1],
    ['50px', '-50px']
  );

  return (
    <IntroSection ref={timeRef} duration="short">
      <div className="fixed left-1/2 top-1/2 md:left-2/3">
        <m.div
          style={{
            scale: scaleTimeClock,
            opacity: opacityTime,
          }}
        >
          <Clock />
        </m.div>
      </div>
      <IntroWording
        opacity={opacityTime}
        translateY={translateYTimeWording}
        vertical="center"
      >
        {slogan}
      </IntroWording>
    </IntroSection>
  );
};

export { ScrollMotionTime };
