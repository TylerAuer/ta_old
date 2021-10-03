import { css } from '@emotion/react';
import { Box } from '@/elements/Box';
import { SPACING } from '@/constants';
import { IconNavList } from './IconNavList';
import { A, Heading } from '@/elements';

const CONTAINER_SX = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${SPACING.xxxl} 0;
`;

const NAME_SX = css`
  margin: 0;
  line-height: 1.2;
  width: auto;
`;

type PropsType = {
  includeHomeLink?: boolean;
};

export function Header({ includeHomeLink = true }: PropsType) {
  return (
    <header>
      <Box sx={CONTAINER_SX}>
        <NameAndShortBio />
        <IconNavList includeHomeLink={includeHomeLink} />
      </Box>
    </header>
  );
}

const NameAndShortBio = () => (
  <div>
    <Heading sx={NAME_SX} level={1}>
      Tyler Auer
    </Heading>
    <div>Teacher turned software developer</div>
  </div>
);
