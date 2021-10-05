import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/serialize';

const blackest = 'black';
//const blacker =
const black = '#252638';
const blackless = '#32292f';
// const blackleast

// const greyest = '#434343';
// const greyer = '#434343';
const grey = '#434343';
// const greyless = '#434343';
// const greyleast = '#434343';

const blueGrey = '#9a9bad';

// const lightGreyest = 'rgb(252, 252, 252)';
// const lightGreyer = '#ebebeb';
const lightGrey = '#fcfcfc';
// const lightGreyless = 'rgb(252, 252, 252)';
// const lightGreyleast = 'rgb(252, 252, 252)';
const lightGreyTransparent = (opacity: number) => `rgba(252, 252, 252, ${opacity})`;

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
  fontBase: grey,
  fontBaseDark: black,
  fontBaseLight: blueGrey,
  fontPrimary: pink,
  fontPrimaryDark: redPink,
  fontSecondary: blue,
};

const bg = {
  bgBase: lightGrey,
  bgBaseDark: black,
  bgPrimary: pinkless,
  bgPrimaryHover: pinkDim,
  bgBaseTransparent: lightGreyTransparent,
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
