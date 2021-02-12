// Graph class
class Graph {
  /**
   * Create a graph
   */
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }

  /**
   * AddVertex adds a new node in the graph.
   * @param {*} node It's the node to add.
   */
  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }

  /**
   * AddEdges creates and adds a connection between two nodes.
   * @param {*} nodeA
   * @param {*} nodeB
   */
  addEdges(nodeA, nodeB) {
    this.adjacentList[nodeA].push(nodeB);
    this.adjacentList[nodeB].push(nodeA);
  }
}

// Instancing graph class
const customGraph = new Graph();

// Adding vertex to graph with addVertex method.
customGraph.addVertex(1);
customGraph.addVertex(3);
customGraph.addVertex(4);
customGraph.addVertex(5);
customGraph.addVertex(6);
customGraph.addVertex(8);

// Adding edges (connection) among vertex
customGraph.addEdges(8, 4);
customGraph.addEdges(4, 1);
customGraph.addEdges(4, 5);
customGraph.addEdges(5, 3);
customGraph.addEdges(1, 3);
customGraph.addEdges(1, 6);
customGraph.addEdges(3, 6);

console.log(customGraph.adjacentList);
// Output:
// {
//   '1': [ 4, 3, 6 ],
//   '3': [ 5, 1, 6 ],
//   '4': [ 8, 1, 5 ],
//   '5': [ 4, 3 ],
//   '6': [ 1, 3 ],
//   '8': [ 4 ]
// }
