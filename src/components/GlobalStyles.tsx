import React from 'react';
import { Global, css } from '@emotion/react';
import { SPACING } from '@/constants';

const globalStyles = css`
  :root {
    --font-body: 'nunito', sans-serif;
    --font-special: 'JetBrains mono', serif;

    --color-page-bg: white;

    --color-punch-soft: rgba(255, 175, 196, 0.7);
    --color-punch-bright: #ffafc4;
    --color-punch: #da4167;
    --color-punch-dark: #ba2348;
    --color-punch-dim: #d8768f;
    --color-punch-bg: #ff93b0;

    --color-alt: #4361ee;

    --color-text-body: #434343;
    --color-text-header: #222;

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
    background-color: var(--color-page-bg);
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
    font-family: var(--font-special);
    line-height: 1.3;
    margin: ${SPACING.xl} auto;
    width: 800px;
    max-width: 100%;
  }

  h1 {
    color: var(--color-punch);
    font-size: 3.6rem;
  }

  h2 {
    color: var(--color-punch);
    padding-bottom: 3px;
    border-bottom: 3px solid var(--color-punch);
  }

  h3 {
    color: var(--color-punch);
  }

  h4 {
    color: var(--color-text-header);
    font-style: italic;
  }

  h5 {
    color: var(--color-punch);
    font-style: italic;
  }

  code {
    color: black;
    background-color: var(--color-grey-bg);
    padding: 2px 4px;
    border-radius: 2px;
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
`;

export const GlobalStyles: React.FC = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    {children}
  </>
);
