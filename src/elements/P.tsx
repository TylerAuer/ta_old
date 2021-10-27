import { ReactNode } from 'react';
import { css } from '@emotion/react';
import { color, spacing } from '@/constants';

import { ElementProps } from '@/types';

type PProps = {
  children: ReactNode;
} & ElementProps;

export const P = ({ sx, id, className, children }: PProps) => {
  const pCss = css`
    box-sizing: content-box;
    margin: ${spacing.lg} auto;
    max-width: 100%;
    color: ${color.fontBase};
    ${sx};
  `;

  return (
    <p id={id} className={className} css={pCss}>
      {children}
    </p>
  );
};
