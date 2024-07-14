'use client';

import { useRef } from 'react';

import { m, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import { IntroSection } from '@/components/intro/intro-section';
import { IntroWording } from '@/components/intro/intro-wording';

const ScrollMotionGod = ({
  slogan,
}: Readonly<{
  slogan: string;
}>) => {
  const godRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: ScrollYGod } = useScroll({
    target: godRef,
    offset: ['start end', 'end end'],
  });
  const opacityGod = useTransform(ScrollYGod, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scaleGod = useTransform(ScrollYGod, [0, 0.2], [0, 1]);
  const opacityGodTable = useTransform(ScrollYGod, [0.2, 0.4], [0, 1]);
  const scaleGodTable = useTransform(ScrollYGod, [0.2, 0.4], [0, 1]);
  const rotateGodHand = useTransform(ScrollYGod, [0.4, 0.6], [0, -60]);
  const opacityGodGlass = useTransform(ScrollYGod, [0.4, 0.6, 0.7], [0, 1, 0]);
  const opacityGodSpill = useTransform(ScrollYGod, [0.6, 0.7], [0, 1]);
  const rotateGodSpill = useTransform(
    ScrollYGod,
    [0.6, 0.7, 0.8],
    [-85, -65, -45]
  );
  const opacityGodWording = useTransform(
    ScrollYGod,
    [0, 0.1, 0.8, 0.9],
    [0, 1, 1, 0]
  );
  const translateYGodWording = useTransform(
    ScrollYGod,
    [0, 0.2, 0.7, 0.9],
    ['50px', '0', '0', '-50px']
  );

  return (
    <IntroSection ref={godRef}>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <m.div
          style={{
            opacity: opacityGod,
            scale: scaleGod,
          }}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2">
            <m.div
              className="h-[80px] w-[700px] border-b-[3px] border-white sm:h-[120px] sm:border-b-[5px]"
              style={{
                opacity: opacityGodTable,
                scale: scaleGodTable,
              }}
            />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-y-1/4">
            <m.div
              className="relative aspect-[51/179] w-[30px] origin-top-right sm:w-[45px]"
              style={{
                rotate: rotateGodHand,
              }}
            >
              <Image
                alt="God hand"
                fill
                src="/assets/images/intro/god-hand.svg"
              />
            </m.div>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative aspect-[278/325] w-[180px] sm:w-[280px]">
              <Image
                alt="God portrait"
                fill
                src="/assets/images/intro/god-portrait.svg"
              />
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 translate-x-[275%] translate-y-[38%]">
            <m.div
              className="relative aspect-[61/89] w-10 sm:w-[61px]"
              style={{ opacity: opacityGodGlass }}
            >
              <Image
                alt="God glass"
                fill
                src="/assets/images/intro/glass-stable.svg"
              />
            </m.div>
          </div>
          <div className="absolute left-1/2 top-1/2 translate-x-[96%] translate-y-[129%]">
            <m.div
              className="relative aspect-[215/51] w-[150px] origin-bottom-left sm:w-[230px]"
              style={{
                opacity: opacityGodSpill,
                rotate: rotateGodSpill,
              }}
            >
              <Image
                alt="God glass"
                fill
                src="/assets/images/intro/glass-spill.svg"
              />
            </m.div>
          </div>
        </m.div>
      </div>
      <IntroWording
        opacity={opacityGodWording}
        translateY={translateYGodWording}
      >
        {slogan}
      </IntroWording>
    </IntroSection>
  );
};

export { ScrollMotionGod };
