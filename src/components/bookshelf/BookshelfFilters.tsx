import { GenreType } from '@/types';

type Props = {
  addFilter: (filter: GenreType) => void;
  removeFilter: (filter: GenreType) => void;
  resetFilters: () => void;
  activeFilters: GenreType[];
};

export const BookshelfFilters: React.FC<Props> = ({
  addFilter,
  removeFilter,
  resetFilters,
  activeFilters,
}) => {
  return null;
};
