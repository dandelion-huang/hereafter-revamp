import { cva, type VariantProps } from 'class-variance-authority';
import Image from 'next/image';

import { type ScrollStatus } from '@/components/intro/srcoll-status';
import { cn } from '@/utils/misc';

const scrollStatusIndicatorVariants = cva('relative aspect-[36/47] w-4', {
  variants: {
    status: {
      scroll: 'animate-scroll-guide',
      end: 'border-b-[2.5px] border-white',
    },
  },
  defaultVariants: {
    status: 'scroll',
  },
});

export interface ScrollStatusIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scrollStatusIndicatorVariants> {
  status: ScrollStatus;
}

const ScrollStatusIndicator = ({ status }: ScrollStatusIndicatorProps) => {
  return (
    <div className="flex items-center justify-end gap-2 overflow-hidden pr-8 text-white">
      {status}
      <div className={cn(scrollStatusIndicatorVariants({ status }))}>
        <Image src="/assets/images/arrow-down.svg" alt="arrow down" fill />
      </div>
    </div>
  );
};

export { ScrollStatusIndicator };
