import React from 'react';
import { css } from '@emotion/react';
import { ElementProps } from '@/types';

import { A } from '@/elements/A';

type Props = {
  to: string;
} & ElementProps;

export const Chip: React.FC<Props> = ({ children, to, sx, id, className }) => {
  const s = css`
    padding: 2px 1rem 0 1rem;
    display: inline-block;
    border: none;
    background: var(--color-punch-bright);
    border-radius: 3px;
    font-size: 1.2rem;
    color: var(--color-text-on-punch);
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
    <A sx={s} id={id} className={className} to={to}>
      {children}
    </A>
  );
};
