type LetterGradeType = `${'A' | 'B' | 'C' | 'D'}${'+' | '-' | ''}` | 'F';

export function getLetterGrade(correct: number, incorrect: number): LetterGradeType {
  const percent = Math.round((correct / (correct + incorrect)) * 100);

  let letter: 'A' | 'B' | 'C' | 'D' | 'F';
  if (percent >= 100) {
    return 'A+';
  } else if (percent >= 90) {
    letter = 'A';
  } else if (percent >= 80) {
    letter = 'B';
  } else if (percent >= 70) {
    letter = 'C';
  } else if (percent >= 60) {
    letter = 'D';
  } else {
    return 'F';
  }

  if (percent % 10 >= 7) {
    return `${letter}+` as LetterGradeType;
  } else if (percent % 10 >= 3) {
    return letter;
  } else {
    return `${letter}-` as LetterGradeType;
  }
}
