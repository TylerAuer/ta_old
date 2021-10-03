import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/serialize';

enum FontColors {
  'base',
  'baseDark',
  'baseLight',
  'primary',
  'secondary',
}

const font = {
  base: css`
    color: #434343;
  `,
  baseDark: css`
    color: #252638;
  `,
  baseLight: css`
    color: #9a9bad;
  `,
  primary: css`
    color: #da4167;
  `,
  secondary: css`
    color: #4361ee;
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
