import { useLayoutEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';

import { useWindowWidth } from '@/hooks/useWindowWidth';

import { GenreType } from '@/types';

type Props = {
  activeFilters: GenreType[];
};

export const BookshelfMasonryGrid: React.FC<Props> = ({ activeFilters }) => {
  const windowWidth = useWindowWidth();
  const query = useStaticQuery(graphql`
    {
      allBookDataYaml {
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

  if (windowWidth === 0) return null;

  const books = query.allBookDataYaml.nodes;

  const gutterInPixels = 10;

  // Will make these dynamic based on window size
  const maximumColumnWidth = 200;

  const columnCount = Math.ceil(windowWidth / maximumColumnWidth);
  const columnWidth = windowWidth / columnCount;

  const columnHeights = new Array(columnCount).fill(0);
  const columnsOfCovers = new Array(columnCount).fill(null).map(() => Array(0));

  // Populate columns with appropriate books
  for (let book of books) {
    const columnIndexForNextBook = getShortestColumnIndex(columnHeights);

    // Add book to correct column
    columnsOfCovers[columnIndexForNextBook].push(book);

    // Adjust the height of column (include gutter)
    columnHeights[columnIndexForNextBook] +=
      Math.round(columnWidth / book.cover.childImageSharp.resize.aspectRatio) + gutterInPixels;
  }

  return (
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
          {col.map((book) => (
            <GatsbyImage key={book.title} alt={book.title} image={getImage(book.cover)} />
          ))}
        </div>
      ))}
    </section>
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
