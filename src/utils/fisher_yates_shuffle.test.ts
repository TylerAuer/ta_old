import { fisherYatesShuffle } from './fisher_yates_shuffle';

beforeAll(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.0);
});

describe('fisherYatesShuffle()', () => {
  const expectedShuffleResult = [2, 3, 4, 5, 1];
  it('can shuffle list in place', () => {
    const list = [1, 2, 3, 4, 5];
    const shuffledList = fisherYatesShuffle(list);
    expect(shuffledList).toEqual(expectedShuffleResult);
  });

  it('can return new list', () => {
    const list = [1, 2, 3, 4, 5];
    const shuffledList = fisherYatesShuffle(list, true);
    expect(shuffledList).toEqual(expectedShuffleResult);
    expect(shuffledList).not.toEqual(list);
  });
});
