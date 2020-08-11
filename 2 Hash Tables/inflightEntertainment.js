const {mergeSort} = require("../0 DS and Algos/Algos/mergeSort");

function canTwoMoviesFillFlight(movieLengths, flightLength) {

  if (movieLengths.length <= 1) return false;

  // Sort movies by length. 
  const sortedMovieLengths = mergeSort(movieLengths);

  // Loop through all movies
  for (let i = 0; i < sortedMovieLengths.length; i++) {
    const firstMovie = sortedMovieLengths[i];

    // If a movie is longer than the flight, we've gone as far as we need to in the sorted array. 
    if (firstMovie > flightLength) {
      break;
    }
    else {
      for (let j = i + 1; j < sortedMovieLengths.length; j++) {
        const secondMovie = sortedMovieLengths[j];

        // If a movie is longer than the flight, we've gone as far as we need to in the sorted array. 
        if (secondMovie > flightLength) {
          break;
        }
        else if (firstMovie + secondMovie === flightLength) {
          return true;
        }
      }
    }
  }
  
  
  return false;
}

const movieLengths = [45, 123, 89, 245, 222, 320, 76];
const flightLength = 134;

console.log(canTwoMoviesFillFlight(movieLengths, flightLength));