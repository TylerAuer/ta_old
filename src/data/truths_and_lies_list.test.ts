import { truthsAndLiesList } from './truths_and_lies_list';

const TITLE_LIMIT = 30;

describe('Validate truths and lies formatting', () => {
  truthsAndLiesList.forEach((tol) => {
    let trimmedTitle = tol.statement.slice(0, TITLE_LIMIT + 1);
    if (trimmedTitle.length > TITLE_LIMIT) {
      trimmedTitle += '...';
    }
    describe(`"${trimmedTitle}"`, () => {
      it('begins with "Tyler " or "Tyler\'s', () => {
        expect(tol.statement.startsWith('Tyler ') || tol.statement.startsWith("Tyler's")).toBe(
          true,
        );
      });
    });
  });
});
