import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { BookshelfFilters } from '@/bookshelf/BookshelfFilters';
import { BookshelfMasonryGrid } from '@/bookshelf/BookshelfMasonryGrid';

import { GenreFilterToggleStateType, GenresEnum } from '@/types';

const initialToggleState = generateInitialActiveFilterState();
const MINIMUM_GENRE_FOR_FILTER_TO_DISPLAY = 5;

export const Bookshelf: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState(initialToggleState);
  const [genresWithEnoughUses, setGenresWithEnoughUses] = useState<GenresEnum[]>([]);

  // On mount: counts how many times each genre is used so that filters without enough books
  // can be stripped from the list
  useEffect(() => {
    const genreCounts = {};
    books.forEach((book) => {
      book.genres.forEach((genre) => {
        if (!genreCounts[genre]) genreCounts[genre] = 0;
        genreCounts[genre]++;
      });
    });

    const genresWithMinUses = [];
    Object.entries(genreCounts).forEach(([genre, count]) => {
      if (count >= MINIMUM_GENRE_FOR_FILTER_TO_DISPLAY) genresWithMinUses.push(genre);
    });

    setGenresWithEnoughUses(genresWithMinUses);
  }, []);

  const query = useStaticQuery(graphql`
    {
      allBookDataJson {
        nodes {
          cover {
            childImageSharp {
              gatsbyImageData(width: 450, placeholder: DOMINANT_COLOR)
              resize {
                aspectRatio
              }
            }
            name
          }
          genres
        }
      }
    }
  `);
  const books = query.allBookDataJson.nodes;

  // Don't render until all processing is finished
  if (!genresWithEnoughUses.length) return null;

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
        genresWithEnoughUses={genresWithEnoughUses}
      />
      <BookshelfMasonryGrid activeFilters={activeFilters} books={books} />
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
