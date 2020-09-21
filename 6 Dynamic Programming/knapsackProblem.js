function maxDuffelBagValue(cakeTypes, weightCapacity) {
  
  // We'll store all our best guesses in an array. 
  const results = [];

  // Iterate through each cake type.
  for (const [i, cakeType] of cakeTypes.entries()) {

    // For each cake type we will create a row
    // where each index 'i' represents a backpack of capacity 'i'. 
    const row = [];

    // Now let's iterate through each backpack capacity from 0 to it's actual capacity. 
    for (let j = 0 ; j <= weightCapacity ; j++) {
      
      // Test to see if the cakeType fits into a backpack of capacity 'j'. 
      if (j >= cakeType.weight) {

        // It fits! Let's establish a variable 'bestGuessSoFar' which we will change it we find 
        // better options. 
        let bestGuessSoFar = cakeType.value;

        // First of all, let's see if there is any leftover space in our backpack of capacity 'j'. 
        const leftOverCapacity = j - cakeType.weight;

        // If there is enough leftover space, we can add more of the same cake. 
        if (leftOverCapacity >= cakeType.weight) {
          bestGuessSoFar += row[leftOverCapacity];
        }

        // Now let's see if we have already calculated options for previously analyzed cakesTypes. 
        if (results[i - 1]) {

          // There are previous options! Let's see what our best option is if we place our current cake
          // in the backpack and have some leftover space. 
          const prevBestValueForLeftOverCapacity = results[i - 1][leftOverCapacity];
          bestGuessSoFar = Math.max(bestGuessSoFar, prevBestValueForLeftOverCapacity + cakeType.value);

          // Okay, now let's see if our best option for our current cake is better
          // than the best option so far for a backpack of capacity 'j', which
          // we can get by looking into the "row above" our current row. 
          bestGuessSoFar = Math.max(bestGuessSoFar, results[i - 1][j]);

          // Okay let's take our best guess and push it as the official best guess for this index
          // of our row. 
          row.push(bestGuessSoFar);

        }
        // If there are no previously calculated options, we'll use our best option
        // based just on this one cake type.  
        else {
          row.push(bestGuessSoFar);
        }
      }
      else {
        // The current cake doesn't fit! Let's see if there is a previously calculated option instead. 
        if (results[i - 1]) {
          row.push(results[i - 1][j]);
        }
        // If not, so far we can't see any value for a backpack of capacity 'j'. 
        else {
          row.push(0);
        }
      }
    }
    results.push(row);
  }
  return results[results.length - 1][results[results.length - 1].length - 1];
}

const cakeTypes = [
  { weight: 4, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];

const capacity = 6;

console.log(maxDuffelBagValue(cakeTypes, capacity));