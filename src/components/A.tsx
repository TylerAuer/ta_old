import * as React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

import { HtmlElementPropsType } from '@/types';

type Props = {
  href: string;
} & HtmlElementPropsType;

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
