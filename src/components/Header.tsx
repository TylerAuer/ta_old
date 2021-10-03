import React from 'react';
import { css } from '@emotion/react';

import { Box } from '@/elements/Box';
import { Icon } from '@/constants/Icon';
import { Flex, FlexJustification } from '@/components/Flex';
import { SPACING } from '@/constants';
import { IconNavList } from './IconNavList';
import { A, Heading } from '@/elements';

// const Left: React.FC = () => (
//   <A
//     css={css`
//       color: var(--color-punch);
//       font-family: var(--font-special);
//       font-size: 3rem;
//       font-weight: 600;
//     `}
//     to="/"
//   >
//     <Icon
//       icon="signature"
//       sx={css`
//         fill: var(--color-punch);
//         width: 15rem;
//         filter: drop-shadow(2px 2px var(--color-text-body));
//         transition: all 0.2s;
//       `}
//     />
//   </A>
// );

const CONTAINER_SX = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${SPACING.xxxl} 0;
`;

type PropsType = {
  includeHomeLink?: boolean;
};

export function Header({ includeHomeLink = true }: PropsType) {
  return (
    <header>
      <Box sx={CONTAINER_SX}>
        <Left />
        <IconNavList includeHomeLink={includeHomeLink} />
      </Box>
    </header>
  );
}

const NAME_SX = css`
  margin: 0;
  line-height: 1.2;
  width: auto;
`;

const Left = () => (
  <div>
    <Heading sx={NAME_SX} level={1}>
      Tyler Auer
    </Heading>
    <div>Teacher turned software developer</div>
  </div>
);
