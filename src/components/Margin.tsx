import React from 'react';
import { css } from '@emotion/react';
import { Spacing } from '@/styles';

interface Props {
  vMargin?: Spacing;
  hMargin?: Spacing;
  left?: Spacing;
  right?: Spacing;
  top?: Spacing;
  bottom?: Spacing;
}

export const Margin: React.FC<Props> = ({
  children,
  vMargin,
  hMargin,
  left = Spacing.zero,
  right = Spacing.zero,
  top = Spacing.standard,
  bottom = Spacing.standard,
}) => {
  // vMargin and hMargin settings superseed left, right, top, bottom
  if (vMargin) {
    top = vMargin;
    bottom = vMargin;
  }

  if (hMargin) {
    left = hMargin;
    right = hMargin;
  }

  return (
    <div
      css={css`
        margin: ${top} ${right} ${bottom} ${left};
      `}
    >
      {children}
    </div>
  );
};
