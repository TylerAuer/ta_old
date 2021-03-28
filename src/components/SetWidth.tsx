import React from 'react';
import { css } from '@emotion/react';

export enum WIDTHS {
  standard = 800,
  narrow = 600,
  half = 400,
  quarter = 200,
  three_quarters = 600,
  third = 266.6,
  two_thirds = 533.2,
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
      box-sizing: content-box;
      width: ${width}px;
      padding-right: ${WIDTHS.standard - width}px;
      margin: 0 auto;
    `}
  >
    {children}
  </div>
);
