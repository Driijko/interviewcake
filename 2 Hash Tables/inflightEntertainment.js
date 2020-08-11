function canTwoMoviesFillFlight(movieLengths, flightLength) {

  if (movieLengths.length <= 1) return false;

  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];
    const matchingSecondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    }
    movieLengthsSeen.add(firstMovieLength);
  }

  return false;
}

const movieLengths = [45, 123, 89, 245, 222, 320, 76];
const flightLength = 135;

console.log(canTwoMoviesFillFlight(movieLengths, flightLength));