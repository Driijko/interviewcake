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
    this.maxValues = new Stack();
    this.maxValues.push(-Infinity);
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
    // console.log(this.maxValues.peek())
    if (this.maxValues.peek() <= item) {
      this.maxValues.push(item);
    }
  }

  // Remove and return the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    const poppedItem = this.items.pop();
    if (this.maxValues.peek() === poppedItem) {
      this.maxValues.pop();
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
    console.log(this.maxValues.peek());
    return this.maxValues.peek();
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
maxStack.push(4);
maxStack.push(7);
maxStack.push(7);
maxStack.push(8);

maxStack.getMax();
maxStack.pop();
maxStack.getMax();
maxStack.pop();

maxStack.getMax();
maxStack.pop();

maxStack.getMax();

maxStack.pop();
maxStack.getMax();
