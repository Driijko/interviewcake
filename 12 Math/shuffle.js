function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
  }
  
function shuffle(array) {
    for (const num of array) {
        const newIndex = getRandom(0, array.length - 1);
    }

    
  
}

const sample = [1, 2, 3, 4, 5];
shuffle(sample);