import inquirer from 'inquirer';

export function promptForGoodreadsUrl() {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter GoodReads url with correct cover and ISBN:',
      name: 'goodreads_url',
      validate: (url) => {
        return url.includes('https://www.goodreads.com/')
          ? true
          : "That doesn't seem like a GoodReads url";
      },
    },
  ]);
}
