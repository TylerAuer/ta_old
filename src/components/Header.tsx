import React from 'react';
import { css } from '@emotion/react';

import { Box } from '@/components/Box';
import { Icon } from '@/components/Icon';
import { Flex, FlexJustification } from '@/components/Flex';
import { SPACING } from '@/constants';
import { IconNavList } from './IconNavList';
import { A } from '@/elements';

const Left: React.FC = () => (
  <A
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
  </A>
);

type PropsType = {
  includeHomeLink?: boolean;
};

export function Header({ includeHomeLink = true }: PropsType) {
  return (
    <header>
      <Box vMargin={SPACING.xxxl}>
        <Flex flex={FlexJustification.split}>
          <Left />
          <IconNavList includeHomeLink={includeHomeLink} />
        </Flex>
      </Box>
    </header>
  );
}
