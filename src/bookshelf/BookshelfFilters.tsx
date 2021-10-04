import { Toggle } from '@/components/Toggle';
import { Box } from '@/elements/Box';

import { GenreFilterToggleStateType, GenresEnum } from '@/types';
import { Flex, FlexJustification } from '../components/Flex';

type BookshelfFilterProps = {
  toggleFilter: (filter: GenresEnum) => void;
  resetFilters: () => void;
  filterStates: GenreFilterToggleStateType;
  genresWithEnoughUses: GenresEnum[];
};

export const BookshelfFilters = ({
  toggleFilter,
  resetFilters,
  filterStates,
  genresWithEnoughUses,
}: BookshelfFilterProps) => {
  const btns = Object.keys(filterStates).map((genre) => {
    if (genresWithEnoughUses.includes(GenresEnum[genre]))
      return (
        <Toggle
          key={genre}
          state={filterStates[genre]}
          content={genre}
          onClick={() => toggleFilter(GenresEnum[genre])}
        />
      );
  });

  return (
    <Box vMargin="xl">
      <Flex flex={FlexJustification.center}>{btns}</Flex>
    </Box>
  );
};
