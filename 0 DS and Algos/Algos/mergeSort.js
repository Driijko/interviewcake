function mergeSort(array) {

  // Step 0: Base Case
  // An array with less than two elements is already sorted. 
  if (array.length < 2) {
    return array;
  }

  // Step 1: Split array
  const midIndex = Math.floor(array.length / 2);
  const left = array.slice(0, midIndex);
  const right = array.slice(midIndex, array.length);

  // Step 2: Recursively sort
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Step 3: Merge left and right sorted arrays
  let leftIndex = 0;
  let rightIndex = 0;
  let sortedArray = [];

  while (sortedArray.length < sortedLeft.length + sortedRight.length) {
    if (
      leftIndex < sortedLeft.length
      && (
        rightIndex === sortedRight.length
        || sortedLeft[leftIndex] < sortedRight[rightIndex]
      )
    ) {
      sortedArray.push(sortedLeft[leftIndex]);
      leftIndex++;
    }
    else {
      sortedArray.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }
  return sortedArray;
}

module.exports.mergeSort = mergeSort;