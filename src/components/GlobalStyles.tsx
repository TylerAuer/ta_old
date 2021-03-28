import React from 'react';
import { Global, css } from '@emotion/react';
import { SPACING } from '@/styles/spacing';

const globalStyles = css`
  :root {
    --font-body: 'nunito', sans-serif;
    --font-special: 'JetBrains mono', serif;

    --color-page-bg: white;

    --color-text-body: #434343;
    --color-h1-and-h2: #222;
    --color-h2-border: #222;
    --color-h3-h4-h5-h6: #da4167;

    --color-headline: #da4167;

    --color-a: #3c3c3c;
    --color-a-hover: black;
    --color-a-underline: #d8768f;
    --color-a-underline-hover: #da4167;

    --unused: #4361ee;
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
    margin: 0;
    color: var(--color-text-body);
    background-color: var(--color-page-bg);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-special);
    line-height: 1.4;
  }

  h1,
  h2 {
    color: var(--color-h1-and-h2);
    margin: ${SPACING.xl} auto ${SPACING.sm} auto;
  }

  h2 {
    border-bottom: 3px solid var(--color-h2-border);
  }

  h3,
  h4,
  h5,
  h6 {
    color: var(--color-h3-h4-h5-h6);
    margin: ${SPACING.lg} auto ${SPACING.xs} auto;
  }

  a {
    color: var(--color-a);
    font-weight: 800;
    text-decoration: none;
    border-bottom: 3px solid var(--color-a-underline);

    &:hover {
      color: var(--color-a-hover);
      border-bottom-color: var(--color-a-underline-hover);
    }
  }
`;

export const GlobalStyles: React.FC = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    {children}
  </>
);
