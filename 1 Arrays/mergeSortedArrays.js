// function mergeArrays(myArray, alicesArray) {
//   let index1 = 0;
//   let index2 = 0;
//   const mergedArray = [];

//   for (let i = 0; i < myArray.length + alicesArray.length; i++) {
//     if (myArray[index1] <= alicesArray[index2] || index2 === alicesArray.length) {
//       mergedArray.push(myArray[index1]);
//       index1++;
//     }
//     else if (alicesArray[index2] < myArray[index1] || index1 === myArray.length) {
//       mergedArray.push(alicesArray[index2]);
//       index2++;
//     }
//   }

//   return mergedArray;
// }

function mergeArrays(arrays) {

  const mergedArray = [];

  const indexes = Array(arrays.length).fill(0);

  let totalLength = 0;
  arrays.forEach(array => {
    totalLength += array.length;
  })

  for (let i = 0 ; i < totalLength; i++) {

    let smallest = Infinity;
    let arrayNumber;

    for (let j = 0; j < arrays.length; j++) {
      // console.log(arrays[j][indexes[j]]);
      if (indexes[j] !== arrays[j].length && arrays[j][indexes[j]] <= smallest) {
        smallest = arrays[j][indexes[j]];
        arrayNumber = j;
      }
    }

    mergedArray.push(smallest);
    indexes[arrayNumber]++;
  }

  return mergedArray;
}

// const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];
const myArray = [2, 4, 6, 8];
const alicesArray = [1, 7];
const array3 = [5, 9, 12];
const array4 = [];
const array5 = [2];
const array6 = [1, 67];
const arrays = [myArray, alicesArray, array3, array4, array5, array6];

console.log(mergeArrays(arrays));