class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;



function deleteNode(node) {
  const nextNode = node.next;

  if (nextNode) {
    node.value = nextNode.value;
    node.next = nextNode.next;
  }
  else {
    throw new Error("Can't delete the final node with this technique");
  }
}

deleteNode(b);
console.log(b);