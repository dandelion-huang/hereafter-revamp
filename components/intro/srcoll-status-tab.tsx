'use client';

import { cva, type VariantProps } from 'class-variance-authority';

import { type ScrollStatus } from '@/hooks/useScrollStatus';
import { cn } from '@/utils/misc';

const scrollStatusTabVariants = cva('fixed z-50 w-full font-semibold', {
  variants: {
    fontColor: {
      highlight: 'text-highlight',
      white: 'text-white',
    },
    position: {
      bottom: 'bottom-8',
      top: 'top-8',
    },
  },
  defaultVariants: {
    fontColor: 'white',
    position: 'bottom',
  },
});

export interface ScrollStatusTabProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scrollStatusTabVariants> {
  children?: React.ReactNode;
  className?: string;
  status: ScrollStatus;
}

const ScrollStatusTab = ({
  children,
  className,
  fontColor,
  position,
}: ScrollStatusTabProps) => {
  return (
    <div
      className={cn(
        scrollStatusTabVariants({ fontColor, position, className })
      )}
    >
      <div className="container flex items-center justify-end gap-2 overflow-hidden pr-8 text-right">
        {children}
      </div>
    </div>
  );
};

export { ScrollStatusTab };
