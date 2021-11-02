import { SerializedStyles } from '@emotion/react';
import { ImageDataLike } from 'gatsby-plugin-image';

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
  'tech' = 'tech',
  'under the radar' = 'under the radar',
  'young adult' = 'young adult',
}

export type GenreFilterToggleStateType = { [key in keyof typeof GenresEnum]: boolean };

export type BookFromGQLType = {
  cover: ImageDataLike;
  genres: GenresEnum[];
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
  genres: GenresEnum[];
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
