import React from 'react';
import { Link } from 'gatsby';
import { css, SerializedStyles } from '@emotion/react';

interface Props {
  to: string;
  sx?: SerializedStyles;
}

export const Button: React.FC<Props> = ({ children, to, sx }) => {
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
    <Link css={s} to={to}>
      {children}
    </Link>
  );
};
