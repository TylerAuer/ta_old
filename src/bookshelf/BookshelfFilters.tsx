import { Toggle } from '@/components/Toggle';
import { Box } from '@/components/Box';

import { GenreFilterToggleStateType, GenresEnum } from '@/types';
import { Flex, FlexJustification } from '../components/Flex';
import { SPACING } from '@/constants';

type Props = {
  toggleFilter: (filter: GenresEnum) => void;
  resetFilters: () => void;
  filterStates: GenreFilterToggleStateType;
  genresWithEnoughUses: GenresEnum[];
};

export const BookshelfFilters: React.FC<Props> = ({
  toggleFilter,
  resetFilters,
  filterStates,
  genresWithEnoughUses,
}) => {
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
    <Box vMargin={SPACING.xl}>
      <Flex flex={FlexJustification.center}>{btns}</Flex>
    </Box>
  );
};
