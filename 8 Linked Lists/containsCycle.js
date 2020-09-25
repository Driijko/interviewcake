class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function containsCycle(firstNode) {

  if (!(firstNode)) {
    return false;
  }

  const nodesVisited = new Set();

  currentNode = firstNode;

  while (currentNode.next !== null) {

    if (nodesVisited.has(currentNode)) {
      return true;
    }

    nodesVisited.add(currentNode);
    currentNode = currentNode.next;    
  }

  return false;
}