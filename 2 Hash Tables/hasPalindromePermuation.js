function hasPalindromePermutation(theString) {

  // Edge cases
  if (theString.length <= 1) return true;

  // Iterate through letters, tallying. 
  const letters = {};
  for (let i = 0 ; i < theString.length; i++) {
    const letter = theString[i];
    if (letters[letter]) {
      letters[letter]++;
    }
    else {
      letters[letter] = 1;
    }
  }

  // How many tallies are odd?
  let numOfOddTallys = 0;
  for (const letter in letters) {
    if (letters[letter] % 2 !== 0) {
      numOfOddTallys++;
      // If there is more than two odd tallies, we know it's not a palindrome. 
      if (numOfOddTallys > 2) return false;
    }
  }

  // If the string is an even length, there can be zero odd tallys
  if (theString.length % 2 === 0) {
    if (numOfOddTallys === 0) return true;
    else return false;
  }
  // If the string is an odd length, there can be one odd tally. 
  else {
    if (numOfOddTallys <= 1) return true;
    else return false;
  }
}

const theString = "ototoi";
console.log(hasPalindromePermutation(theString));
// hasPalindromePermutation(theString)