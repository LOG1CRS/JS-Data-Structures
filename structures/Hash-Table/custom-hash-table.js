// CustomArray class
class CustomHashTable {
  /**
   * Create a custom hash table.
   * @param {number} size It's the number of slots that the hash table will contain.
   */
  constructor(size) {
    this.data = new Array(size);
  }

  /**
   * Hash method creates a unique code according to the key passed,
   * according to the range of slots in the has table.
   * @param {*} key The value to get the address.
   * @returns {number} hash The unique code to the key.
   */
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  /**
   * Insert method adds a value to the hash table.
   * @param {*} key The value to get the address.
   * @param {*} value The value to save.
   * @returns {(*|Array)} The hash table.
   */
  insert(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    // Checks if there is slot with the same key.
    const existingItem = this.data[address].find((item) => item[0] === key);

    if (existingItem) {
      // Gets the index of the existing item to update.
      this.data[address].forEach((item, index) => {
        if (item[0] === existingItem[0]) {
          const provisionalArray = this.data[address];
          provisionalArray[index][1] = value;
          this.data[address] === provisionalArray;
        }
      });
    } else {
      this.data[address].push([key, value]);
    }

    return this.data;
  }

  /**
   * Get method returns the value of a slot.
   * @param {*} key The value to get the address.
   * @returns {*} The value of the slot.
   */
  get(key) {
    const address = this.hashMethod(key);
    const currentSlot = this.data[address];

    if (currentSlot) {
      for (let i = 0; i < currentSlot.length; i++) {
        // Returns the right value if there is a collision in the same slot.
        if (currentSlot[i][0] === key) {
          return currentSlot[i][1];
        }
      }
    }

    return undefined;
  }

  /**
   * Remove method deletes the content of slot according to a key.
   * @param {*} key The value to get the address.
   * @returns {*} The value deleted.
   */
  remove(key) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      return undefined;
    }

    let valueDeleted = '';

    if (this.data[address].length > 1) {
      const arrayFiltered = this.data[address].filter((item) => {
        if (item[0] !== key) {
          return item[0];
        } else {
          valueDeleted = item[1];
        }
      });
      this.data[address] = arrayFiltered;
    } else {
      const currentSlot = this.data[address];
      valueDeleted = currentSlot[0][1];
      delete this.data[address];
    }

    return valueDeleted;
  }
}

// Testing class
const customHashTable = new CustomHashTable(50);

// Testing insert method
console.log(customHashTable.insert('Test 1', 2000)); // Output: [ <2 empty items>, [ [ 'Test 1', 2000 ] ], <47 empty items> ]

// Adding new value
console.log(customHashTable.insert('Test 2', 1200)); // Output: [ <2 empty items>, [ [ 'Test 1', 2000 ] ], <4 empty items>, [ [ 'Test 2', 1200 ] ], <42 empty items> ]

// Testing get method
console.log(customHashTable.get('Test 1')); // Output: 2000

// Getting another value
console.log(customHashTable.get('Test 2')); // Output: 1200

// Testing remove method
console.log(customHashTable.remove('Test 1')); // Output: 2000

// Creating a collision
console.log(customHashTable.insert('a', 3000));
console.log(customHashTable.insert('b', 5000)); // Output: [ [ [ 'a', 3000 ], [ 'b', 5000 ] ], <6 empty items>, [ [ 'Test 2', 1200 ] ], <42 empty items> ]
console.log(customHashTable.insert('a', 7000)); // Output: [ [ [ 'a', 7000 ], [ 'b', 5000 ] ], <6 empty items>, [ [ 'Test 2', 1200 ] ], <42 empty items> ]

// Testing remove with collision
console.log(customHashTable.remove('b')); // Output: 5000
console.log(customHashTable.data); // Output: [ [ [ 'a', 7000 ] ], <6 empty items>, [ [ 'Test 2', 1200 ] ], <42 empty items> ]
