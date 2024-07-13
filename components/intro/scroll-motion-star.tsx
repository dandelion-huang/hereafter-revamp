'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import { IntroSection } from '@/components/intro/intro-section';
import { IntroWording } from '@/components/intro/intro-wording';

const ScrollMotionStar = ({
  slogan,
}: Readonly<{
  slogan: string;
}>) => {
  const starRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: ScrollYStar } = useScroll({
    target: starRef,
  });
  const opacityStar = useTransform(ScrollYStar, [0.9, 1], [1, 0]);
  const scaleStarMask = useTransform(ScrollYStar, [0, 1], [1, 1.3]);
  const scaleStarSpark = useTransform(ScrollYStar, [0.5, 1], [0, 2]);
  const opacityStarWording = useTransform(
    ScrollYStar,
    [0.5, 0.6, 0.8, 0.9],
    [0, 1, 1, 0]
  );
  const translateYStarWording = useTransform(
    ScrollYStar,
    [0.5, 0.9],
    ['50px', '-50px']
  );

  return (
    <IntroSection ref={starRef}>
      <motion.div
        className="fixed left-1/2 top-1/2 size-[145px] rounded-full bg-white -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: opacityStar }}
      >
        <div className="absolute aspect-[160/165] w-40 animate-shine-intro -translate-x-[53%] -translate-y-1/2">
          <motion.div
            className="size-full rounded-full bg-bgc-dark [clip-path:polygon(48%_48%,_100%_48%,_100%_100%,_48%_100%)]"
            style={{
              scale: scaleStarMask,
            }}
          />
        </div>
        <div className="absolute aspect-[160/165] w-40 animate-shine-intro -translate-y-1/2 translate-x-[43%]">
          <motion.div
            className="size-full rounded-full bg-bgc-dark [clip-path:polygon(0_48%,_52%_48%,_52%_100%,_0_100%)]"
            style={{
              scale: scaleStarMask,
            }}
          />
        </div>
        <div className="absolute aspect-[160/165] w-40 animate-shine-intro -translate-x-[53%] translate-y-[39%]">
          <motion.div
            className="size-full rounded-full bg-bgc-dark [clip-path:polygon(48%_0,_100%_0,_100%_52%,_48%_52%)]"
            style={{
              scale: scaleStarMask,
            }}
          />
        </div>
        <div className="absolute aspect-[160/165] w-40 animate-shine-intro translate-x-[43%] translate-y-[39%]">
          <motion.div
            className="size-full rounded-full bg-bgc-dark [clip-path:polygon(0_0,_52%_0,_52%_52%,_0_52%)]"
            style={{
              scale: scaleStarMask,
            }}
          />
        </div>
        <div className="absolute size-[145px] -translate-x-[0.5px] translate-y-[1px]">
          <motion.div
            className="relative aspect-square size-full"
            style={{
              scale: scaleStarSpark,
            }}
          >
            <Image
              src="/assets/images/intro/star-spark.svg"
              alt="Star spark"
              fill
            />
          </motion.div>
        </div>
      </motion.div>

      <IntroWording
        opacity={opacityStarWording}
        translateY={translateYStarWording}
      >
        {slogan}
      </IntroWording>
    </IntroSection>
  );
};

export { ScrollMotionStar };
