import { StyleConstantObject } from '@/types';
import { css } from '@emotion/react';

const font: StyleConstantObject = {
  standard: css`
    color: #434343;
  `,
  dark: css`
    color: #252638;
  `,
  light: css`
    color: #9a9bad;
  `,
  blue: css`
    color: #4361ee;
  `,
  red: css`
    color: #da4167;
  `,
};

export const color = {
  font,
};

// --color-page-bg: rgb(252, 252, 252);

// --color-punch-soft: rgba(255, 175, 196, 0.7);
// --color-punch-bright: #ffafc4;
// --color-punch: #da4167;
// --color-punch-dark: #ba2348;
// --color-punch-dim: #d8768f;
// --color-punch-bg: #ff93b0;

// --color-alt: #4361ee;

// --color-text-body: #434343;
// --color-text-header: #3c3c3c;
// --color-text-on-punch: #282828;

// --color-a: #323232;
// --color-a-hover: black;

// --color-grey-bg: #ebebeb;
// --color-grey-bg-medium: #c0c0c0;
// --color-grey-bg-dark: #2b2b2b;
