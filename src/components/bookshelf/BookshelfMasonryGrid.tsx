import { useState, useEffect, useLayoutEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import { GenreType } from '@/types';

type BookType = {};

type Props = {
  activeFilters: GenreType[];
};

export const BookshelfMasonryGrid: React.FC<Props> = ({ activeFilters }) => {
  const [loading, setLoading] = useState<Boolean>(true);

  const query = useStaticQuery(graphql`
    {
      allBookDataYaml {
        nodes {
          cover {
            childImageSharp {
              gatsbyImageData(width: 300, placeholder: DOMINANT_COLOR)
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

  const books = query.allBookDataYaml.nodes;

  useLayoutEffect(() => {
    console.log('Layout effect reran');
  }, [activeFilters]);

  console.log(books);
  const gutterInPixels = 10;

  // Will make these dynamic based on window size
  const columnWidth = 300;
  const columnCount = 4;

  const columnHeights = new Array(columnCount).fill(0);
  const columnsOfCovers = new Array(columnCount).fill(null).map(() => Array(0));

  for (let book of books) {
    const columnIndexForNextBook = getShortestColumnIndex(columnHeights);
    console.log('colIdxToAddTo', columnIndexForNextBook);
    console.log('heights', columnHeights);
    console.log('covers', columnsOfCovers);
    columnsOfCovers[columnIndexForNextBook].push(book);
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
          className={`column-${i}`}
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
