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

function isValid(code) {

  if(code.length === 0) {
    return true;
  }

  const matches = {
    "[": "]",
    "(": ")",
    "{": "}"
  }

  let currentIndex = 0;
  let openers = new Stack();

  while (currentIndex < code.length) {
    if (
      code[currentIndex] === "["
      || code[currentIndex] === "("
      || code[currentIndex] === "{"
    ) {
      openers.push(code[currentIndex]);
    }
    else if (
      code[currentIndex] === "]"
      || code[currentIndex] === ")"
      || code[currentIndex] === "}"
    ) {
      if (code[currentIndex] !== matches[openers.peek()]) {
        return false;
      }
      else {
        openers.pop();
      }
    }
    currentIndex++;
  }
  if (openers.items.length > 0) {
    return false;
  }
  return true
}

console.log(isValid("([][]}"));