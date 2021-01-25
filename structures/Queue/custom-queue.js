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

// Custom Queue Class
class CustomQueue {
  /**
   * Create a Queue
   */
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /**
   * Peek method returns the first item in the queue.
   * @returns The first item of the queue.
   */
  peek() {
    return this.first;
  }

  /**
   * Enqueue method adds an item to the end of the queue.
   * @param {*} value It's the value to add.
   * @returns this.
   */
  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  }

  /**
   * Dequeue method removes the first item on the queue.
   * @returns this;
   */
  dequeue() {
    if (this.length === 0) {
      console.log('There is not values in the queue');
      return;
    }

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;

    return this;
  }
}

// Testing CustomQueue Class
const customQueue = new CustomQueue();

// Testing enqueue method
console.log(customQueue.enqueue('First Value'));
// Output:
// CustomQueue {
//   first: Node { value: 'First Value', next: null },
//   last: Node { value: 'First Value', next: null },
//   length: 1
// }

// Adding new values to queue
console.log(customQueue.enqueue('Second Value'));
// Output:
// CustomQueue {
//   first: Node {
//     value: 'First Value',
//     next: Node { value: 'Second Value', next: null }
//   },
//   last: Node { value: 'Second Value', next: null },
//   length: 2
// }

console.log(customQueue.enqueue('Third Value'));
// Output:
// CustomQueue {
//   first: Node {
//     value: 'First Value',
//     next: Node { value: 'Second Value', next: [Node] }
//   },
//   last: Node { value: 'Third Value', next: null },
//   length: 3
// }

// Testing peek method
console.log(customQueue.peek());
// Output:
// Node {
//   value: 'First Value',
//   next: Node {
//     value: 'Second Value',
//     next: Node { value: 'Third Value', next: null }
//   }
// }

// Testing dequeue method
console.log(customQueue.dequeue());
// Output:
// CustomQueue {
//   first: Node {
//     value: 'Second Value',
//     next: Node { value: 'Third Value', next: null }
//   },
//   last: Node { value: 'Third Value', next: null },
//   length: 2
// }

// Cleaning queue
console.log(customQueue.dequeue());
// Output:
// CustomQueue {
//   first: Node { value: 'Third Value', next: null },
//   last: Node { value: 'Third Value', next: null },
//   length: 1
// }

console.log(customQueue.dequeue());
// Output:
// CustomQueue { first: null, last: null, length: 0 }

console.log(customQueue.dequeue());
// Output:
// There is not values in the queue
