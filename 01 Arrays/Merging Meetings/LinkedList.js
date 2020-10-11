const {LinkedListNode} = require("./LinkedListNode");

class LinkedList {
  constructor(head, tail) {
    this.head = new LinkedListNode(head);
    this.head.next = new LinkedListNode(tail);
  }

  prepend(newNode) {
    this.head = newNode;

    // return this;
  }

  delete(value) {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;
    let lastNode = null;

    while (!(currentNode === null)) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          if (this.tail === this.head) {
            this.tail = null;
          }
          this.head = currentNode.next;
          return currentNode;
        } else if (currentNode === this.tail) {
          lastNode.next = null;
          this.tail = lastNode;
          return currentNode;
        }

        lastNode.next = currentNode.next;
        return currentNode;
      }

      lastNode = currentNode;
      currentNode = currentNode.next;
    }

    return null;

  }
}

module.exports.LinkedList = LinkedList;

