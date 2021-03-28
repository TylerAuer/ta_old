import React from 'react';
import { css } from '@emotion/react';

export enum WIDTHS {
  bleed = '100%',
  wide = '1000px',
  standard = '800px',
  narrow = '600px',
  half = '400px',
  quarter = '200px',
  three_quarters = '600px',
  third = '266.6px',
  two_thirds = '533.2px',
}

interface Props {
  width?: WIDTHS;
}

export const SetWidth: React.FC<Props> = ({
  children,
  width = WIDTHS.standard,
}) => (
  <div
    css={css`
      width: ${width};
      margin: 0 auto;
    `}
  >
    {children}
  </div>
);
