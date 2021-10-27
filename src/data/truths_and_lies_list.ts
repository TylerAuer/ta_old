import { fisherYatesShuffle } from '@/utils/fisher_yates_shuffle';

export type TruthOrLie = {
  statement: string;
  truthyness: boolean;
};

const truths = [
  'hates bread',
  'high jumped 5\'10"',
  'collects $1 casino chips',
  'has a green thumb',
  'worked as an architectural model maker',
  'is a better than average juggler',
  'owns over 100 board games',
  'has been pushed through the water by dolphins',
  'won an ultimate frisbee silver medal',
  'designed mini-golf courses as a kid',
  "doesn't believe in split ends",
  'prefers dinner over dessert',
  'loves The Beatles',
  'loves Ratatat',
  'lactose-tolerant',
  'favorite prime is 1000000000000066600000000000001',
];

const lies = [
  'jumped out of an airplane',
  'can hold his breath for 2 minutes',
  'caught all the Pokemon',
  'can do a backflip',
  'speaks fluent Spanish',
  'has a son with the middle name Danger',
  'can ride a unicycle',
  'can start a fire with just sticks',
  'loves Phish',
  'loves Ed Shereen',
  'favorite prime is 8675309',
];

const truthObjs = truths.map((s) => ({ statement: s, truthyness: true }));
const lieObjs = lies.map((s) => ({ statement: s, truthyness: false }));

export const truthsAndLiesList: TruthOrLie[] = fisherYatesShuffle([...truthObjs, ...lieObjs]);
