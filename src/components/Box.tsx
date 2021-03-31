import { format } from 'node:path';
import * as React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { SPACING } from '@/constants';

const bleedCss = css`
  width: 100%;
`;

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

type Width = 'bleed' | 'wide' | 'standard' | 'p';

const widthOptions = {
  bleed: bleedCss,
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

    // Leave 5% edge unless bleeding
    max-width: ${width === 'bleed' ? '100%' : '95%'};
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
