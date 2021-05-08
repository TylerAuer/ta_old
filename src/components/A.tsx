import * as React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { Link } from 'gatsby';

interface Props {
  href: string;
  sx?: SerializedStyles;
  id?: string;
  className?: string;
}

export const A: React.FC<Props> = ({ href, sx, id, className, children }) => {
  const aCss = css`
    color: var(--color-text-body);
    text-decoration: none;
    border-bottom: 3px solid var(--color-punch-dim);
    white-space: nowrap;

    &:hover {
      color: var(--color-punch-dark);
      border-bottom-color: var(--color-punch);
    }

    ${sx}
  `;

  return (
    <Link to={href} id={id} className={className} css={aCss}>
      {children}
    </Link>
  );
};
