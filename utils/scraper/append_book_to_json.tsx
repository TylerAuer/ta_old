import fs from 'fs';

import { BookDataType } from '../../src/types';

export function appendBookToJson(book: BookDataType): void {
  // Load the JSON file in the old state
  const file = fs.readFileSync('src/bookshelf/book_data.json', 'utf-8');
  const data = JSON.parse(file);

  // Append the new book info
  data.push(book);

  // Overwrite the old file
  fs.writeFileSync('src/bookshelf/book_data.json', JSON.stringify(data, null, 2));
}
