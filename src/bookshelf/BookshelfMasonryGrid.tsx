import React, { useState } from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';

import { BookModal } from './BookModal';
import { useWindowWidth } from '@/hooks/useWindowWidth';

import { GenreFilterToggleStateType } from '@/types';

type Props = {
  activeFilters: GenreFilterToggleStateType;
  books: any;
};

export const BookshelfMasonryGrid: React.FC<Props> = ({ activeFilters, books }) => {
  const [userSelectedBook, setUserSelectedBook] = useState(null);
  const windowWidth = useWindowWidth();

  const closeModal = () => setUserSelectedBook(null);

  // Don't render anything until the window width is known
  if (windowWidth === 0) {
    return null;
  }

  let filteredBooks = [];
  const isAnyFilterActive = Object.values(activeFilters).some((value) => value);
  if (isAnyFilterActive) {
    for (let book of books) {
      if (book.genres) {
        for (let genre of book.genres) {
          if (genre && activeFilters[genre]) {
            filteredBooks.push(book);
            break;
          }
        }
      }
    }
  } else {
    filteredBooks = books;
  }

  // Design preferences
  const gutterInPixels = 10;
  const maximumColumnWidth = 200;

  // Compute columns values and generate arrays to hold heights and objects
  const columnCount = Math.ceil(windowWidth / maximumColumnWidth);
  const columnWidth = windowWidth / columnCount;
  const columnHeights = new Array(columnCount).fill(0);
  const columnsOfCovers = new Array(columnCount).fill(null).map(() => Array(0));

  // Populate columns with appropriate books
  for (let book of filteredBooks) {
    const columnIndexForNextBook = getShortestColumnIndex(columnHeights);

    // Add book to correct column
    columnsOfCovers[columnIndexForNextBook].push(book);

    // Adjust the height of column (include gutter)
    columnHeights[columnIndexForNextBook] +=
      Math.round(columnWidth / book.cover.childImageSharp.resize.aspectRatio) + gutterInPixels;
  }

  return (
    <>
      {userSelectedBook && <BookModal book={userSelectedBook} closeModal={closeModal} />}
      <section
        css={css`
          display: flex;
          align-items: flex-start;
        `}
      >
        {columnsOfCovers.map((col, i) => (
          <div
            key={`column-${i}`}
            css={css`
              width: ${columnWidth}px;
              display: inline-block;
              margin: 0 ${gutterInPixels / 2}px;
            `}
          >
            {col.map((book, i) => (
              <GatsbyImage
                key={book.title || i.toString()}
                alt={book.title || i.toString()}
                image={getImage(book.cover)}
                onClick={() => setUserSelectedBook(book)}
                css={css`
                  cursor: pointer;
                `}
              />
            ))}
          </div>
        ))}
      </section>
    </>
  );
};

const getShortestColumnIndex = (heights: number[]): number => {
  let minIndex = -1;
  let minHeightSeen = Infinity;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] < minHeightSeen) {
      minHeightSeen = heights[i];
      minIndex = i;
    }
  }

  if (minIndex === -1 || minHeightSeen === Infinity) {
    throw new Error('Invalid computation of shortest column height');
  }

  return minIndex;
};
