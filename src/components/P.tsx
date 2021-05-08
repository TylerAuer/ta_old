import * as React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { SPACING } from '@/constants';

interface Props {
  sx?: SerializedStyles;
  id?: string;
  className?: string;
}

export const P: React.FC<Props> = ({ sx, id, className, children }) => {
  const pCss = css`
    box-sizing: content-box;
    margin: ${SPACING.lg} auto;
    padding-right: 150px;
    width: 650px;
    max-width: 100%;
    ${sx}
  `;

  return (
    <p id={id} className={className} css={pCss}>
      {children}
    </p>
  );
};
