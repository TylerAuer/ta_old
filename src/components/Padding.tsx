import React from 'react';
import { css } from '@emotion/react';
import { SPACING } from '@/styles';

interface Props {
  vPadding?: SPACING;
  hPadding?: SPACING;
  left?: SPACING;
  right?: SPACING;
  top?: SPACING;
  bottom?: SPACING;
}

export const Padding: React.FC<Props> = ({
  children,
  vPadding,
  hPadding,
  left = SPACING.zero,
  right = SPACING.zero,
  top = SPACING.standard,
  bottom = SPACING.standard,
}) => {
  // vPadding and hPadding settings superseed left, right, top, bottom
  if (vPadding) {
    top = vPadding;
    bottom = vPadding;
  }

  if (hPadding) {
    left = hPadding;
    right = hPadding;
  }

  return (
    <div
      css={css`
        padding: ${top} ${right} ${bottom} ${left};
      `}
    >
      {children}
    </div>
  );
};
