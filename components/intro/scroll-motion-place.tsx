'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import { Earth } from '@/components/animations/earth';
import { IntroSection } from '@/components/intro/intro-section';
import { IntroWording } from '@/components/intro/intro-wording';

const ScrollMotionPlace = ({
  slogan,
}: Readonly<{
  slogan: string;
}>) => {
  const placeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: ScrollYPlace } = useScroll({
    target: placeRef,
    offset: ['start end', 'end end'],
  });
  const opacityPlace = useTransform(
    ScrollYPlace,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const scalePlaceEarth = useTransform(ScrollYPlace, [0, 0.5], [5, 1]);
  const translateYPlaceEarth = useTransform(
    ScrollYPlace,
    [0.6, 1],
    ['0', '-50px']
  );
  const opacityPlacePin = useTransform(ScrollYPlace, [0.5, 0.6], [0, 1]);
  const scalePlacePinInner = useTransform(ScrollYPlace, [0.6, 1], [0, 15]);
  const translateYPlaceWording = useTransform(
    ScrollYPlace,
    [0.2, 1],
    ['50px', '-50px']
  );

  return (
    <IntroSection ref={placeRef} size="short">
      <div className="fixed left-1/2 top-1/2 md:left-[80%] lg:left-2/3">
        <motion.div
          style={{
            scale: scalePlaceEarth,
            opacity: opacityPlace,
            translateY: translateYPlaceEarth,
          }}
        >
          <Earth />
        </motion.div>

        <div className="absolute -left-[55px] -top-[105px] md:-left-[90px] md:-top-[60px]">
          <motion.div
            className="absolute aspect-[144/199] w-[45px] md:w-[60px]"
            style={{ opacity: opacityPlacePin }}
          >
            <Image
              src="/assets/images/intro/location-pin.svg"
              alt="Location pin"
              fill
            />
          </motion.div>
          <motion.div
            className="absolute top-[14px] flex w-[45px] items-center justify-center md:top-[19px] md:w-[60px]"
            style={{ scale: scalePlacePinInner, opacity: opacityPlacePin }}
          >
            <div className="h-[15px] w-3 rounded-[50%] bg-white md:h-5 md:w-4" />
          </motion.div>
        </div>
      </div>

      <IntroWording
        opacity={opacityPlace}
        vertical="center"
        translateY={translateYPlaceWording}
      >
        {slogan}
      </IntroWording>
    </IntroSection>
  );
};

export { ScrollMotionPlace };
