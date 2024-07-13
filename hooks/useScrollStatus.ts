import { useEffect, useState } from 'react';

import { type MotionValue } from 'framer-motion';

export type ScrollStatus = 'scroll' | 'end';

const useScrollStatus = (
  scrollMotionValue: MotionValue<number>,
  threshold: number
): ScrollStatus => {
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
};

export { useScrollStatus };
