import React from 'react';
import { css } from '@emotion/react';

import { HtmlElementPropsType } from '@/types';

export enum FlexJustification {
  split = 'space-between',
  even = 'space-around',
  center = 'center',
  start = 'start',
}

type Props = {
  flex?: FlexJustification;
  direction?: 'rows' | 'col';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  align?: 'center';
} & HtmlElementPropsType;

export const Flex: React.FC<Props> = ({
  children,
  flex = FlexJustification.even,
  direction = 'row',
  wrap = 'wrap',
  align = 'center',
  id,
  className,
  sx,
}) => (
  <div
    id={id}
    className={className}
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
