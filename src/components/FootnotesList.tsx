import React from 'react';
import { css } from '@emotion/react';
import { Box } from './Box';

export const FootnoteList: React.FC = ({ children }) => {
  const s = css`
    & ol {
      list-style: none;
      counter-reset: footnote-counter;
      padding: 0;
    }

    & ol li {
      counter-increment: footnote-counter;
      position: relative;
    }

    & ol li:before {
      content: counter(footnote-counter) '.';
      color: var(--color-punch);
      font-family: var(--font-special);
      font-size: 2rem;
    }

    & .footnote-backref {
      border: none;
      margin: 0 1rem;
      color: var(--color-punch);

      &:hover {
        color: var(--color-punch-dark);
      }
    }
  `;

  return <Box css={s}>{children}</Box>;
};
