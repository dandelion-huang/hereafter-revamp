'use client';

import { useEffect, useState } from 'react';

import { type MotionValue } from 'framer-motion';

import { ScrollStatusIndicator } from '@/components/intro/scroll-status-indicator';

export type ScrollStatus = 'scroll' | 'end';

const ScrollStatus = ({
  scrollY,
}: Readonly<{ scrollY: MotionValue<number> }>) => {
  const [status, setStatus] = useState<ScrollStatus>('scroll');

  useEffect(() => {
    const updateStatus = (latest: number) => {
      if (latest === 1 && status === 'scroll') {
        setStatus('end');

        return;
      }

      if (status === 'end') {
        setStatus('scroll');
      }
    };

    const unsubscribe = scrollY.on('change', updateStatus);

    return () => {
      unsubscribe();
    };
  }, [scrollY, status]);

  return (
    <div className="fixed bottom-8 w-full">
      <div className="container text-right font-semibold text-white">
        <ScrollStatusIndicator status={status} />
      </div>
    </div>
  );
};

export { ScrollStatus };
