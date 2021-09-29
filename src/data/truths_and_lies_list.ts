import { fisherYatesShuffle } from '@/utils/fisher_yates_shuffle';

export type TruthOrLie = {
  statement: string;
  truthyness: boolean;
};

const truths: TruthOrLie[] = [
  {
    statement: 'hates bread',
    truthyness: true,
  },
  {
    statement: 'high jumped 5\'10"',
    truthyness: true,
  },
  {
    statement: 'collects $1 casino chips',
    truthyness: true,
  },
  {
    statement: 'has a green thumb',
    truthyness: true,
  },
  {
    statement: 'worked as an architectural model maker',
    truthyness: true,
  },
  {
    statement: 'is a better than average juggler',
    truthyness: true,
  },
  {
    statement: 'owns over 100 board games',
    truthyness: true,
  },
  {
    statement: 'has been pushed through the water by dolphins',
    truthyness: true,
  },
  {
    statement: 'won an ultimate frisbee silver medal',
    truthyness: true,
  },
  {
    statement: 'designed mini-golf courses as a kid',
    truthyness: true,
  },
  {
    statement: "doesn't believe in split ends",
    truthyness: true,
  },
  {
    statement: 'prefers dinner over dessert',
    truthyness: true,
  },
  {
    statement: 'loves The Beatles',
    truthyness: true,
  },
  {
    statement: 'loves Ratatat',
    truthyness: true,
  },
  {
    statement: 'lactose-tolerant',
    truthyness: true,
  },
];

// Lies //////////////////////////////////////////////////////////////////////////////////////////
const lies = [
  {
    statement: 'jumped out of an airplane',
    truthyness: false,
  },
  {
    statement: 'can hold his breath for 2 minutes',
    truthyness: false,
  },
  {
    statement: 'caught all the Pokemon',
    truthyness: false,
  },
  {
    statement: 'can do a backflip',
    truthyness: false,
  },
  {
    statement: 'speaks fluent Spanish',
    truthyness: false,
  },
  {
    statement: 'has a son with the middle name Danger',
    truthyness: false,
  },
  {
    statement: 'can ride a unicycle',
    truthyness: false,
  },
  {
    statement: 'can start a fire with just sticks',
    truthyness: false,
  },
  {
    statement: 'loves Phish',
    truthyness: false,
  },
  {
    statement: 'loves Ed Shereen',
    truthyness: false,
  },
];

export const truthsAndLiesList = fisherYatesShuffle([...truths, ...lies]);
