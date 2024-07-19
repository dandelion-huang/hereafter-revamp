import { cn } from '@/utils/misc';

const Background = ({
  children,
  className,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
}>) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'fixed top-0 -z-50 min-h-dvh w-full bg-gradient-to-b from-background to-background-to',
        className
      )}
    >
      {children}
    </div>
  );
};

export { Background };
