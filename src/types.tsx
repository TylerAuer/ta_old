import { SerializedStyles } from '@emotion/react';

export type HtmlElementPropsType = {
  sx?: SerializedStyles;
  id?: string;
  className?: string;
};

export type GenreType =
  | 'adventure'
  | 'fantasy'
  | 'fiction'
  | 'graphic novel'
  | 'non-fiction'
  | 'short stories'
  | 'sci-fi'
  | 'science & math'
  | 'series';
