const {BinaryTreeNode} = require("../Data-Structures/Trees/BinaryTree");

function depthFirstSearch(node, test) {
  if (test(node.value)) return true;
  else if (node.left === null && node.right === null) return false;
  else if (node.left === null) return depthFirstSearch(node.right, test);
  else if (node.right === null) return depthFirstSearch(node.left, test);
  else return depthFirstSearch(node.left, test) || depthFirstSearch(node.right, test);
}

let treeRoot = new BinaryTreeNode(5);
let leftNode = treeRoot.insertLeft(9);
leftNode.insertLeft(1);
leftNode.insertRight(4);
let rightNode = treeRoot.insertRight(6);
rightNode.insertLeft(3);
rightNode.insertRight(7);

function test(value) {
  if (value === 4) return true;
  else return false;
}

console.log(depthFirstSearch(treeRoot, test));