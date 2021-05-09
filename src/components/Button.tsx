import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

import { HtmlElementPropsType } from '@/types';

type Props = {
  to: string;
} & HtmlElementPropsType;

export const Button: React.FC<Props> = ({ children, to, sx, id, className }) => {
  const s = css`
    padding: 1rem 2rem;
    border: none;
    background: var(--color-grey-bg);
    border-radius: 3rem;
    font-size: 1.3rem;
    color: #282828;
    font-family: var(--font-special);
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 400;

    &:hover {
      background: var(--color-punch-soft);
      color: black;
    }

    // Pass any styles on and override defaults
    ${sx}
  `;

  return (
    <Link id={id} className={className} css={s} to={to}>
      {children}
    </Link>
  );
};
