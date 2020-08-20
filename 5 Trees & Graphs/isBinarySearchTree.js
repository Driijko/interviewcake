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

function isBinarySearchTree(treeRoot) {

  if (!(treeRoot)) return false;

  function recursiveCall(node, lowerBound=-Infinity, upperBound=Infinity) {
    if (node.left) {
      if (node.left.value >= node.value || node.left.value <= lowerBound) {
        return false;
      }
      else if (recursiveCall(node.left, lowerBound, node.value) === false) {
        return false;
      }
    }
    if (node.right) {
      if (node.right.value <= node.value || node.right.value >= upperBound) {
        return false;
      }
      else if (recursiveCall(node.right, node.value, upperBound) === false) {
        return false;
      }
    }
    return true;
  }
  return recursiveCall(treeRoot);
}

const treeRoot = new BinaryTreeNode(50);
const leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(40);
const rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
rightNode.insertRight(90);

console.log(isBinarySearchTree(treeRoot));