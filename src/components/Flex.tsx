import React from 'react';
import { css, SerializedStyles } from '@emotion/react';

export enum FlexJustification {
  split = 'space-between',
  even = 'space-around',
  center = 'center',
  start = 'start',
}

interface Props {
  flex?: FlexJustification;
  direction?: 'rows' | 'col';
  sx?: SerializedStyles;
  flexWrap?: boolean;
}

export const Flex: React.FC<Props> = ({
  children,
  flex = FlexJustification.even,
  direction = 'row',
  flexWrap,
  sx,
}) => (
  <div
    css={css`
      display: flex;
      justify-content: ${flex};
      flex-direction: ${direction};
      align-items: center;
      ${flexWrap ? 'flex-wrap: wrap' : ''}
      ${sx}
    `}
  >
    {children}
  </div>
);
