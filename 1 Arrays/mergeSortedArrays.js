function mergeArrays(myArray, alicesArray) {
  let index1 = 0;
  let index2 = 0;
  const mergedArray = [];

  for (let i = 0; i < myArray.length + alicesArray.length; i++) {
    if (myArray[index1] <= alicesArray[index2] || index2 === alicesArray.length) {
      mergedArray.push(myArray[index1]);
      index1++;
    }
    else if (alicesArray[index2] < myArray[index1] || index1 === myArray.length) {
      mergedArray.push(alicesArray[index2]);
      index2++;
    }
  }

  return mergedArray;
}

// const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];
const myArray = [2, 4, 6, 8];
const alicesArray = [1, 7];

console.log(mergeArrays(myArray, alicesArray));