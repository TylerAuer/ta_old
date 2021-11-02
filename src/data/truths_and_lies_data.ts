import { TruthOrLieTupleType } from 'types';

export const tolRawData: TruthOrLieTupleType[] = [
  [0, 'truth', 'Tyler hates bread'],
  [1, 'truth', 'Tyler high jumped 5\'10"'],
  [2, 'truth', 'Tyler collects $1 casino chips'],
  [3, 'truth', 'Tyler has a green thumb'],
  [4, 'truth', 'Tyler worked as an architectural model maker'],
  [5, 'truth', 'Tyler is a better than average juggler'],
  [6, 'truth', 'Tyler owns over 100 board games'],
  [7, 'truth', 'Tyler has been pushed through the water by dolphins'],
  [8, 'truth', 'Tyler won an ultimate frisbee silver medal'],
  [9, 'truth', 'Tyler designed mini-golf courses as a kid (for fun)'],
  [10, 'truth', "Tyler doesn't believe in split ends"],
  [11, 'truth', 'Tyler prefers dinner over dessert'],
  [12, 'truth', 'Tyler loves The Beatles'],
  [13, 'truth', 'Tyler loves Ratatat'],
  [14, 'truth', 'Tyler is lactose-tolerant'],
  [15, 'truth', "Tyler's favorite prime is 8675309"],
  //////////////////////////////////////////////////////////////////////////////
  [500, 'lie', 'Tyler has jumped out of an airplane'],
  [501, 'lie', 'Tyler can hold his breath for 2 minutes'],
  [502, 'lie', 'Tyler caught all the Pokemon'],
  [503, 'lie', 'Tyler can do a backflip'],
  [504, 'lie', 'Tyler speaks fluent Spanish'],
  [505, 'lie', 'Tyler has a son with the middle name Danger'],
  [506, 'lie', 'Tyler can ride a unicycle'],
  [507, 'lie', 'Tyler can start a fire with just sticks'],
  [508, 'lie', 'Tyler loves Phish'],
  [509, 'lie', 'Tyler loves Ed Shereen'],
  [510, 'lie', 'Tyler can dunk a basketball'],
  [511, 'lie', 'Tyler prefers spaces'],
];

export const tolRawDataWithoutDeprecatedTols = tolRawData.filter((tol) => !tol[3]);
