class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));

function kthToLastNode(k, head) {

  if (k < 1) {
    throw new Error("Please enter a value for 'k' which is 1 or greater");
  }
  if (!(head)) {
    throw new Error("Please enter a value for 'head' which is the head of a linked list");
  }

  let nodeCount = 1;
  let kthBehind = null;
  let currentNode = head;

  while (currentNode) {
    if (kthBehind) {
      kthBehind = kthBehind.next;
    }
    else if (nodeCount === k) {
      kthBehind = head;
    }
    currentNode = currentNode.next;
    nodeCount++;
  }

  return kthBehind;
}