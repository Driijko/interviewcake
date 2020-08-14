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

// function shuffle(array) {

//   if (array.length < 2) return array;

//   const iterations = array.length;
//   const newOrder = [];
//   for(let i = 0; i < iterations; i++) {
//     newOrder[i] = array.splice(getRandom(0, array.length - 1), 1)[0];
//     console.log(array);
//   }
//   return newOrder;
// }

function shuffle(array) {

  if (array.length < 2) return array;

  for (let i = 0 ; i < array.length - 1; i++) {

    const randomIndex = getRandom(i, array.length -1);

    if (randomIndex !== i) {
      const temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }

    return array;

  }
}

const sample = [1, 2, 3, 4, 5];

console.log(shuffle(sample));