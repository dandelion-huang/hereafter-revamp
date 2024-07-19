import { cva, type VariantProps } from 'class-variance-authority';
import Image from 'next/image';

import { cn } from '@/utils/misc';

const scrollStatusIndicatorVariants = cva('', {
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

interface ScrollStatusIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scrollStatusIndicatorVariants> {
  className?: string;
}

const ScrollStatusIndicator = ({
  className,
  status,
}: ScrollStatusIndicatorProps) => {
  return (
    <div
      className={cn('relative aspect-[36/47] w-4 overflow-hidden', className)}
    >
      <Image
        alt="arrow down"
        className={cn(scrollStatusIndicatorVariants({ status }))}
        fill
        src="/assets/images/arrow-down.svg"
      />
    </div>
  );
};

export { ScrollStatusIndicator };
export type { ScrollStatusIndicatorProps };
