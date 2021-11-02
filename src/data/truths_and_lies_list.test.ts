import { tolRawData } from './truths_and_lies_data';

const TITLE_LIMIT = 30;

describe('Validate truths and lies tuples', () => {
  tolRawData.forEach(([id, truthyness, statement]) => {
    let trimmedTitle = statement.slice(0, TITLE_LIMIT + 1);
    if (trimmedTitle.length > TITLE_LIMIT) {
      trimmedTitle += '...';
    }
    describe(`"${trimmedTitle}"`, () => {
      it('begins with "Tyler " or "Tyler\'s', () => {
        expect(statement.startsWith('Tyler ') || statement.startsWith("Tyler's")).toBe(true);
      });
      it('has id <500 for truths and >=500 for lies', () => {
        if (truthyness === 'truth') {
          expect(id).toBeLessThan(500);
        } else if (truthyness === 'lie') {
          expect(id).toBeGreaterThanOrEqual(500);
        } else {
          throw new Error('Invade truthyness type');
        }
      });
    });
  });
});
