class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(item) {
    this.queue.unshift(item);
    this.size += 1;
  }

  dequeue() {
    this.size -= 1;
    return this.queue.pop();
  }
}

const network = {
  'Min'     : ['Omar', 'Jayden', 'William'],
  'William' : ['Min', 'Noam'],
  'Jayden'  : ['Min', 'Ren', 'Noam'],
  'Ren'     : ['Jayden', 'Omar'],
  'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
  'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
  'Noam'    : ['Nathan', 'Jayden', 'William'],
  'Omar'    : ['Ren', 'Min', 'Scott']
};

function getPath(graph, startNode, endNode) {
  
  if (startNode === endNode) {
    return [startNode];
  }
  
  if ((!(graph[startNode])) || (!(graph[endNode]))) {
    throw new Error("Either the start or end node is not in the network");
  }
  
  const toCheck = new Queue();
  toCheck.enqueue([startNode]);
  const alreadyChecked = new Set();

  while (toCheck.size > 0) {
    const path = toCheck.queue[toCheck.size - 1];
    const currentNode = path[path.length - 1];
    for (const person of graph[currentNode]) {
      if (person === endNode) {
        path.push(person);
        return path;
      }
      else if (alreadyChecked.has(person) === false) {
        if (graph[person]) {
          const newPath = [...path];
          newPath.push(person);
          toCheck.enqueue(newPath);
        }
      }
    }
    alreadyChecked.add(currentNode);
    toCheck.dequeue();
  }
  return null;
}

console.log(getPath(network, 'Min', 'Noam'));