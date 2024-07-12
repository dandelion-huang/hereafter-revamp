'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import { IntroSection } from '@/components/intro/intro-section';
import { IntroWording } from '@/components/intro/intro-wording';

const ScrollMotionAppearance = ({
  slogan,
}: Readonly<{
  slogan: string;
}>) => {
  const appearanceRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: ScrollYAppearance } = useScroll({
    target: appearanceRef,
    offset: ['start end', 'end end'],
  });
  const opacityAppearance = useTransform(
    ScrollYAppearance,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const opacityAppearanceMan = useTransform(
    ScrollYAppearance,
    [0.3, 0.4, 0.8, 1],
    [0, 1, 1, 0]
  );
  const translateAppearanceMan = useTransform(
    ScrollYAppearance,
    [0.4, 0.6],
    ['0', '-46.5%']
  );
  const translateAppearanceManInTheMirror = useTransform(
    ScrollYAppearance,
    [0.4, 0.6],
    ['20%', '-50%']
  );
  const translateXAppearanceEyes = useTransform(
    ScrollYAppearance,
    [0.6, 0.8],
    ['0', '4%']
  );
  const translateYAppearanceEyes = useTransform(
    ScrollYAppearance,
    [0.6, 0.8],
    ['0', '-16%']
  );
  const opacityAppearanceHereafter = useTransform(
    ScrollYAppearance,
    [0.6, 0.7],
    [0, 1]
  );
  const translateYAppearanceWording = useTransform(
    ScrollYAppearance,
    [0.2, 1],
    ['50px', '-50px']
  );

  return (
    <IntroSection ref={appearanceRef}>
      <motion.div
        className="fixed left-1/2 top-[40%] h-[436px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-white after:absolute after:left-0 after:top-0 after:size-full after:border-x-[53px] after:border-b-[80px] after:border-t-[53px] after:border-b-[#a3a3d3] after:border-l-[#aeadd7] after:border-r-[#b7b6dc] after:border-t-[#cccce8] after:content-[''] md:left-[80%] md:top-1/2 md:h-[600px] md:w-[550px] md:after:border-x-[80px] md:after:border-b-[120px] md:after:border-t-[80px] lg:left-2/3"
        style={{ opacity: opacityAppearance }}
      >
        <div className="absolute left-[77.5px] top-[98px] h-[225px] w-[180px] rounded-[50%] border-[20px] border-bgc-dark before:absolute before:size-full before:rounded-[50%] before:outline before:outline-[75px] before:outline-offset-[20px] before:outline-white before:content-[''] after:absolute after:bottom-[-20px] after:right-0 after:h-[100px] after:w-[200px] after:translate-x-1/2 after:translate-y-full after:bg-white after:content-[''] md:left-[95px] md:top-[119px] md:h-[300px] md:w-60 md:border-[30px] md:before:outline-offset-[30px] md:after:bottom-[-30px]">
          <div className="absolute -bottom-[53px] left-1/2 -z-10 md:-bottom-[80px]">
            <motion.div
              style={{
                opacity: opacityAppearanceMan,
                translateX: translateAppearanceManInTheMirror,
                translateY: translateAppearanceManInTheMirror,
              }}
            >
              <div className="relative aspect-[135/155] w-20 md:w-[120px]">
                <Image
                  src="/assets/images/intro/man-in-the-mirror.svg"
                  alt="Man in the mirror"
                  fill
                />
              </div>
              <div className="absolute bottom-[40px] left-[32%] md:bottom-[60px]">
                <motion.div
                  style={{
                    translateX: translateXAppearanceEyes,
                    translateY: translateYAppearanceEyes,
                  }}
                >
                  <div className="relative aspect-[56/24] w-[34px] md:w-[51px]">
                    <Image
                      src="/assets/images/intro/eyes.svg"
                      alt="Eyes"
                      fill
                    />
                  </div>
                  <motion.div
                    className="absolute bottom-0 aspect-[55/24] w-[34px] md:w-[51px]"
                    style={{
                      opacity: opacityAppearanceHereafter,
                    }}
                  >
                    <Image
                      src="/assets/images/intro/eyes-reflection.svg"
                      alt="Eyes reflection"
                      fill
                    />
                  </motion.div>
                </motion.div>
              </div>
              <motion.div
                className="absolute -top-[9px] left-1/2 aspect-[105/46] w-[62px] -translate-x-1/2 md:-top-3 md:w-[93px]"
                style={{
                  opacity: opacityAppearanceHereafter,
                }}
              >
                <Image
                  src="/assets/images/intro/cat-ears.svg"
                  alt="Cat ears"
                  fill
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <motion.div
            className="relative aspect-[246/274] w-[140px] md:w-[210px]"
            style={{
              opacity: opacityAppearanceMan,
              translateX: translateAppearanceMan,
              translateY: translateAppearanceMan,
            }}
          >
            <Image src="/assets/images/intro/man.svg" alt="Man" fill />
          </motion.div>
        </div>
      </motion.div>

      <IntroWording
        opacity={opacityAppearance}
        translateY={translateYAppearanceWording}
        vertical="center"
      >
        {slogan}
      </IntroWording>
    </IntroSection>
  );
};

export { ScrollMotionAppearance };
