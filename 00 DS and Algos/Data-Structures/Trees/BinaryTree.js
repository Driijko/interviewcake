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

function branchDepths(node) {
  if (node.left === null && node.right === null) {
    return 0;
  }
  else if (node.right === null) {
    return 1 + branchDepths(node.left);
  }
  else if (node.left === null) {
    return 1 + branchDepths(node.right);
  }
  else {
    return 
  }
}

function isBalanced(treeRoot) {

  // Determine if the tree is superbalanced
  

  return false;
}

module.exports.BinaryTreeNode = BinaryTreeNode;

// let treeRoot = new BinaryTreeNode(5);
// let leftNode = treeRoot.insertLeft(8);
// leftNode.insertLeft(1);
// leftNode.insertRight(2);
// let rightNode = treeRoot.insertRight(6);
// rightNode.insertLeft(3);
// rightNode.insertRight(4);
