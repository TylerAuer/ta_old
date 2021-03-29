import React from 'react';
import { css, SerializedStyles } from '@emotion/react';

export enum FlexJustification {
  split = 'space-between',
  even = 'space-around',
  center = 'center',
}

interface Props {
  flex?: FlexJustification;
  direction?: 'rows' | 'col';
  sx?: SerializedStyles;
}

export const Flex: React.FC<Props> = ({
  children,
  flex = FlexJustification.even,
  direction = 'row',
  sx,
}) => (
  <div
    css={css`
      display: flex;
      justify-content: ${flex};
      flex-direction: ${direction};
      align-items: center;

      ${sx}
    `}
  >
    {children}
  </div>
);
