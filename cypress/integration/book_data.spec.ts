/// <reference types="cypress" />
import { GenresEnum } from '../../src/types';
import bookData from '../../src/bookshelf/book_data.json';

describe('Check expected fields', () => {
  bookData.forEach((book) => {
    it(`${book.title} has expected fields`, () => {
      expect(book.title).to.exist;
      expect(book.pages).to.exist;
      expect(book.genres).to.exist;

      expect(book.amazon_url).to.exist;
      expect(book.goodreads_url).to.exist;
      expect(book.indiebound_url).to.exist;
      expect(book.library_url).to.exist;
    });
  });
});

describe('Check genres', () => {
  context('every book has at least one genre', () => {
    bookData.forEach((book) => {
      it(`${book.title} has at least one genre`, () => {
        expect(book.genres.length).to.be.greaterThan(0);
      });
    });
  });

  context('every genre is in GenreEnum', () => {
    const genreSet = new Set<string>();
    bookData.forEach((book) => {
      book.genres.forEach((genre) => genreSet.add(genre));
    });
    [...genreSet].forEach((genre) => {
      it(`${genre} is in the GenreEnum`, () => {
        expect(GenresEnum[genre] === genre).to.be.true;
      });
    });
  });

  const minUseOfGenre = 5;
  context(`every genre is used with >= ${minUseOfGenre} books`, () => {
    const genreUseCount: { [key: string]: number } = {};
    bookData.forEach((book) => {
      book.genres.forEach((genre) => {
        if (!genreUseCount[genre]) genreUseCount[genre] = 0;
        genreUseCount[genre]++;
      });
    });
    Object.entries(genreUseCount).forEach(([genre, count]) => {
      it(`${genre} is used >= ${minUseOfGenre} times`, () => {
        expect(count).to.be.greaterThan(minUseOfGenre - 1);
      });
    });
  });
});
