import { SerializedStyles } from '@emotion/react';
import { ImageDataLike } from 'gatsby-plugin-image';

export const GenresConst = [
  'adventure',
  'best of the best',
  'comedy',
  'fantasy',
  'graphic novel',
  'history',
  'memoir',
  'mystery & thriller',
  'picture book',
  'sci-fi',
  'science & math',
  'series',
  'short stories',
  'social & political sciences',
  'sports & games',
  'tech',
  'under the radar',
  'young adult',
] as const;
export type GenreType = typeof GenresConst[number];

export type GenreFilterToggleStateType = { [key in GenreType]: boolean };

export type BookFromGQLType = {
  cover: ImageDataLike;
  genres: GenreType[];
  author: string;
  title: string;
  pages: string;
  goodreads_url: string;
  indiebound_url: string;
  library_url: string;
};

export type BookDataType = {
  title: string;
  cover: string;
  pages: string;
  genres: GenreType[];
  goodreads_url?: string;
  indiebound_url?: string;
  library_url?: string;
};

export type EndpointJsonFile = {
  all: string[];
  posts: string[];
  categories: string[];
  tags: string[];
  otherPages: string[];
  errorPages: string[];
};

export type ElementProps = {
  className?: string;
  id?: string;
  sx?: SerializedStyles;
  dataTestId?: string;
};

export type HeadingLevelsType = 1 | 2 | 3 | 4;

export type IsDeprecatedType = boolean;

export type TruthOrLieStatementType = `Tyler${string}`;
export type TruthOrLieTruthynessType = 'truth' | 'lie';
export type TruthOrLieTupleType = [
  number,
  TruthOrLieTruthynessType,
  TruthOrLieStatementType,
  IsDeprecatedType?,
];
export type TruthOrLieHandleAnswerType = (
  id: number,
  answerGiven: TruthOrLieTruthynessType,
) => void;
export type UserCorrectnessType = 'correct' | 'incorrect' | 'unanswered';
export type TruthOrLieObjectType = {
  id: number;
  statement: TruthOrLieStatementType;
  truthyness: TruthOrLieTruthynessType;
  userCorrectness: UserCorrectnessType;
};
