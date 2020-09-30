class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverse(headOfList) {

  let currentNode = headOfList.next;
  let lastNode = headOfList;
  let tempNext = null;
  headOfList.next = null;

  while (currentNode) {
    tempNext = currentNode.next;
    currentNode.next = lastNode;
    lastNode = currentNode;
    currentNode = tempNext;
  }

  return lastNode;

}