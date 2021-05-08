import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

import { Box } from '@/components/Box';
import { Icon } from '@/components/Icon';
import { Flex, FlexJustification } from '@/components/Flex';
import { SPACING } from '@/constants';

const Left: React.FC = () => (
  <Link
    css={css`
      color: var(--color-punch);
      font-family: var(--font-special);
      font-size: 3rem;
      font-weight: 600;
    `}
    to="/"
  >
    Tyler Auer
  </Link>
);

const Right: React.FC = () => {
  const s = css`
    & a {
      margin: 0 ${SPACING.md};
    }

    & img {
      display: inline-block;
      width: 3rem;
    }
  `;

  return (
    <nav css={s}>
      <a href="https://github.com/TylerAuer">
        <Icon icon="github" />
      </a>
      <a href="https://twitter.com/TylerAuer">
        <Icon icon="twitter" />
      </a>
      <Link to="/code">
        <Icon icon="code" />
      </Link>
      <Link to="/adventure">
        <Icon icon="mountains" />
      </Link>
    </nav>
  );
};

export const Header: React.FC = () => {
  return (
    <header>
      <Box vMargin={SPACING.xxxl}>
        <Flex flex={FlexJustification.split}>
          <Left />
          <Right />
        </Flex>
      </Box>
    </header>
  );
};
