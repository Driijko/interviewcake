const {quickSort} = require("../0 DS and Algos/Algos/quickSort");

function findDuplicates(array) {
  quickSort(array);
  let curNum;
  let prevNum = null;
  for (let i = 0 ; i < array.length; i++) {
    curNum = array[i];
    if (curNum === prevNum) {
      return curNum;
    }
    prevNum = curNum;
  }
}

const array = [3, 4, 2, 6, 5, 8, 33, 6];
console.log(findDuplicates(array));