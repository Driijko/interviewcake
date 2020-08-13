function highestProductOf3(arrayOfInts) {

  if (arrayOfInts.length < 3) {
    throw new Error("Array must have at least three integers");
  }

  const highestInts = [arrayOfInts[0], arrayOfInts[1], arrayOfInts[2]];
  for (let i = 3; i < arrayOfInts.length; i++) {
    const int = arrayOfInts[i];
    let biggestDifference = 0;
    let bestPick = null;
    for (let j = 0; j < highestInts.length; j++) {
      const highInt = highestInts[j];
      if (int > highInt && int - highInt > biggestDifference) {
        biggestDifference = int - highInt;
        bestPick = j;
      }
    }
    if (bestPick !== null) {
      highestInts[bestPick] = int;
    }
  }
  return highestInts.reduce((accumulator, currentValue) => accumulator * currentValue);
}

// const arrayOfInts = [13, 22, 54, 2, 58, 91, 0, 800];
const arrayOfInts = [1, 2, 3, 4];
console.log(highestProductOf3(arrayOfInts));