import { promptForGenres } from './prompt_for_genres';
import { promptForGoodreadsUrl } from './prompt_for_goodreads_url';
import { scrapeGoodreads } from './scrape_goodreads';
import { appendBookToJson } from './append_book_to_json';

import { BookDataType } from '../../src/types';

scraper();

async function scraper() {
  const { goodreads_url } = await promptForGoodreadsUrl();
  const scrapedData = await scrapeGoodreads(goodreads_url);
  const genres = await promptForGenres();

  const newBookEntry: BookDataType = {
    ...scrapedData,
    ...genres,
  };

  appendBookToJson(newBookEntry);
}
