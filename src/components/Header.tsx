import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { SetWidth } from '@/components/SetWidth';
import { Flex, FlexJustification } from '@/components/Flex';
import { SPACING } from '@/styles';
import { Padding } from './Padding';

const Left: React.FC = () => (
  <Link to="/">
    <div>@ Tyler Auer</div>
  </Link>
);

const Right: React.FC = () => {
  const s = css`
    margin: 0 ${SPACING.md};
  `;

  return (
    <nav>
      <Link css={s} to="/code">
        Code
      </Link>
      <Link css={s} to="/adventure">
        Adventure
      </Link>
    </nav>
  );
};

export const Header: React.FC = () => {
  return (
    <header>
      <Padding vPadding={SPACING.xxl}>
        <SetWidth>
          <Flex flex={FlexJustification.split}>
            <Left />
            <Right />
          </Flex>
        </SetWidth>
      </Padding>
    </header>
  );
};
