import inquirer from 'inquirer';
import { GenresEnum } from '../../src/types';

export function promptForGenres() {
  const listOfGenres = [];
  for (const genre in GenresEnum) {
    listOfGenres.push({
      name: genre,
    });
  }

  return inquirer.prompt([
    {
      type: 'checkbox',
      loop: false,
      message: 'Select >= 1 genre',
      name: 'genres',
      choices: listOfGenres,
      pageSize: listOfGenres.length,
      validate: (answer) => {
        if (answer.length < 1) {
          return 'You must choose at least one genre.';
        }
        return true;
      },
    },
  ]);
}
