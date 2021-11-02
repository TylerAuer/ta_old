export function fisherYatesShuffle<T>(list: T[], returnNewArray: boolean = false): T[] {
  let currentIndex = list.length;
  let temporaryValue: any;
  let randomIndex: number;
  let arrToReturn: T[] = returnNewArray ? list.slice() : list;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arrToReturn[currentIndex];
    arrToReturn[currentIndex] = arrToReturn[randomIndex];
    arrToReturn[randomIndex] = temporaryValue;
  }

  return arrToReturn;
}
