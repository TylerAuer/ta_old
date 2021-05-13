import React, { useState } from 'react';

import { BookshelfFilters } from '@/components/bookshelf/BookshelfFilters';
import { BookshelfMasonryGrid } from '@/components/bookshelf/BookshelfMasonryGrid';

import { GenreFilterToggleType } from '@/types';

const initialToggleState: GenreFilterToggleType = {
  adventure: false,
  fantasy: false,
  fiction: false,
  'graphic novel': false,
  nonfiction: false,
  'short stories': false,
  'sci-fi': false,
  'science & math': false,
  series: false,
  long: false,
  short: false,
  'sports & games': false,
  history: false,
  'best of the best': false,
  'young-adult': false,
};

export const Bookshelf: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState(initialToggleState);

  const toggleFilter = (filterToToggle: keyof GenreFilterToggleType) => {
    setActiveFilters((prev) => ({ ...prev, [filterToToggle]: !prev[filterToToggle] }));
  };

  const resetFilters = () => setActiveFilters(initialToggleState);

  return (
    <>
      <BookshelfFilters
        toggleFilter={toggleFilter}
        resetFilters={resetFilters}
        filterStates={activeFilters}
      />
      <BookshelfMasonryGrid activeFilters={activeFilters} />
    </>
  );
};
