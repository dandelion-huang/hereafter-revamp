import { useEffect, useState } from 'react';

import { type MotionValue } from 'framer-motion';

import { type ScrollStatus } from '@/types/scroll-status';

function useScrollStatus(
  scrollMotionValue: MotionValue<number>,
  threshold: number
) {
  const [status, setStatus] = useState<ScrollStatus>('scroll');

  useEffect(() => {
    const updateStatus = (latest: number) => {
      if (latest >= threshold) {
        setStatus('end');

        return;
      }

      if (status === 'end') {
        setStatus('scroll');
      }
    };
    const unsubscribe = scrollMotionValue.on('change', updateStatus);

    return () => {
      unsubscribe();
    };
  }, [scrollMotionValue, status, threshold]);

  return status;
}

export { useScrollStatus };
