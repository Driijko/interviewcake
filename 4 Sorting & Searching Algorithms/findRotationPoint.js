function findRotationPoint(words) {
  const offset = wordNum(words[0]);
  console.log("offset is", offset);

  let floorIndex = -1;
  let ceilingIndex = words.length;

  while (floorIndex + 1 < ceilingIndex) {

    const indexBeingChecked = Math.floor((ceilingIndex - floorIndex) / 2);
    console.log("word num is", wordNum(words[indexBeingChecked]));

    if (checkForRotation(words, indexBeingChecked)) {
      return indexBeingChecked;
    }
    else if (wordNum(words[indexBeingChecked]) >= offset) {
      floorIndex = indexBeingChecked;
    }
    else if (wordNum(words[indexBeingChecked]) < offset) {
      ceilingIndex = indexBeingChecked;
    }
  }
  return false;
}

function wordNum(word) {
  let wordNum = 0;
  for (let i = 0; i < word.length; i++) {
    wordNum += word.charCodeAt(i);
  }
  return wordNum
}


function checkForRotation(words, index) {

  if (index === 0) {
    throw new Error("Check cannot be applied to first word in a list");
  }

  const wordBeingChecked = words[index];
  const prevWord = words[index - 1];
  let wordBeingCheckedNum = 0;
  let prevWordNum = 0;
  let charCounter = 0;

  const biggerWordLength = Math.max(wordBeingChecked.length, prevWord.length);

  for (let i = 0 ; i < biggerWordLength; i++) {
    if (i < wordBeingChecked.length) {
      wordBeingCheckedNum += wordBeingChecked.charCodeAt(i);
    }
    if (i < prevWord.length) {
      prevWordNum += prevWord.charCodeAt(i);
    }
    if (wordBeingCheckedNum !== prevWordNum) {
      break;
    }
  }

  if (wordBeingCheckedNum < prevWordNum) return true;
  else if (wordBeingCheckedNum === prevWordNum) {
    throw new Error("Duplicate words in list");
  }
  else return false;
}

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

console.log(findRotationPoint(words));
