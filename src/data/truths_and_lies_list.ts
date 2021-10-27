export type TruthOrLie = {
  statement: string;
  truthyness: boolean;
  answeredCorrectly?: boolean;
  id: number;
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
  'is lactose-tolerant',
  'favorite prime is 1000000000000066600000000000001',
  'prefers tabs',
].map((s) => ({ statement: s, truthyness: true }));

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
  'can dunk a basketball',
  'prefers spaces',
].map((s) => ({ statement: s, truthyness: false }));

const truthsAndLiesList = [...truths, ...lies].map((tol, id) => ({
  ...tol,
  id,
}));

export const truthsAndLies: { [key: number]: TruthOrLie } = {};

truthsAndLiesList.forEach((tol) => {
  truthsAndLies[tol.id] = tol;
});
