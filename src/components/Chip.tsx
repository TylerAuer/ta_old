import React from 'react';
import { css, SerializedStyles } from '@emotion/react';

import { A } from '@/components/A';

interface Props {
  to: string;
  sx?: SerializedStyles;
}

export const Chip: React.FC<Props> = ({ children, to, sx }) => {
  const s = css`
    padding: 2px 1rem 0 1rem;
    display: inline-block;
    border: none;
    background: var(--color-punch-bright);
    border-radius: 3px;
    font-size: 1.2rem;
    color: #282828;
    font-family: var(--font-special);
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 400;

    &:not(:last-of-type) {
      margin-right: 1rem;
    }

    &:hover {
      background: var(--color-punch-bg);
      color: black;
    }

    // Pass any styles on and override defaults
    ${sx}
  `;

  return (
    <A css={s} href={to}>
      {children}
    </A>
  );
};
