function highestProductOf3(arrayOfInts) {

  if (arrayOfInts.length < 3) {
    throw new Error("Array must have at least three integers");
  }

  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);;

  for (let i = 2 ; i < arrayOfInts.length; i++) {
    const int = arrayOfInts[i];

    highestProductOf3 = (
      Math.max(
        highestProductOf2 * int,
        lowestProductOf2 * int,
        highestProductOf3
      )
    );
    
    highestProductOf2 = (
      Math.max(
        highest * int,
        lowest * int,
        highestProductOf2
      )
    );

    lowestProductOf2 = (
      Math.min(
        lowest * int,
        highest * int,
        lowestProductOf2
      )
    );

    highest = Math.max(int, highest);
    lowest = Math.min(int, lowest);
  }
  return highestProductOf3;
}

const arrayOfInts = [10, 20, 1, 30, -50, -50];
console.log(highestProductOf3(arrayOfInts));