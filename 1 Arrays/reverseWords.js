const {reverseCharArray} = require("./reverseCharArray");

function reverseWords(message) {
  reverseCharArray(message);

  const wordStartIndexes = [0];

  message.forEach((char, i)=> {
    if (char === " ") {
      wordStartIndexes.push(i + 1);
    }
  })

  for (let i = 0; i < wordStartIndexes.length; i++) {

    let lengthOfWord;

    if (i === wordStartIndexes.length - 1) {
      lengthOfWord = message.length - wordStartIndexes[i];
    }
    else {
      lengthOfWord = wordStartIndexes[i + 1] - wordStartIndexes[i] - 1;
    }

    const halfLength = Math.ceil(lengthOfWord / 2);
    console.log(halfLength);
    
    for (let j = 0; j < halfLength; j++) {
      const wordStart = wordStartIndexes[i];
      const tempCharStorage = message[j + wordStart];
      message[j + wordStart] = message[lengthOfWord - 1 - j + wordStart];
      message[lengthOfWord - 1 - j + wordStart] = tempCharStorage;
    }
  }

  console.log(wordStartIndexes);
}

const message = 'one another get'.split('');

reverseWords(message);

console.log(message);