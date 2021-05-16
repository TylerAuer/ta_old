import { css } from '@emotion/react';

import { Toggle } from '@/components/Toggle';
import { Box } from '@/components/Box';

import { GenreFilterToggleStateType, GenresEnum } from '@/types';
import { Flex, FlexJustification } from '../components/Flex';
import { SPACING } from '@/constants';

type Props = {
  toggleFilter: (filter: GenresEnum) => void;
  resetFilters: () => void;
  filterStates: GenreFilterToggleStateType;
};

export const BookshelfFilters: React.FC<Props> = ({ toggleFilter, resetFilters, filterStates }) => {
  const btns = Object.keys(filterStates).map((genre) => (
    <Toggle
      state={filterStates[genre]}
      content={genre}
      onClick={() => toggleFilter(GenresEnum[genre])}
    />
  ));

  return (
    <Box vMargin={SPACING.xl}>
      <Flex flex={FlexJustification.center}>{btns}</Flex>
    </Box>
  );
};
