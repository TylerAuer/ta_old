import bookData from './book_data.json';
import { GenresConst as genresList, GenreType } from '../../types';
import { existsSync } from 'fs';
import path from 'path';

bookData.forEach((book) => {
  describe(`Validate ${book.title}`, () => {
    const { title, pages, genres, goodreads_url, library_url, indiebound_url, cover } = book;

    it('has title', () => {
      expect(typeof title).toBe('string');
      expect(title.length).toBeGreaterThanOrEqual(2);
    });

    it('has pages', () => {
      expect(typeof pages).toBe('string');
      const pagesAsInt = parseInt(pages, 10);
      expect(pagesAsInt).toBeGreaterThan(20);
    });

    it('has urls', () => {
      expect(typeof goodreads_url).toBe('string');
      expect(typeof library_url).toBe('string');
      expect(typeof indiebound_url).toBe('string');

      expect(goodreads_url.length).toBeGreaterThanOrEqual(30);
      expect(library_url.length).toBeGreaterThanOrEqual(30);
      expect(indiebound_url.length).toBeGreaterThanOrEqual(30);
    });

    it('has genre(s) from GenreType', () => {
      expect(genres.length).toBeGreaterThanOrEqual(1);
      genres.forEach((genre) => {
        expect(genresList.includes(genre as GenreType)).toBe(true);
      });
    });

    it('has cover image', () => {
      const hasCover = existsSync(path.join(__dirname, cover));
      expect(hasCover).toBe(true);
    });
  });
});
