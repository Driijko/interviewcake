function colorGraph(graph, colors) {
  const coloredNodes = new Set();
  let currentColorIndex = 0;
  for (const node of graph) {
    if (coloredNodes.has(node.label) === false) {
      node.color = colors[currentColorIndex];
      currentColorIndex++;
      coloredNodes.add(node.label);
    }
    for (const neighbour of node.neighbors) {
      if (coloredNodes.has(neighbour.label) === false) {
        neighbour.color = colors[currentColorIndex];
        currentColorIndex++;
        coloredNodes.add(neighbour.label);
      }
    }
    if (coloredNodes.length === graph.length) {
      break;
    }
    currentColorIndex = 0;
  }
}

class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

const nodeA = new GraphNode('A');
const nodeB = new GraphNode('B');
const nodeC = new GraphNode('C');
const nodeD = new GraphNode('D');
const nodeE = new GraphNode('E');
nodeA.neighbors.add(nodeB);
nodeA.neighbors.add(nodeC);
nodeB.neighbors.add(nodeA);
nodeB.neighbors.add(nodeC);
nodeB.neighbors.add(nodeD);
nodeB.neighbors.add(nodeE);
nodeC.neighbors.add(nodeA);
nodeC.neighbors.add(nodeB);
nodeC.neighbors.add(nodeD);
nodeC.neighbors.add(nodeE);
nodeD.neighbors.add(nodeB);
nodeD.neighbors.add(nodeC);
nodeD.neighbors.add(nodeE);
nodeE.neighbors.add(nodeB);
nodeE.neighbors.add(nodeC);
nodeE.neighbors.add(nodeD);
graph = [nodeA, nodeB, nodeC, nodeD, nodeE];

const colors = ['red', 'green', 'blue', 'orange'];

function colorGraph(graph, colors) {
  for (const node of graph) {
    const illegalColors = new Set();

    for (const neighbor of node.neighbors) {
      if (neighbor.label === node.label) {
        throw new Error("Graphs with loops cannot be legally colored.")
      }
      if (neighbor.color) {
        illegalColors.add(neighbor.color);
      }
    }
    for (let i = 0 ; i < colors.length ; i++) {
      if (illegalColors.has(colors[i]) === false) {
        node.color = colors[i];
        break;
      }
    }
  }
}

colorGraph(graph, colors);
for (const node of graph) {
  console.log(node.label, node.color);
}