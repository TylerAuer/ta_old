import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

import { Box } from '@/components/Box';
import { Icon } from '@/components/Icon';
import { Flex, FlexJustification } from '@/components/Flex';
import { SPACING } from '@/constants';

const Left: React.FC = () => (
  <Link to="/">
    <div>Tyler Auer</div>
  </Link>
);

const Right: React.FC = () => {
  const s = css`
    margin: 0 ${SPACING.md};
  `;

  return (
    <nav>
      <Link css={s} to="/code">
        <Icon icon="code" />
      </Link>
      <Link css={s} to="/adventure">
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
