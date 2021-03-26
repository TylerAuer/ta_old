import React from 'react';
import { css } from '@emotion/react';

export enum FlexJustification {
  split = 'space-between',
  even = 'space-around',
}

interface Props {
  flex?: FlexJustification;
  direction?: 'rows' | 'col';
}

export const Flex: React.FC<Props> = ({
  children,
  flex = FlexJustification.even,
  direction = 'row',
}) => (
  <div
    css={css`
      display: flex;
      justify-content: ${flex};
      flex-direction: ${direction};
      align-items: center;
    `}
  >
    {children}
  </div>
);
