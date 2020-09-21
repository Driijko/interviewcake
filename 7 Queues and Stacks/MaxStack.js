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

class MaxStack {
  constructor() {

    // Initialize an empty stack
    this.items = [];
    this.max = -Infinity;
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
    this.max = Math.max(item, this.max);
  }

  // Remove and return the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    const poppedItem = this.items.pop();
    if (this.max === poppedItem) {
      this.max = -Infinity;
      for (const item of this.items) {
        this.max = Math.max(item, this.max);
      }
    }
    return poppedItem;
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  getMax() {
    return this.max;
  }
}

// class MaxStack extends Stack{
//   constructor() {
//     super();
//   }

//   getMax() {
//     let max = -Infinity;
//     for (const item of this.items) {
//       max = Math.max(item, max);
//     }
//     return max;
//   }
// }

const maxStack = new MaxStack();
maxStack.push(5);
maxStack.push(7);
maxStack.push(145);
maxStack.push(5656);
maxStack.pop();
console.log(maxStack.getMax());