// Node Class
class Node {
  /**
   * Create a node
   * @param {*} value It's the value to add.
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Custom Stack Class
class CustomStack {
  /**
   * Create a Stack
   */
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  /**
   * Push method adds a value at the top of the stack.
   * @param {*} value It's the value to add.
   * @returns this.
   */
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingTopPointer = this.top;
      newNode.next = holdingTopPointer;
      this.top = newNode;
    }

    this.length++;
    return this;
  }

  /**
   * Pop method removes the top item of the stack.
   * @returns this.
   */
  pop() {
    if (this.length === 0) {
      console.log('There is not values in the stack');
      return;
    }

    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return this;
  }

  /**
   * Peek method return the top item of the stack.
   * @returns It's the top item of the stack.
   */
  peek() {
    return this.top;
  }
}

// Testing class
const customStack = new CustomStack();

// Testing push method
console.log(customStack.push('First Value'));
// Output:
// CustomStack {
//   top: Node { value: 'First Value', next: null },
//   bottom: Node { value: 'First Value', next: null },
//   length: 1
// }

// Adding new values to stack
console.log(customStack.push('Second Value'));
// Output:
// CustomStack {
//   top: Node {
//     value: 'Second Value',
//     next: Node { value: 'First Value', next: null }
//   },
//   bottom: Node { value: 'First Value', next: null },
//   length: 2
// }

console.log(customStack.push('Third Value'));
// Output:
// CustomStack {
//   top: Node {
//     value: 'Third Value',
//     next: Node { value: 'Second Value', next: [Node] }
//   },
//   bottom: Node { value: 'First Value', next: null },
//   length: 3
// }

// Testing peek method
console.log(customStack.peek());
// Output:
// Node {
//   value: 'Third Value',
//   next: Node {
//     value: 'Second Value',
//     next: Node { value: 'First Value', next: null }
//   }
// }

// Cleaning stack
console.log(customStack.pop());
// Output:
// CustomStack {
//   top: Node {
//     value: 'Second Value',
//     next: Node { value: 'First Value', next: null }
//   },
//   bottom: Node { value: 'First Value', next: null },
//   length: 2
// }

console.log(customStack.pop());
// Output:
// CustomStack {
//   top: Node { value: 'First Value', next: null },
//   bottom: Node { value: 'First Value', next: null },
//   length: 1
// }

console.log(customStack.pop());
// Output:
// CustomStack { top: null, bottom: null, length: 0 }

console.log(customStack.pop());
// Output:
// There is not values in the stack
