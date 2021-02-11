class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}

class Edge {
  constructor(weight, nextNode) {
    this.weight = 0;
    this.nextNode = nextNode;
  }
}

class Graph {
  constructor(value) {
    const rootNode = new Node(value);
    this.root = rootNode;
  }

  addNode(fatherNodeValue, newNodeValue) {
    const newNode = new Node(newNodeValue);
    const fatherNode = this.findNode(this.root, fatherNodeValue);

    if (!fatherNode) {
      return 'Father node was not found.';
    }

    const newEdge = new Edge(0, newNode);
    fatherNode.edges.push(newEdge);

    return this.graphMap();
  }

  connect(fatherNodeValue, nextNodeValue) {
    const fatherNodeFound = this.findNode(this.root, fatherNodeValue);

    if (!fatherNodeFound) {
      return 'Father node was not found.';
    }

    const nextNodeFound = this.findNode(this.root, nextNodeValue);

    if (!nextNodeFound) {
      return 'Next node was not found.';
    }

    const newEdge = new Edge(0, nextNodeFound);

    fatherNodeFound.edges.push(newEdge);

    return this.graphMap();
  }

  findNode(nodeToCheck, nodeValue) {
    if (nodeToCheck.value === nodeValue) {
      return nodeToCheck;
    }

    if (nodeToCheck.edges.length === 0) {
      return null;
    } else {
      for (let i = 0; i < nodeToCheck.edges.length; i++) {
        const node = this.findNode(nodeToCheck.edges[i].nextNode, nodeValue);

        if (node) {
          return node;
        }
      }
    }
  }

  graphMap() {
    let map = new Object();

    this.getAllNodes(this.root, map);

    return map;
  }

  getAllNodes(nodeToCheck, map) {
    map[nodeToCheck.value] = [];

    if (nodeToCheck.edges !== 0) {
      for (let i = 0; i < nodeToCheck.edges.length; i++) {
        this.getAllNodes(nodeToCheck.edges[i].nextNode, map);
        map[nodeToCheck.value].push(nodeToCheck.edges[i].nextNode.value);
      }
    }
  }
}

const customGraph = new Graph(8);

console.log(customGraph);

console.log(customGraph.addNode(8, 4));

console.log(customGraph.addNode(4, 1));

console.log(customGraph.addNode(4, 5));

console.log(customGraph.addNode(1, 6));

console.log(customGraph.addNode(1, 3));

console.log(customGraph.connect(6, 3));

console.log(customGraph.connect(5, 3));

console.log(customGraph);
