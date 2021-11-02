import { getLetterGrade } from './get_letter_grade';

describe('getLetterGrade()', () => {
  it('handles "F"s', () => {
    expect(getLetterGrade(50, 50)).toBe('F');
    expect(getLetterGrade(59, 41)).toBe('F');
    expect(getLetterGrade(0, 1)).toBe('F');
    expect(getLetterGrade(0, 0)).toBe('F');
  });
  it('handles "D"s', () => {
    expect(getLetterGrade(60, 40)).toBe('D-');
    expect(getLetterGrade(61, 39)).toBe('D-');
    expect(getLetterGrade(62, 38)).toBe('D-');
    expect(getLetterGrade(63, 37)).toBe('D');
    expect(getLetterGrade(64, 36)).toBe('D');
    expect(getLetterGrade(65, 35)).toBe('D');
    expect(getLetterGrade(66, 34)).toBe('D');
    expect(getLetterGrade(67, 33)).toBe('D+');
    expect(getLetterGrade(68, 32)).toBe('D+');
    expect(getLetterGrade(69, 31)).toBe('D+');
  });
  it('handles "C"s', () => {
    expect(getLetterGrade(70, 30)).toBe('C-');
    expect(getLetterGrade(71, 29)).toBe('C-');
    expect(getLetterGrade(72, 28)).toBe('C-');
    expect(getLetterGrade(73, 27)).toBe('C');
    expect(getLetterGrade(74, 26)).toBe('C');
    expect(getLetterGrade(75, 25)).toBe('C');
    expect(getLetterGrade(76, 24)).toBe('C');
    expect(getLetterGrade(77, 23)).toBe('C+');
    expect(getLetterGrade(78, 22)).toBe('C+');
    expect(getLetterGrade(79, 21)).toBe('C+');
  });
  it('handles "B"s', () => {
    expect(getLetterGrade(80, 20)).toBe('B-');
    expect(getLetterGrade(81, 19)).toBe('B-');
    expect(getLetterGrade(82, 18)).toBe('B-');
    expect(getLetterGrade(83, 17)).toBe('B');
    expect(getLetterGrade(84, 16)).toBe('B');
    expect(getLetterGrade(85, 15)).toBe('B');
    expect(getLetterGrade(86, 14)).toBe('B');
    expect(getLetterGrade(87, 13)).toBe('B+');
    expect(getLetterGrade(88, 12)).toBe('B+');
    expect(getLetterGrade(89, 11)).toBe('B+');
  });
  it('handles "A"s', () => {
    expect(getLetterGrade(90, 10)).toBe('A-');
    expect(getLetterGrade(91, 9)).toBe('A-');
    expect(getLetterGrade(92, 8)).toBe('A-');
    expect(getLetterGrade(93, 7)).toBe('A');
    expect(getLetterGrade(94, 6)).toBe('A');
    expect(getLetterGrade(95, 5)).toBe('A');
    expect(getLetterGrade(96, 4)).toBe('A');
    expect(getLetterGrade(97, 3)).toBe('A+');
    expect(getLetterGrade(98, 2)).toBe('A+');
    expect(getLetterGrade(99, 1)).toBe('A+');
    expect(getLetterGrade(100, 0)).toBe('A+');
  });
});
