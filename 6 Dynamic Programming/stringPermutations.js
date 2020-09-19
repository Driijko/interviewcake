function getPermutations(string) {

  if (string.length === 0) {
    return new Set([""]);
  }
  else if (string.length === 1) {
    return new Set(string);
  }

  function recursiveCall(string) {
    const permutations = [];

    if (string.length <= 1) {
      permutations.push(string);
      return permutations;
    }
  
    const firstLetter = string[0];
    const restOfString = recursiveCall(string.slice(1, string.length));

    for (const permutation of restOfString) {
      for (let i = 0 ; i < string.length; i++) {
        const newString = [];
        for(let j = 0; j < string.length; j++) {
          if (j === i) {
            newString[j] = firstLetter;
          }
          else if (j < i) {
            newString[j] = permutation[j];
          }
          else if (j > i) {
            newString[j] = permutation[j - 1];
          }
        }
        permutations.push(newString.join(""));
      }
    }

    return permutations;
  }

  const permutations = recursiveCall(string);
  return new Set(permutations);
}

const string = "abcd";

console.log(getPermutations(string));

