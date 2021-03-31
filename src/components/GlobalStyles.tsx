import React from 'react';
import { Global, css } from '@emotion/react';
import { SPACING } from '@/constants';

const globalStyles = css`
  :root {
    --font-body: 'nunito', sans-serif;
    --font-special: 'JetBrains mono', serif;

    --color-page-bg: white;

    --color-punch: #da4167;
    --color-punch-dim: #d8768f;

    --color-alt: #4361ee;

    --color-text-body: #434343;
    --color-text-header: #222;

    --color-a: #323232;
    --color-a-hover: black;
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
  }

  body {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.8;
    max-width: 95%;
    margin: 0 auto;
    color: var(--color-text-body);
    background-color: var(--color-page-bg);
  }

  a {
    color: var(--color-a);
    font-weight: 600;
    text-decoration: none;
    border-bottom: 3px solid var(--color-punch-dim);

    &:hover {
      color: var(--color-a-hover);
      border-bottom-color: var(--color-punch);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-special);
    line-height: 1.3;
  }

  h1 {
    color: var(--color-punch);
    font-size: 3.6rem;
  }

  h2 {
    color: var(--color-text-header);
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
`;

export const GlobalStyles: React.FC = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    {children}
  </>
);
