import React, { useState } from 'react';

import { BookshelfFilters } from '@/components/bookshelf/BookshelfFilters';
import { BookshelfMasonryGrid } from '@/components/bookshelf/BookshelfMasonryGrid';

import { BookType, GenreType } from '@/types';

export const Bookshelf: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<GenreType[]>([]);

  const addFilter = (filterToAdd: GenreType) => {
    setActiveFilters((prev) => [...prev, filterToAdd]);
  };

  const removeFilter = (filterToRemove: GenreType) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filterToRemove));
  };

  const resetFilters = () => setActiveFilters([]);

  return (
    <>
      <BookshelfFilters
        addFilter={addFilter}
        removeFilter={removeFilter}
        resetFilters={resetFilters}
        activeFilters={activeFilters}
      />
      <BookshelfMasonryGrid activeFilters={activeFilters} />
    </>
  );
};
