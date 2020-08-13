function sortScores(unsortedScores, highestPossibleScore) {

  // An empty array or an array with one element is already sorted. 
  if (unsortedScores.length <= 1) return unsortedScores;

  const scoreCount = new Array(highestPossibleScore + 1).fill(0);
  for (let i = 0 ; i < unsortedScores.length; i++) {
    const score = unsortedScores[i];
    scoreCount[score]++;
  }

  const sortedScores = [];

  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scoreCount[score];

    for (let times = 0; times < count; times++) {
      sortedScores.push(score);
    }
  }

  return sortedScores;
}

const unsortedScores = [95, 23, 66, 36, 12, 77, 82];
const HIGHEST_POSSIBLE_SCORE = 100;
console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));