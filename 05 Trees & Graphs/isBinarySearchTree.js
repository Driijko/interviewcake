class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// Recursive Version
function isBinarySearchTree(node, lowerBound=-Infinity, upperBound=Infinity) {

  if (!(node)) {
    return true;
  }

  if (node.value <= lowerBound || node.value >= upperBound) {
    return false;
  }

  return (
    isBinarySearchTree(node.left, lowerBound, node.value) 
    && isBinarySearchTree(node.right, node.value, upperBound)
  )
} 


// Iterative Version
function isBinarySearchTree(treeRoot) {
  const nodesToCheck = [];
  nodesToCheck.push({
    node: treeRoot,
    lowerBound: -Infinity,
    upperBound: Infinity
  });

  while(nodesToCheck.length > 0) {
    const {node, lowerBound, upperBound} = nodesToCheck.pop();

    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    if (node.left) {
      nodesToCheck.push({
        node: node.left,
        lowerBound: lowerBound,
        upperBound: node.value
      })
    }
    if (node.right) {
      nodesToCheck.push({
        node: node.right,
        lowerBound: node.value,
        upperBound: upperBound
      })
    }
  }
  return true;
}

const treeRoot = new BinaryTreeNode(50);
const leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(40);
const rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
rightNode.insertRight(90);

console.log(isBinarySearchTree(treeRoot));