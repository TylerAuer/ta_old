import { SerializedStyles } from '@emotion/react';

export type HtmlElementPropsType = {
  sx?: SerializedStyles;
  id?: string;
  className?: string;
};

export enum GenresEnum {
  'adventure' = 'adventure',
  'best of the best' = 'best of the best',
  'comedy' = 'comedy',
  'fantasy' = 'fantasy',
  'graphic novel' = 'graphic novel',
  'history' = 'history',
  'memoir' = 'memoir',
  'mystery & thriller' = 'mystery & thriller',
  'picture book' = 'picture book',
  'sci-fi' = 'sci-fi',
  'science & math' = 'science & math',
  'series' = 'series',
  'short stories' = 'short stories',
  'social & political sciences' = 'social & political sciences',
  'sports & games' = 'sports & games',
  'under the radar' = 'under the radar',
}

export type GenreFilterToggleStateType = { [key in keyof typeof GenresEnum]: boolean };

export type BookDataType = {
  title: string;
  cover: string;
  pages: string;
  genres: GenresEnum[];
  goodreads_url?: string;
  indiebound_url?: string;
  library_url?: string;
};
