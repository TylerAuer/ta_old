import { ReactNode } from 'react';
import { Link } from 'gatsby';
import { ElementProps } from '@/types';

// const aCss = css`
//   color: var(--color-text-body);
//   text-decoration: none;
//   border-bottom: 3px solid var(--color-punch-dim);
//   white-space: nowrap;

//   &:hover {
//     color: var(--color-punch-dark);
//     border-bottom-color: var(--color-punch);
//   }

//   ${sx}
// `;

type AProps = {
  to: string;
  children: ReactNode;
} & ElementProps;

export const A = ({ to, children, className, id, dataTestId, sx }: AProps) => {
  const css = [sx];
  const linkProps = { className, id, dataTestId, css };

  // Gatsby's Link component should only be passed internal links so it can preload them
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
