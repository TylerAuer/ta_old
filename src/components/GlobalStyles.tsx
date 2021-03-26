import React from 'react';
import { Global, css } from '@emotion/react';
import { colors } from '@/styles';

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
    line-height: 1.6;
    margin: 0;
    color: ${colors['grey-dark']};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'JetBrains mono', serif;
  }
`;

export const GlobalStyles: React.FC = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    {children}
  </>
);
