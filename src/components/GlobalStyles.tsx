import React from 'react';
import { Global, css } from '@emotion/react';
import { color, spacing, font } from '@/constants';

const globalStyles = css`
  :root {
    :visited {
      color: inherit;
    }
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
    font-family: ${font.family.body};
    color: ${color.bgBase};

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
    font-size: ${font.size.sm};
    line-height: 2;
    max-width: 95%;
    margin: 0 auto;
    color: ${color.fontBase};
  }

  /* body {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2;
    margin: 0 auto;
    color: var(--color-text-body);
    max-width: 95%;
  }

  ul,
  ol {
    width: 800px;
    margin: ${spacing.lg} auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.3;
    margin: ${spacing.xl} auto;
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
   */

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
