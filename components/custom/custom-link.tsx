import Link, { type LinkProps } from 'next/link';

export interface CustomLinkProps extends LinkProps {
  children?: React.ReactNode;
}

const CustomLink = ({ children, href, ...props }: CustomLinkProps) => {
  return (
    <Link href={href} prefetch={false} {...props}>
      {children}
    </Link>
  );
};

export { CustomLink };
