function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

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