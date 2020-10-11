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

class QueueTwoStacks {
  constructor() {
    this.stack = new Stack();
    this.nextDequeue = 0;
  }


  enqueue(item) {
    this.stack.push(item);
  }

  dequeue() {
    if (this.stack.items) {
      const result = this.stack.items[this.nextDequeue];
      this.nextDequeue++;
      return result;
    }
    else {
      throw new Error("The dequeue method requires that a queue have items");
    }
  }
}

const queueTwoStacks = new QueueTwoStacks();
queueTwoStacks.enqueue(5);
queueTwoStacks.enqueue(76);
queueTwoStacks.enqueue(55);
queueTwoStacks.enqueue(39);
console.log(queueTwoStacks.dequeue());
console.log(queueTwoStacks.dequeue());
console.log(queueTwoStacks.dequeue());
console.log(queueTwoStacks.dequeue());