import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { SetWidth, WIDTHS } from '@/components/SetWidth';
import { Flex, FlexJustification } from '@/components/Flex';
import { SPACING } from '@/styles';
import { Padding } from './Padding';

export const Footer: React.FC = () => {
  return (
    <header>
      <Padding vPadding={SPACING.xxl}>
        <SetWidth>
          <nav>
            <Flex flex={FlexJustification.even}>
              <div>Twitter</div>
              <div>Adventure</div>
              <div>Email</div>
              <div>LinkedIn</div>
            </Flex>
          </nav>
        </SetWidth>
      </Padding>
    </header>
  );
};
