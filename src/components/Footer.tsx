import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

import { Box } from '@/components/Box';
import { Icon } from '@/components/Icon';
import { Flex, FlexJustification } from '@/components/Flex';
import { SPACING } from '@/constants';
import { IconNavList } from './IconNavList';

export const Footer: React.FC = () => {
  const s = css`
    margin: 20rem auto 5rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & div {
      & .name {
        font-size: 3rem;
        color: var(--color-punch);
        font-family: var(--font-special);
        line-height: 1;
      }
      & .desc {
        font-style: italic;
      }
    }

    & nav {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & img {
      width: 2.5rem;
      margin: 1rem 2.5rem;
    }
  `;

  return (
    <footer>
      <Box width="wide" sx={s} vMargin={SPACING.xxxl}>
        <div>
          <div className="name">Tyler Auer</div>
          <div className="desc">Teacher turned developer</div>
        </div>
        <IconNavList />
      </Box>
    </footer>
  );
};
