import React from 'react';
import { Global, css } from '@emotion/react';
import { SPACING } from '@/constants';

const globalStyles = css`
  :root {
    --font-body: 'nunito', sans-serif;
    --font-special: 'JetBrains mono', serif;

    --color-page-bg: rgb(252, 252, 252);

    --color-punch-soft: rgba(255, 175, 196, 0.7);
    --color-punch-bright: #ffafc4;
    --color-punch: #da4167;
    --color-punch-dark: #ba2348;
    --color-punch-dim: #d8768f;
    --color-punch-bg: #ff93b0;

    --color-alt: #4361ee;

    --color-text-body: #434343;
    --color-text-header: #3c3c3c;
    --color-text-on-punch: #282828;

    --color-a: #323232;
    --color-a-hover: black;

    --color-grey-bg: #ebebeb;
    --color-grey-bg-medium: #c0c0c0;
    --color-grey-bg-dark: #2b2b2b;

    --shadow-subtle: -4px 4px 8px rgba(36, 36, 36, 0.2);

    // https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991#43960991
    --punch-filter: invert(36%) sepia(65%) saturate(1035%) hue-rotate(305deg) brightness(90%)
      contrast(94%);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%
    padding: 0;
    margin: 0;
    font-family: var(--font-body);
    background-color: var(--color-page-bg);

    @media only screen and (max-width: 1000px) {
      font-size: 58%;
    }

    @media only screen and (max-width: 700px) {
      font-size: 52%;
    }

    @media only screen and (max-width: 450px) {
      font-size: 48%;
    }
  }

  body {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.8;
    margin: 0 auto;
    color: var(--color-text-body);
    max-width: 95%;
  }

  a {
    text-decoration: none;
  }

  ul,
  ol {
    width: 800px;
    margin: ${SPACING.lg} auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.3;
    margin: ${SPACING.xl} auto;
    width: 800px;
    max-width: 100%;
  }

  code {
    color: black;
    background-color: var(--color-grey-bg);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 1.7rem;
  }

  pre {
    font-family: var(--font-special);
    font-size: 1.4rem;

    & .highlight-line {
      background-color: rgba(152, 152, 152, 0.2);
    }
  }

  figure {
    margin: 0;
    padding: 0;
  }

  figcaption {
    color: var(--color-a);
    font-style: italic;
    font-family: var(--font-special);
    font-size: 1.6rem;
    line-height: 1.35;
  }

  a.footnote-ref {
    border: none;
    font-family: var(--font-special);
    color: var(--color-punch);
    margin: 0 3px 0 1px;
    font-weight: bold;
  }

  // Used for accessibility
  .visible-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    &:focus {
      clip: auto;
      height: auto;
      overflow: auto;
      position: absolute;
      width: auto;
    }
  }
`;

export const GlobalStyles: React.FC = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    {children}
  </>
);
