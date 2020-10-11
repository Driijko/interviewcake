const {BinaryTreeNode} = require("../0 DS and Algos/Data-Structures/Trees/BinaryTree");

function getDepths(node, depth) {
  const depths = [];
  function recursiveCall(node, depth) {
    if (node.left === null && node.right === null) {
      depths.push(depth);
    }
    else if (node.right === null) {
      recursiveCall(node.left, depth + 1);
    }
    else if (node.left === null) {
      recursiveCall(node.right, depth + 1);
    }
    else {
      recursiveCall(node.left, depth + 1);
      recursiveCall(node.right, depth + 1);
    }
  }
  recursiveCall(node, depth);
  return depths;
}

function isTreeSuperbalanced(node) {
  const depths = getDepths(node, 0);
  let minDepth = Infinity;
  let maxDepth = 0;
  for (let i = 0; i < depths.length; i++) {
    const depth = depths[i];
    if (depth < minDepth) {
      minDepth = depth;
    }
    else if (depth > maxDepth) {
      maxDepth = depth;
    }
  }

  if (maxDepth - minDepth > 1) {
    return false
  }
  else return true;
}

function isTreeBalanced(treeRoot) {
  if (!(treeRoot)) return true;

  let minDepth = null;
  let maxDepth = null;

  function recursiveCall(node, depth) {
    if (node.left === null && node.right === null) {
      if (minDepth === null) minDepth = depth;
      if (maxDepth === null) maxDepth = depth;
      if (depth < minDepth) {
        minDepth = depth;
      }
      else if (depth > maxDepth) {
        maxDepth = depth;
      }
      if (maxDepth - minDepth > 1) return false;
    }
    else {
      if (node.left !== null && recursiveCall(node.left, depth + 1) === false) {
        return false;
      } 
      if (node.right !== null && recursiveCall(node.right, depth + 1) === false) {
        return false;
      }
    }

    return true;
  }

  return recursiveCall(treeRoot, 0);
}

let treeRoot = new BinaryTreeNode(5);
let leftNode = treeRoot.insertLeft(9);
// leftNode.insertLeft(1);
// leftNode.insertRight(0);
let rightNode = treeRoot.insertRight(6);
// rightNode.insertLeft(3);
let rightNode2 = rightNode.insertRight(7);
let rightNode3 = rightNode2.insertLeft(4);
// rightNode3.insertLeft(1);

console.log(isTreeBalanced());
