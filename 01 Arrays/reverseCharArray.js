function reverse(arrayOfChars) {

  const halfLength = Math.ceil(arrayOfChars.length / 2);

  for (let i = 0; i < halfLength; i++) {
    const temp = arrayOfChars[i];
    arrayOfChars[i] = arrayOfChars[arrayOfChars.length - 1 - i];
    arrayOfChars[arrayOfChars.length - 1 - i] = temp;
  }
}

// const arrayOfChars = [
//   "a",
//   "b",
//   "c",
//   "d", 
//   "e"
// ]

// reverse(arrayOfChars);

// console.log(arrayOfChars);

module.exports.reverseCharArray = reverse;
