import fs from 'fs';
import { BookDataType } from '../../src/types';
import { pathToBookData } from './constants';

export function appendBookToJson(book: BookDataType): void {
  // Load the JSON file in the old state
  const file = fs.readFileSync(pathToBookData, 'utf-8');
  const data = JSON.parse(file);

  // Append the new book info
  data.push(book);

  // Overwrite the old file
  fs.writeFileSync(pathToBookData, JSON.stringify(data, null, 2));
}
