import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/react';

import { BookshelfFilters } from '@/bookshelf/BookshelfFilters';
import { BookshelfMasonryGrid } from '@/bookshelf/BookshelfMasonryGrid';
import { IconNavList } from '@/components/IconNavList';

import { GenreFilterToggleStateType, GenresEnum } from '@/types';
import { Box } from '@/components/Box';

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
      <BookshelfHeader />
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

const BookshelfHeader: React.FC = () => {
  const s = css`
    text-align: center;

    & p {
      text-align: left;
    }
  `;

  return (
    <div css={s}>
      <h1>Tyler's Bookshelf</h1>
      <IconNavList includeHomeLink />

      <Box>
        <p>
          I love reading and discussing books. So, it just felt right to throw together a list of
          some of my favorites for others to peruse.
        </p>
        <p>
          My favorite genres are sci-fi, fantasy, graphic novels, and nonfiction adventure. I read
          around a book a week and am always trying to read more books than my wife in a year. I was
          close in 2020, but she's crushed me every other year.
        </p>
      </Box>
    </div>
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
