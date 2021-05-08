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
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  align?: 'center';
}

export const Flex: React.FC<Props> = ({
  children,
  flex = FlexJustification.even,
  direction = 'row',
  wrap = 'wrap',
  align = 'center',
  sx,
}) => (
  <div
    css={css`
      display: flex;
      justify-content: ${flex};
      flex-direction: ${direction};

      ${wrap ? `flex-wrap: ${wrap};` : ''}
      ${align ? `align-items: ${align};` : ''}
      ${sx}
    `}
  >
    {children}
  </div>
);
