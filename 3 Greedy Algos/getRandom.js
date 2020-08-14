function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

// function shuffle(array) {
//   for (let i = 0 ; i < array.length; i++) {
//     const newIndex = getRandom(0, array.length - 1);
//     const temp = array[newIndex];
//     array[newIndex] = array[i];
//     array[i] = temp;
//   }
//   return array;
// }

function shuffle(array) {
  const iterations = array.length
  const newOrder = [];
  for(let i = 0; i < iterations; i++) {
    newOrder[i] = array.splice(getRandom(0, array.length - 1), 1)[0];
    console.log(array);
  }
  return newOrder;
}

const sample = [1, 12, 3, 4, 5];

console.log(shuffle(sample));