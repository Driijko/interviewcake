function reverseWords(message) {

  // We need to analyze where each word of our original message begins, index-wise. 
  // From this, and the size of the array, we can calculate where the words of the new
  // message will begin. 
  const wordStartIndexes = [0];
  const newWordStartIndexes = []

  for (let i = 1; i < message.length; i++) {
    // If we reach a "space", the next char is the beginning of a word. 
    if (message[i] === " ") {
      wordStartIndexes.push(i + 1);
      // We calcuate where the first word of our original message will be in our new message
      // By going backwards from the end of the array. 
      newWordStartIndexes.push(message.length - i);
    }
  }
  
  wordStartIndexes.push(message.length); // We add an extra value to avoid array boundary errors in a check below. 
  newWordStartIndexes.push(0); // Finally we add a zero, since we know the first word of our new message starts at index 0. 

  // There's one tricky thing to remember with this problem. We are treating spaces as parts of the ends of words,
  // but, the first word of our original message should be places at the back of the array without a trailing space. 
  // So we need to keep track of this one exceptional char. 
  const exceptionWordSpace = wordStartIndexes[1] - 1;

  let currentIndex = 0;
  let tempCharStorage = message[0];
  let newIndex;
  let charPosInWord;

  // We use a loop to compute an equal number of times to the number of char's in our array. 
  // That being said, we'll use currentIndex and tempCharStorage to actually pick out and store chars
  for (let i = 0 ; i < message.length; i++) {

    // We iterate over our word start indexes array. Note that we pushed an extra value into 
    // this array, so our loop is shorter by 1. 
    for (let j = 0; j < wordStartIndexes.length - 1; j++) {

      // If the current index is less than the start position of the next word, we know the char
      // is part of the current word. 
      if (currentIndex < wordStartIndexes[j + 1]) {

        const currentChar = tempCharStorage; // We grab the char as it's been stored to prevent it being overwritten. 

        // We make sure we're not dealing with our exceptional word space char. 
        if (currentIndex === exceptionWordSpace) {
          // If we are, we know that this will function as the space at the end of the first word
          // of our new message. 
          newIndex = newWordStartIndexes[newWordStartIndexes.length - 2] - 1;
        }
        // Otherwise, we calcuate it's new position based on the newWordStartIndexes array. 
        else {
          charPosInWord = currentIndex - wordStartIndexes[j];
          newIndex = newWordStartIndexes[j] + charPosInWord;
        }

        // To avoid overwriting chars, we store the char we are replacing, which will be the next char we place. 
        tempCharStorage = message[newIndex];

        message[newIndex] = currentChar;
        currentIndex = newIndex;
        break;
      }
    }
  }
  console.log(wordStartIndexes);
  console.log(newWordStartIndexes);
}

// const message = [ 'c', 'a', 'k', 'e', ' ',
//                 'p', 'o', 'u', 'n', 'd', ' ',
//                 's', 't', 'e', 'a', 'l' ];

const message = 'one another get'.split('');




reverseWords(message);

console.log(message.join(""));
