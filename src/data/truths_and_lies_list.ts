export type TruthOrLie = {
  statement: string;
  truthyness: boolean;
  id: number;
};

const truths = [
  'Tyler hates bread',
  'Tyler high jumped 5\'10"',
  'Tyler collects $1 casino chips',
  'Tyler has a green thumb',
  'Tyler worked as an architectural model maker',
  'Tyler is a better than average juggler',
  'Tyler owns over 100 board games',
  'Tyler has been pushed through the water by dolphins',
  'Tyler won an ultimate frisbee silver medal',
  'Tyler designed mini-golf courses as a kid',
  "Tyler doesn't believe in split ends",
  'Tyler prefers dinner over dessert',
  'Tyler loves The Beatles',
  'Tyler loves Ratatat',
  'Tyler is lactose-tolerant',
  "Tyler's favorite prime is 1000000000000066600000000000001",
  'Tyler prefers tabs',
].map((s) => ({ statement: s, truthyness: true }));

const lies = [
  'Tyler has jumped out of an airplane',
  'Tyler can hold his breath for 2 minutes',
  'Tyler caught all the Pokemon',
  'Tyler can do a backflip',
  'Tyler speaks fluent Spanish',
  'Tyler has a son with the middle name Danger',
  'Tyler can ride a unicycle',
  'Tyler can start a fire with just sticks',
  'Tyler loves Phish',
  'Tyler loves Ed Shereen',
  "Tyler's favorite prime is 8675309",
  'Tyler can dunk a basketball',
  'Tyler prefers spaces',
].map((s) => ({ statement: s, truthyness: false }));

export const truthsAndLiesList: TruthOrLie[] = [...truths, ...lies].map((tol, id) => ({
  ...tol,
  id,
}));

export const truthsAndLies: { [key: number]: TruthOrLie } = {};
truthsAndLiesList.forEach((tol) => {
  truthsAndLies[tol.id] = tol;
});
