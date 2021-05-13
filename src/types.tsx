import { SerializedStyles } from '@emotion/react';

export type HtmlElementPropsType = {
  sx?: SerializedStyles;
  id?: string;
  className?: string;
};

export type GenreFilterToggleType = {
  adventure: boolean;
  fantasy: boolean;
  fiction: boolean;
  'graphic novel': boolean;
  nonfiction: boolean;
  'short stories': boolean;
  'sci-fi': boolean;
  'science & math': boolean;
  series: boolean;
  long: boolean;
  short: boolean;
};
