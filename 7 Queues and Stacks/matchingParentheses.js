class Stack {
  constructor() {

    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

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