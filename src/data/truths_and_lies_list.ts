import { fisherYatesShuffle } from '@/utils/fisher_yates_shuffle';

export type TruthOrLie = {
  statement: string;
  truthyness: boolean;
};

const truths = [
  'Hates bread',
  'High jumped 5\'10"',
  'Collects $1 casino chips',
  'Has a green thumb',
  'Worked as an architectural model maker',
  'Is a better than average juggler',
  'Owns over 100 board games',
  'Has been pushed through the water by dolphins',
  'Won an ultimate frisbee silver medal',
  'Designed mini-golf courses as a kid',
  "Doesn't believe in split ends",
  'Prefers dinner over dessert',
  'Loves The Beatles',
  'Loves Ratatat',
  'Lactose-tolerant',
  'Favorite prime is 1000000000000066600000000000001',
  'Could dunk a basketball',
  'Prefers tabs',
];

const lies = [
  'Jumped out of an airplane',
  'Can hold his breath for 2 minutes',
  'Caught all the Pokemon',
  'Can do a backflip',
  'Speaks fluent Spanish',
  'Has a son with the middle name Danger',
  'Can ride a unicycle',
  'Can start a fire with just sticks',
  'Loves Phish',
  'Loves Ed Shereen',
  'Favorite prime is 8675309',
  'Can dunk a basketball',
  'Prefers spaces',
];

const truthObjs = truths.map((s) => ({ statement: s, truthyness: true }));
const lieObjs = lies.map((s) => ({ statement: s, truthyness: false }));

export const truthsAndLiesList: TruthOrLie[] = fisherYatesShuffle([...truthObjs, ...lieObjs]);
