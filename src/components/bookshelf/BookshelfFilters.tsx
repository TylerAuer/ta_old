import { css } from '@emotion/react';

import { Toggle } from '@/components/Toggle';
import { Box } from '@/components/Box';

import { GenreFilterToggleType } from '@/types';
import { Flex, FlexJustification } from '../Flex';
import { SPACING } from '@/constants';

type Props = {
  toggleFilter: (filter: keyof GenreFilterToggleType) => void;
  resetFilters: () => void;
  filterStates: GenreFilterToggleType;
};

export const BookshelfFilters: React.FC<Props> = ({ toggleFilter, resetFilters, filterStates }) => {
  const btns = Object.keys(filterStates).map((genre) => (
    <Toggle
      state={filterStates[genre]}
      content={genre}
      onClick={() => toggleFilter(genre as keyof GenreFilterToggleType)}
    />
  ));

  return (
    <Box vMargin={SPACING.xl}>
      <Flex flex={FlexJustification.center}>{btns}</Flex>
    </Box>
  );
};
