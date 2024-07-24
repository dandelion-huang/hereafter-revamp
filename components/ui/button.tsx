import { cva, type VariantProps } from 'class-variance-authority';
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from 'react-aria-components';

import { cn } from '@/utils/misc';

const buttonVariants = cva(
  [
    /* default */
    'inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors',
    /* disabled */
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    /* focus-visible */
    'data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2',
    /* reset */
    'focus-visible:outline-none',
  ],
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground data-[hovered]:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground data-[hovered]:bg-destructive/90',
        outline:
          'border border-input bg-background data-[hovered]:bg-accent data-[hovered]:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80',
        ghost: 'data-[hovered]:bg-accent data-[hovered]:text-accent-foreground',
        link: 'text-highlight underline-offset-4 data-[hovered]:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends AriaButtonProps,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <AriaButton
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        })
      )}
      {...props}
    />
  );
};

export { Button, buttonVariants };
export type { ButtonProps };
