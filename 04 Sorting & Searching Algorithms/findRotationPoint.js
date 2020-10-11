function doesWordComeFirst(mainWord, comparison) {

  if (mainWord.length < 1 || comparison.length < 1) {
    throw new Error("Main word and comparison word must both be at least one character long");
  }

  if(typeof comparison === "object") {

    for(let i = 0; i < mainWord.length; i++) {
      if (mainWord.charCodeAt(i) < comparison[i]) {
        return true;
      }
      else if (
        (comparison[i] === undefined)
        || (mainWord.charCodeAt(i) > comparison[i])
      ) {
        return false;
      }
    }
  }
  else {
    for (let i = 0 ; i < mainWord.length; i++) {
      if (mainWord.charCodeAt(i) < comparison.charCodeAt(i)) {
        return true;
      }
      else if (
        (comparison[i] === undefined)
        || (mainWord.charCodeAt(i) > comparison.charCodeAt(i))
      ) {
        return false;
      }
    }
  }

  if (mainWord.length !== comparison.length) {
    return true;
  }
  else {
    throw new Error("Comparitive word must be a different word from main word");
  }
}

function findRotationPoint(words) {
  const offset = [];
  for (let i = 0 ; i < words[0].length; i++) {
    offset[i] = words[0].charCodeAt(i);
  }

  let floorIndex = -1;
  let ceilingIndex = words.length;

  while (floorIndex + 1 < ceilingIndex) {
    const indexBeingChecked = Math.floor((ceilingIndex - floorIndex) / 2) + floorIndex;
    if (indexBeingChecked > 0) {
      const mainWord = words[indexBeingChecked];
      const prevWord = words[indexBeingChecked - 1];
      if (doesWordComeFirst(mainWord, prevWord)) {
        return indexBeingChecked;
      }
      
      if (doesWordComeFirst(mainWord, offset)) {
        ceilingIndex = indexBeingChecked;
      }
      else {
        floorIndex = indexBeingChecked;
      }
    }
    else {
      floorIndex = indexBeingChecked;
    }
  }
  return false;
}

// const words = [
//   'ptolemaic',
//   'retrograde',
//   'supplant',
//   'undulate',
//   'asymptote',  // <-- rotates here!
//   'babka',
//   'banoffee',
//   'engender',
//   'karpatka',
//   'othellolagkage',
// ];

words = [
  "cape",
  "cake"
]

// console.log(findRotationPoint(words));

console.log("abba" < "abbb")