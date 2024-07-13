import { cva, type VariantProps } from 'class-variance-authority';
import Image from 'next/image';

import { cn } from '@/utils/misc';

const scrollStatusIndicatorVariants = cva('relative aspect-[36/47] w-4', {
  variants: {
    status: {
      end: 'border-b-[2.5px] border-white',
      scroll: 'animate-scroll-guide',
    },
  },
  defaultVariants: {
    status: 'scroll',
  },
});

export interface ScrollStatusIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scrollStatusIndicatorVariants> {
  className?: string;
}

const ScrollStatusIndicator = ({
  className,
  status,
}: ScrollStatusIndicatorProps) => {
  return (
    <div className={cn(scrollStatusIndicatorVariants({ status, className }))}>
      <Image src="/assets/images/arrow-down.svg" alt="arrow down" fill />
    </div>
  );
};

export { ScrollStatusIndicator };
