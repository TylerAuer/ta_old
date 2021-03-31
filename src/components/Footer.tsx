import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { Box } from '@/components/Box';
import { Flex, FlexJustification } from '@/components/Flex';
import { SPACING } from '@/constants';

export const Footer: React.FC = () => {
  return (
    <header>
      <Box vMargin={SPACING.xxxl}>
        <nav>
          <Flex flex={FlexJustification.even}>
            <div>Twitter</div>
            <div>Adventure</div>
            <div>Email</div>
            <div>LinkedIn</div>
          </Flex>
        </nav>
      </Box>
    </header>
  );
};
