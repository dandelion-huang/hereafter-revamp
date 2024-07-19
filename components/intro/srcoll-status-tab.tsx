'use client';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/misc';

const scrollStatusTabVariants = cva('fixed z-50 w-full font-semibold', {
  variants: {
    position: {
      bottom: 'bottom-8',
      top: 'top-8',
    },
  },
  defaultVariants: {
    position: 'bottom',
  },
});

export interface ScrollStatusTabProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scrollStatusTabVariants> {
  children?: React.ReactNode;
  className?: string;
}

const ScrollStatusTab = ({
  children,
  className,
  position,
}: ScrollStatusTabProps) => {
  return (
    <div className={cn(scrollStatusTabVariants({ position, className }))}>
      <div className="container flex items-center justify-end gap-2 text-right lg:px-16">
        {children}
      </div>
    </div>
  );
};

export { ScrollStatusTab };
