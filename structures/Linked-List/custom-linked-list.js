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

  /**
   * GetIndex method gets a node according to a position.
   * @param {*} index It's the node position.
   * @returns The node in the index position.
   */
  getNodeIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  /**
   * Insert method adds a new node in a specific position in the list.
   * @param {*} index It is the position of the element to be added.
   * @param {*} value It's the value to add.
   * @returns this.
   */
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      console.log(
        'Use prepend method to add a new value at the beginning of the list.'
      );
      return;
    }

    const newNode = new Node(value);
    const firstPointer = this.getNodeIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this;
  }

  /**
   * DeleteFirst method removes the first node from the list.
   * @returns this.
   */
  deleteFirst() {
    const newFirstNode = this.head.next;
    this.head = newFirstNode;
    this.length--;
    return this;
  }

  /**
   * DeleteLast method removes the last node from the list.
   * @returns this.
   */
  deleteLast() {
    const newLastNote = this.getNodeIndex(this.length - 2);
    newLastNote.next = null;
    this.tail = newLastNote;
    this.length--;
    return this;
  }

  /**
   * Delete method removes a node according to its the position.
   * @param {*} index It is the position of the element to be removed.
   * @returns this.
   */
  delete(index) {
    if (index > this.length) {
      console.log('Non-existent position');
      return;
    }

    if (index === 0) {
      this.deleteFirst();
      return this;
    } else if (index === this.length) {
      this.deleteLast();
      return this;
    }

    const firstPointer = this.getNodeIndex(index - 1);
    const nextPointer = this.getNodeIndex(index + 1);
    firstPointer.next = nextPointer;
    this.length--;

    return this;
  }

  /**
   * GetNodes method prints each nodes from the list.
   */
  getNodes() {
    let currentPosition = this.head;
    for (let i = 1; i <= this.length; i++) {
      console.log({ index: i, value: currentPosition.value });
      currentPosition = currentPosition.next;
    }
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

// Testing insert method
console.log(customLinkedList.insert(1, 'Value Inserted'));
// Output:
// CustomLinkedList {
//   head: Node {
//     value: 'New begin',
//     next: Node { value: 'Value Inserted', next: [Object] }
//   },
//   tail: Node { value: 'Test 2', next: null },
//   length: 5
// }

// Testing getNodes method
customLinkedList.getNodes();
// Output:
// { index: 1, value: 'New begin' }
// { index: 2, value: 'Value Inserted' }
// { index: 3, value: 'Created' }
// { index: 4, value: 'Test' }
// { index: 5, value: 'Test 2' }

// Testing delete method
console.log(customLinkedList.delete(1));
// Output:
// CustomLinkedList {
//   head: Node { value: 'New begin', next: { value: 'Created', next: [Node] } },
//   tail: Node { value: 'Test 2', next: null },
//   length: 4
// }

// Testing deleteFirst method
console.log(customLinkedList.deleteFirst());
// Output:
// CustomLinkedList {
//   head: { value: 'Created', next: Node { value: 'Test', next: [Node] } },
//   tail: Node { value: 'Test 2', next: null },
//   length: 3
// }

// Testing deleteLast method
console.log(customLinkedList.deleteLast());
// Output:
// CustomLinkedList {
//   head: { value: 'Created', next: Node { value: 'Test', next: null } },
//   tail: Node { value: 'Test', next: null },
//   length: 2
// }
