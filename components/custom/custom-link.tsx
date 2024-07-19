import Link, { type LinkProps } from 'next/link';

export interface CustomLinkProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
}

const CustomLink = ({
  children,
  className,
  href,
  ...props
}: CustomLinkProps) => {
  return (
    <Link className={className} href={href} prefetch={false} {...props}>
      {children}
    </Link>
  );
};

export { CustomLink };
