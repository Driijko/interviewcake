function getClosingParen(sentence, openingParenIndex) {
  let open = 1;
  let close = 0;
  let currentIndex = openingParenIndex;

  while(open > close) {

    currentIndex++;
    if (currentIndex > sentence.length - 1) {
      throw new Error("no matching closing parentheses within sentence");
    }
    const currentChar = sentence[currentIndex];

    if (currentChar === "(") {
      open++;
    }
    else if (currentChar === ")") {
      close++;
    }
  }
  return currentIndex;
}