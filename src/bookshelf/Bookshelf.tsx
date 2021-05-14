import React, { useState } from 'react';

import { BookshelfFilters } from '@/bookshelf/BookshelfFilters';
import { BookshelfMasonryGrid } from '@/bookshelf/BookshelfMasonryGrid';

import { GenreFilterToggleStateType, GenresEnum } from '@/types';

const initialToggleState = generateInitialActiveFilterState();

export const Bookshelf: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState(initialToggleState);

  const toggleFilter = (filterToToggle: GenresEnum) => {
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

// Grabs each genre from the enum and populates and object
// with a key for each genre as the key set to false
function generateInitialActiveFilterState(): GenreFilterToggleStateType {
  const state = {};
  for (let genre in GenresEnum) {
    state[genre] = false;
  }
  return state as GenreFilterToggleStateType; // TS doesn't understand my genius, so override it
}
