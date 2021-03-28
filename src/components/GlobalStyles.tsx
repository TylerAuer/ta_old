import React from 'react';
import { Global, css } from '@emotion/react';
import { COLORS } from '@/styles';

const globalStyles = css`
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
    font-family: 'nunito', sans-serif;
  }

  body {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.8;
    margin: 0;
    color: ${COLORS.grey_darker};
    background-color: ${COLORS.theme_bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'JetBrains mono', serif;
  }

  h1,
  h2 {
    color: ${COLORS.grey_darkest};
  }

  a {
    color: ${COLORS.grey_darker};
    font-weight: 800;
    text-decoration: none;
    border-bottom: 3px solid ${COLORS.theme_highlight_warm_medium};

    &:hover {
      color: black;
      border-bottom-color: ${COLORS.theme_highlight_warmer_dark};
    }
  }
`;

export const GlobalStyles: React.FC = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    {children}
  </>
);
