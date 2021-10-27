import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/serialize';

const blackFull = 'black';
const blackNear = '#252638';
const blackless = '#32292f';

const greyDark = '#434343';
const greyBlue = '#9a9bad';
const greyMedium = '#C0C0C0';
const greyLight = '#fcfcfc';
const greyLightTransparent = (opacity: number) => `rgba(252, 252, 252, ${opacity})`;

// const lightGreyest = 'rgb(252, 252, 252)';
// const lightGreyer = '#ebebeb';

// const pinkest = '#da4167';
const pinkDark = '#ba2348';
const pink = '#da4167';
const pinkDim = '#ff93b0';
const pinkless = 'rgba(255, 175, 196, 0.7)';
// const pinkleast = 'rgba(255, 175, 196, 0.7)';

const redPink = '#ba2348';

const blue = '#4361ee';

const plum = '#731C56';

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

const font = {
  fontBase: greyDark,
  fontBaseDark: blackNear,
  fontBaseLight: greyBlue,
  fontPrimary: pink,
  fontPrimaryDark: redPink,
  fontSecondary: blue,
};

const bg = {
  bgBase: greyLight,
  bgBaseHover: greyMedium,
  bgBaseTransparent: greyLightTransparent,
  bgPrimary: pinkless,
  bgPrimaryHover: pinkDim,
};

const border = {
  borderPrimary: pink,
  borderSecondary: blue,
};

export const color = {
  icon: pink,
  ...font,
  ...bg,
  ...border,
};
