import { ReactNode } from 'react';
import { Link } from 'gatsby';
import { ElementProps } from '@/types';

type AProps = {
  to: string;
  children: ReactNode;
} & ElementProps;

export const A = ({ to, children, className, id, dataTestId, sx }: AProps) => {
  const css = [sx];
  const linkProps = { className, id, dataTestId, css };

  // Gatsby preloads internal links, but the link component shouldn't be passed external links
  const isExternal = to.match(/^http/);

  if (isExternal) {
    return (
      <a href={to} {...linkProps}>
        {children}
      </a>
    );
  } else {
    return (
      <Link to={to} {...linkProps}>
        {children}
      </Link>
    );
  }
};
