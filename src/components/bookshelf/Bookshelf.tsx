import React, { useState, useEffect, useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/react';

import { BookshelfFilters } from '@/components/bookshelf/BookshelfFilters';
import { BookshelfGrid } from '@/components/bookshelf/BookshelfGrid';
import { IconNavList } from '@/components/IconNavList';
import { Box } from '@/elements/Box';

import { fisherYatesShuffle } from '../../utils/fisher_yates_shuffle';
import { GenreFilterToggleStateType, GenresConst, GenreType, BookFromGQLType } from '@/types';
import { Heading } from '@/elements/Heading';
import { P } from '@/elements/P';
import { font, feature } from '@/constants';

const INTRO_SX = css`
  font-size: ${font.size.sm};
`;

export const Bookshelf: React.FC = () => {
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
          author
          title
          pages
          goodreads_url
          indiebound_url
          library_url
        }
      }
    }
  `);
  const books: BookFromGQLType[] = query.allBookDataJson.nodes;
  const shuffledBooks = useMemo(() => fisherYatesShuffle(books), [books]);
  const [activeFilters, setActiveFilters] = useState(generateInitialActiveFilterState(books));

  const toggleFilter = (filterToToggle: GenreType) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterToToggle]: !prev[filterToToggle],
    }));
  };

  return (
    <>
      <BookshelfHeader />
      <BookshelfFilters toggleFilter={toggleFilter} filterStates={activeFilters} />
      <BookshelfGrid activeFilters={activeFilters} books={shuffledBooks} />
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
      <Heading level={1}>Tyler's Bookshelf</Heading>
      <IconNavList includeHomeLink />
      <Box>
        <P sx={INTRO_SX}>
          I love reading and discussing books. So, it just felt right to throw together a list of
          some of my favorites for others to peruse.
        </P>
        <P sx={INTRO_SX}>
          My favorite genres are sci-fi, fantasy, graphic novels, and nonfiction adventure. I read
          around a book a week and am always trying to read more books than my wife in a year. I was
          close in 2020, but she's crushed me every other year.
        </P>
      </Box>
    </div>
  );
};

// Grabs each genre and populates and object
// with each genre as the key and the value set to false
function generateInitialActiveFilterState(books: BookFromGQLType[]): GenreFilterToggleStateType {
  const genresWithEnoughBooks = getGenresWithEnoughBooks(books);
  const state = {};
  genresWithEnoughBooks.forEach((genre) => {
    state[genre] = false;
  });
  return state as GenreFilterToggleStateType; // TS doesn't understand my genius, so override it
}

function getGenresWithEnoughBooks(books: BookFromGQLType[]): GenreType[] {
  // Counts books with each genre
  const genreCounts = {};
  books.forEach((book) => {
    book.genres.forEach((genre: GenreType) => {
      if (!genreCounts[genre]) genreCounts[genre] = 0;
      genreCounts[genre]++;
    });
  });

  // Filters out genres without enough books
  return Object.keys(genreCounts).filter(
    (genre) => genreCounts[genre] > feature.MINIMUM_GENRE_FOR_FILTER_TO_DISPLAY,
  ) as GenreType[];
}
