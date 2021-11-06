import { css } from '@emotion/react';
import { Box } from '@/elements/Box';
import { GenreFilterToggleStateType, GenresConst, GenreType } from '@/types';
import { Flex, FlexJustification } from '../Flex';
import { color, font, spacing } from '@/constants';

const CONTAINER_SX = css`
  margin: ${spacing.huge} auto;
`;

const TOGGLE_SX = css`
  padding: ${spacing.md} ${spacing.xl};
  margin: ${spacing.sm};
  border: none;
  border-radius: 20px;
  font-size: ${font.size.xs};
  color: ${color.fontBaseDark};
  font-family: ${font.family.chip};
  cursor: pointer;
  transition: all 0.2s;
`;

const ACTIVE_TOGGLE_SX = css`
  background: ${color.bgPrimary};
  &:hover {
    background: ${color.bgPrimaryHover};
    color: ${color.fontBaseDark};
  }
`;

const INACTIVE_TOGGLE_SX = css`
  &:hover {
    background: ${color.bgBaseHover};
    color: ${color.fontBaseDark};
  }
`;

type BookshelfFilterProps = {
  toggleFilter: (filter: GenreType) => void;
  filterStates: GenreFilterToggleStateType;
};

export const BookshelfFilters = ({ toggleFilter, filterStates }: BookshelfFilterProps) => {
  const filtersWithEnoughBooks = Object.keys(filterStates) as GenreType[];
  const btns = filtersWithEnoughBooks.map((genre) => {
    return (
      <Pill
        key={genre}
        state={filterStates[genre]}
        content={genre}
        onClick={() => toggleFilter(genre)}
      />
    );
  });

  return (
    <Box sx={CONTAINER_SX}>
      <Flex flex={FlexJustification.center}>{btns}</Flex>
    </Box>
  );
};

type PillProps = {
  content: string;
  state: boolean;
  onClick: () => void;
};

const Pill = ({ onClick, state, content }: PillProps) => {
  return (
    <button css={[TOGGLE_SX, state ? ACTIVE_TOGGLE_SX : INACTIVE_TOGGLE_SX]} onClick={onClick}>
      {content}
    </button>
  );
};
