// Node Class
class Node {
  /**
   * Create a node
   * @param {*} value It's the value to add.
   */
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

// Custom Binary Tree Class
class CustomBinaryTree {
  /**
   * Create a Binary Tree
   */
  constructor() {
    this.root = null;
  }

  /**
   * Insert method adds a node with a value passed.
   * @param {*} value It's the value of the node to add.
   * @returns this.
   */
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /**
   * PrintValues method calls printNode method to print all values.
   */
  printValues() {
    if (this.root === null) {
      console.log('The tree is void');
      return;
    }

    this.printNode(this.root);
    console.log('');
  }

  /**
   * printNode is a recursive method that print all values of the binary three.
   * @param {Node} node The node to get its values.
   */
  printNode(node) {
    process.stdout.write(` -> ${node.value}`);

    if (node.left) {
      this.printNode(node.left);
    }

    if (node.right) {
      this.printNode(node.right);
    }
  }
}

// Testing CustomBinaryTree Class
const customBinaryTree = new CustomBinaryTree();

// Testing insert method
console.log(customBinaryTree.insert(10));
// Output:
// CustomBinaryTree { root: Node { left: null, right: null, value: 10 } }

// Adding more nodes to tree
console.log(customBinaryTree.insert(15));
// Output:
// CustomBinaryTree {
//   root: Node {
//     left: null,
//     right: Node { left: null, right: null, value: 15 },
//     value: 10
//   }
// }

console.log(customBinaryTree.insert(5));
// Output:
// CustomBinaryTree {
//   root: Node {
//     left: Node { left: null, right: null, value: 5 },
//     right: Node { left: null, right: null, value: 15 },
//     value: 10
//   }
// }

console.log(customBinaryTree.insert(9));
// Output:
// CustomBinaryTree {
//   root: Node {
//     left: Node { left: null, right: [Node], value: 5 },
//     right: Node { left: null, right: null, value: 15 },
//     value: 10
//   }
// }

// Testing printValues method
customBinaryTree.printValues();
// Output:
// -> 10 -> 5 -> 9 -> 15
