import { ReactNode } from 'react';
import { css } from '@emotion/react';
import { ElementProps } from '@/types';

import { A } from '@/elements/A';
import { color, font } from '@/constants';

type ChipProps = {
  to: string;
  children: ReactNode;
} & ElementProps;

export const Chip = ({ children, to, sx, id, className }: ChipProps) => {
  const s = css`
    padding: 2px 1rem 0 1rem;
    display: inline-block;
    border: none;
    background: ${color.bgPrimary};
    border-radius: 3px;
    font-size: 1.2rem;
    color: ${color.fontBase};
    font-family: ${font.family.chip};
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 400;

    &:not(:last-of-type) {
      margin-right: 1rem;
    }

    &:hover {
      background: ${color.bgPrimaryHover};
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
