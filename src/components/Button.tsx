import React from 'react';
import { css } from '@emotion/react';

import { ElementProps } from '@/types';
import { A } from '@/elements/A';

type Props = {
  to: string;
} & ElementProps;

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
    <A id={id} className={className} css={s} to={to}>
      {children}
    </A>
  );
};
