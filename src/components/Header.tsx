import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

import { Box } from '@/components/Box';
import { Icon } from '@/components/Icon';
import { Flex, FlexJustification } from '@/components/Flex';
import { SPACING } from '@/constants';
import { IconNavList } from './IconNavList';

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
    <Icon
      icon="signature"
      sx={css`
        fill: var(--color-punch);
        width: 15rem;
        filter: drop-shadow(2px 2px var(--color-text-body));
        transition: all 0.2s;
      `}
    />
  </Link>
);

const Right: React.FC = () => {
  return <IconNavList />;
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
