class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
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

function isSecondLargest(treeRoot) {

  let largestFound = false;
  let secondLargest;
  let currentNode = treeRoot;

  while(currentNode) {
    if (currentNode.right) {
      secondLargest = currentNode.value;
      currentNode = currentNode.right;
    }
    else if (currentNode.left) {
      if (largestFound === false) {
        largestFound = true;
        secondLargest = currentNode.left.value;
        currentNode = currentNode.left;
      }
      else {
        secondLargest
      }
    }
    else {
      currentNode = null;
    }
  }
  if (!(secondLargest)) {
    throw new Error("tree must have at least two nodes");
  }
  return secondLargest;
}

function findXLargestNum(treeRoot, num) {
  let xLargest = 0;
  let currentNode = treeRoot;
  while (xLargest < num) {
    if (currentNode.right) {
      if (xLargest < num) {
        currentNode = currentNode.right;
      }
      else {
        
      }
    }
    else if (currentNode.left && xLargest < num) {
      xLargest++;
      currentNode = currentNode.left;
    }
    else {
      return currentNode.value;
    }
  }
}

function findSecondLargest(treeRoot) {
  let largestFound = false;
  let secondLargest;
  let currentNode = treeRoot;
  while (currentNode) {
    if (currentNode.right) {
      if (!(largestFound)) {
        secondLargest = currentNode.value;
        currentNode = currentNode.right;
      }
      else {
        secondLargest = currentNode.right.value;
        currentNode = currentNode.right;
      }
    }
    else if (currentNode.left && (!(largestFound))) {
        largestFound = true;
        secondLargest = currentNode.left.value;
        currentNode = currentNode.left;
    }
    else {
      break;
    }
  }
  if (!(secondLargest)) {
    throw new Error("tree must have at least two nodes");
  }
  return secondLargest;
}

let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);

console.log(findSecondLargest(treeRoot));