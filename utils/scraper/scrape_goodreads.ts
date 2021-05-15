import fs from 'fs';
import fetch from 'node-fetch';
import cheerio from 'cheerio';

type ScrappedGoodreadsDataType = {
  title: string;
  author: string;
  cover: string;
  pages: string;
  goodreads_url: string; //'https://www.goodreads.com/book/show/6407014-stitches';
  indiebound_url?: string; //'https://www.indiebound.org/book/9780393068573';
  library_url?: string; //'https://www.worldcat.org/search?q=9780393068573';
};

export const scrapeGoodreads = async (
  goodreads_url: string,
): Promise<ScrappedGoodreadsDataType> => {
  // Grab html from url passed to CLI and initialize cheerio
  const res = await fetch(goodreads_url);
  if (res.status !== 200) throw new Error(`Error with Goodreads fetch. Status code: ${res.status}`);
  const html = await res.text();
  const $ = cheerio.load(html);

  // Scrape HTML for atomic data
  const title = $('#bookTitle').text().trim();
  const author = $('.authorName__container').find('span[itemprop=name]').text().trim();
  const isbn = $('span[itemprop=isbn]').text().trim();
  const pages = $('span[itemprop=numberOfPages]').text().split(' ')[0];

  // Filename without path
  const coverFileName =
    (author + ' ' + title)
      .slice(0, 30)
      .split(/\W|goodreads|author/)
      .join('-') + '.jpg';

  // Path to cover file from root
  const coverDestination = 'src/bookshelf/covers/' + coverFileName;

  // Relative path from book_data.json (must be relative for Gatsby to ingest into GQL)
  const cover = './covers/' + coverFileName;

  // Download cover
  const cover_url = $('.editionCover > img').attr('src');
  const imgRes = await fetch(cover_url);
  const buffer = await imgRes.buffer();
  fs.writeFile(coverDestination, buffer, () => {});

  const indiebound_url = isbn ? 'https://www.indiebound.org/book/' + isbn : null;
  const library_url = isbn ? 'https://www.worldcat.org/search?q=' + isbn : null;

  return {
    title,
    author,
    cover,
    pages,
    goodreads_url,
    indiebound_url,
    library_url,
  };
};
