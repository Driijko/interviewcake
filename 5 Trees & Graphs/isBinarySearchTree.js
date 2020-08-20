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

function isBinarySearchTree(node) {
  if (node.left) {
    if (node.left.value >= node.value) {
      return false;
    }
    else if (isBinarySearchTree(node.left) === false) {
      return false;
    }
  }
  if (node.right) {
    if (node.right.value <= node.value) {
      return false;
    }
    else if (isBinarySearchTree(node.right) === false) {
      return false;
    }
  }
  return true;
}

let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);

console.log(isBinarySearchTree(treeRoot));