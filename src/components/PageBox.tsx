import { css } from '@emotion/react';

import { Box } from '@/elements/Box';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

type PropsType = {
  children: JSX.Element;
  includeHomeLink?: boolean;
};

// Wraps the contents of a page and adds a Header and Footer such that the Footer
// is always at the bottom of the window or the bottom of the document whatever is lower
export function PageBox({ children, includeHomeLink = true }: PropsType) {
  return (
    <Box
      sx={css`
        display: flex;
        flex-direction: column;
        justify-content: start;
        min-height: 100vh;
      `}
    >
      <Box
        sx={css`
          flex-grow: 1;
        `}
      >
        <Header includeHomeLink={includeHomeLink} />
        {children}
      </Box>
      <Footer includeHomeLink={includeHomeLink} />
    </Box>
  );
}
