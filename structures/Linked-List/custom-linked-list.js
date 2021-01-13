// Node Class
class Node {
  /**
   * Create a node
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Custom Singly Linked List Class
class CustomLinkedList {
  /**
   * Create a linked list
   */
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  /**
   * Append method adds a new node at the end of the list.
   * @param {*} value It's the value to add.
   * @returns this.
   */
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  /**
   * Prepend method add a new node at the beginning of the list.
   * @param {*} value It's the value to add.
   * @returns this.
   */
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }
}

// Testing class
const customLinkedList = new CustomLinkedList('Created');

// Testing append method
console.log(customLinkedList.append('Test'));
// Output:
// CustomLinkedList {
//   head: { value: 'Created', next: Node { value: 'Test', next: null } },
//   tail: Node { value: 'Test', next: null },
//   length: 2
// }

// Adding new value using append
console.log(customLinkedList.append('Test 2'));
// Output:
// CustomLinkedList {
//   head: { value: 'Created', next: Node { value: 'Test', next: [Node] } },
//   tail: Node { value: 'Test 2', next: null },
//   length: 3
// }

// Testing prepend method
console.log(customLinkedList.prepend('New begin'));
// Output:
// CustomLinkedList {
//   head: Node { value: 'New begin', next: { value: 'Created', next: [Node] } },
//   tail: Node { value: 'Test 2', next: null },
//   length: 4
// }
