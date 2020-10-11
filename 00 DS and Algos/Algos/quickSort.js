function quickSort(array, lowIndex=0, highIndex=(array.length -1)) {
  let index;

  if (array.length > 1) {
    index = partition(array, lowIndex, highIndex);
    if (lowIndex < index - 1) {
      quickSort(array, lowIndex, index - 1);
    }
    if (index < highIndex) {
      quickSort(array, index, highIndex);
    } 
  }
  return array;
}

function swap(array, index1, index2) {
  const temp = array[index1]; 
  array[index1] = array[index2];
  array[index2] = temp;
}

function partition(array, lowIndex, highIndex) {
  const pivot = array[Math.floor((highIndex + lowIndex) / 2)];
  while (lowIndex <= highIndex) {
    while (array[lowIndex] < pivot) lowIndex++;
    while (array[highIndex] > pivot) highIndex--;
    if (lowIndex <= highIndex) {
      swap(array, lowIndex, highIndex);
      lowIndex++;
      highIndex--
    } 
  }
  return lowIndex;
}

module.exports.quickSort = quickSort;