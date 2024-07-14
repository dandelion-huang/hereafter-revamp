import Image from 'next/image';

import { Background } from '@/components/animations/background';
import { cn } from '@/utils/misc';

const IntroBackground = () => {
  const celestialClasses = 'absolute object-center';

  return (
    <Background>
      <div
        className={cn(
          celestialClasses,
          '-top-[70%] left-1/2 aspect-[1699/1648] w-[900px] animate-spin-intro opacity-50 blur-lg sm:-top-1/2 sm:left-[70%] 2xl:-top-2/3 2xl:w-[1500px] 2xl:blur-2xl'
        )}
      >
        <Image
          alt="Nebula"
          fill
          priority
          src="/assets/images/background/nebula-1.svg"
        />
      </div>
      <div
        className={cn(
          celestialClasses,
          '-left-2/3 top-[75%] aspect-[1008/464] w-[700px] animate-bounce-intro opacity-50 blur-xl sm:-left-[20%] 2xl:w-[1500px]'
        )}
      >
        <Image
          alt="Nebula"
          fill
          priority
          src="/assets/images/background/nebula-2.svg"
        />
      </div>
      <div
        className={cn(
          celestialClasses,
          'left-[60%] top-[10%] aspect-square w-2.5 animate-[sparkle_3s_ease-in_infinite_alternate-reverse] brightness-200'
        )}
      >
        <Image
          alt="Star"
          fill
          loading="eager"
          src="/assets/images/background/star-1.svg"
        />
      </div>
      <div
        className={cn(
          celestialClasses,
          'left-[23%] top-[61%] aspect-square w-2.5 animate-[sparkle_4s_ease-in_infinite_alternate-reverse]'
        )}
      >
        <Image
          alt="Star"
          fill
          loading="eager"
          src="/assets/images/background/star-1.svg"
        />
      </div>
      <div
        className={cn(
          celestialClasses,
          'left-[90%] top-[42%] aspect-[20/18] w-5 animate-[sparkle_2s_ease-in_infinite_alternate-reverse] sm:left-[70%]'
        )}
      >
        <Image
          alt="Star"
          fill
          loading="eager"
          src="/assets/images/background/star-2.svg"
        />
      </div>
      <div
        className={cn(
          celestialClasses,
          'left-[10%] top-1/4 aspect-[22/20] w-5 animate-[sparkle_5s_ease-in_infinite_alternate-reverse] brightness-200'
        )}
      >
        <Image
          alt="Star"
          fill
          loading="eager"
          src="/assets/images/background/star-3.svg"
        />
      </div>
      <div
        className={cn(
          celestialClasses,
          'left-[30%] top-[18%] aspect-[28/29] w-3.5 animate-[sparkle_3s_ease-in_infinite_alternate-reverse]'
        )}
      >
        <Image
          alt="Star"
          fill
          loading="eager"
          src="/assets/images/background/star-4.svg"
        />
      </div>
      <div
        className={cn(
          celestialClasses,
          'left-[13%] top-[74%] aspect-[28/29] w-5 animate-[sparkle_2s_ease-in_infinite_alternate-reverse]'
        )}
      >
        <Image
          alt="Star"
          fill
          loading="eager"
          src="/assets/images/background/star-5.svg"
        />
      </div>
      <div
        className={cn(
          celestialClasses,
          'left-[80%] top-[88%] aspect-[22/20] w-2.5 animate-[sparkle_2.5s_ease-in_infinite_alternate-reverse] brightness-200'
        )}
      >
        <Image
          alt="Star"
          fill
          loading="eager"
          src="/assets/images/background/star-3.svg"
        />
      </div>
      <div
        className={cn(
          celestialClasses,
          'left-[75%] top-[47%] aspect-[20/18] w-2.5 animate-[sparkle_3.5s_ease-in_infinite_alternate-reverse] brightness-200'
        )}
      >
        <Image
          alt="Star"
          fill
          loading="eager"
          src="/assets/images/background/star-6.svg"
        />
      </div>
      <div
        className={cn(
          celestialClasses,
          'left-[63%] top-[73%] aspect-[28/29] w-3 animate-[sparkle_2.5s_ease-in_infinite_alternate-reverse] blur-[2px]'
        )}
      >
        <Image
          alt="Star"
          fill
          loading="eager"
          src="/assets/images/background/star-4.svg"
        />
      </div>
    </Background>
  );
};

export { IntroBackground };
