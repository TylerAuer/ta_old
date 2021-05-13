import { GenreFilterToggleType } from '@/types';

type Props = {
  toggleFilter: (filter: keyof GenreFilterToggleType) => void;
  resetFilters: () => void;
  filterStates: GenreFilterToggleType;
};

export const BookshelfFilters: React.FC<Props> = ({ toggleFilter, resetFilters, filterStates }) => {
  const btns = Object.keys(filterStates).map((genre) => (
    <button onClick={() => toggleFilter(genre as keyof GenreFilterToggleType)}>{genre}</button>
  ));

  return <div>{btns}</div>;
};
