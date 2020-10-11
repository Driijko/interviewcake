const {BinaryTreeNode} = require("../Data-Structures/Trees/BinaryTree");

function breadthFirstSearch(nodes, test) {
  if (nodes.length === 0) return false;

  const nextLevelNodes = [];
  for (const node of nodes) {
    if (test(node.value)) return true;
    else {
      if (node.left !== null) nextLevelNodes.push(node.left);
      if (node.right !== null) nextLevelNodes.push(node.right);
    }
  }
  return breadthFirstSearch(nextLevelNodes, test);
}

let treeRoot = new BinaryTreeNode(5);
let leftNode = treeRoot.insertLeft(9);
leftNode.insertLeft(1);
leftNode.insertRight(0);
let rightNode = treeRoot.insertRight(6);
rightNode.insertLeft(3);
rightNode.insertRight(7);

function test(value) {
  if (value === 4) return true;
  else return false;
}

console.log(breadthFirstSearch([treeRoot], test));