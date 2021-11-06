import inquirer from 'inquirer';
import { GenresConst } from '../../src/types';

export function promptForGenres() {
  return inquirer.prompt([
    {
      type: 'checkbox',
      loop: false,
      message: 'Select >= 1 genre',
      name: 'genres',
      choices: GenresConst,
      pageSize: GenresConst.length,
      validate: (answer) => {
        if (answer.length < 1) {
          return 'You must choose at least one genre.';
        }
        return true;
      },
    },
  ]);
}
