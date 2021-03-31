import { format } from 'node:path';
import * as React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { SPACING } from '@/constants';

const wideCss = css`
  width: 1000px;
`;

const standardCss = css`
  width: 800px;
`;

const pCss = css`
  width: 600px;
  padding-right: 200px;
`;

type Width = 'wide' | 'standard' | 'p';

const widthOptions = {
  wide: wideCss,
  standard: standardCss,
  p: pCss,
};

interface Props {
  width?: Width;
  sx?: SerializedStyles;
  id?: string;
  className?: string;
  vMargin?: SPACING;
}

export const Box: React.FC<Props> = ({
  children,
  sx,
  id,
  className,
  vMargin,
  width = 'standard',
}) => {
  const style = css`
    // Use selected width
    ${widthOptions[width]}

    max-width: 100%;
    margin: ${vMargin ?? 0} auto;

    // Pass along any styling
    ${sx}
  `;

  return (
    <div id={id} className={className} css={style}>
      {children}
    </div>
  );
};
