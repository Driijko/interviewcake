class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// function containsCycle(firstNode) {

//   if (!(firstNode)) {
//     return false;
//   }

//   const nodesVisited = new Set();

//   currentNode = firstNode;

//   while (currentNode.next !== null) {

//     if (nodesVisited.has(currentNode)) {
//       return true;
//     }

//     nodesVisited.add(currentNode);
//     currentNode = currentNode.next;    
//   }

//   return false;
// }

function valuesToLinkedListNodes(values) {
  const nodes = [];
  for (let i = 0; i < values.length; i++) {
    const node = new LinkedListNode(values[i]);
    if (i > 0) {
      nodes[i - 1].next = node;
    }
    nodes.push(node);
  }
  return nodes;
}

function containsCycle(firstNode) {

  if (!(firstNode)) {
    return false;
  }

  let fastRunner = firstNode;
  let slowRunner = firstNode;

  while(fastRunner && fastRunner.next) {

    fastRunner = fastRunner.next.next;
    slowRunner = slowRunner.next;
    
    if (fastRunner === slowRunner) {
      return true;
    }
  }
  return false;
}

const nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
console.log(containsCycle(nodes[0]));