// Custom array class
class CustomArray {
  /**
   * Create an array
   */
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Get method returns a value according to a position.
   * @param {number} index It's the position of the element that you want to return.
   * @returns {*} The value according to the position passed.
   */
  get(index) {
    return this.data[index];
  }

  /**
   * Push method adds a value at the end of the array.
   * @param {*} item It's the value that you want to save in the array.
   * @returns {(*|Array)} The whole array.
   */
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  /**
   * Pop method removes the last element.
   * @returns {*} The last value already removed.
   */
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  /**
   * ShiftIndex method backtracks elements from an index at the end of the array,
   * and deletes the index element.
   * @param {*} index It's the position of the element where the code begins to backtrack elements.
   */
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  /**
   * UnShiftIndex method moves forward elements from an index.
   * @param {*} index It's the position of the element where the code begins to backtrack elements.
   */
  unShiftIndex(index) {
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.length++;
  }

  /**
   * Delete method deletes an element of the array.
   * @param {*} index It's the position of the element to delete.
   * @returns {*} The value of the array, already removed.
   */
  delete(index) {
    const itemDeleted = this.data[index];
    this.shiftIndex(index);
    return itemDeleted;
  }

  /**
   * UnShift method adds value at the beginning of the array-.
   * @param {*} item It's the value you want to save at the beginning of the array.
   * @returns {number} The size of the array.
   */
  unShift(item) {
    this.unShiftIndex(0);
    this.data[0] = item;
    return this.length;
  }

  /**
   * Shift method removes the first element of the array.
   * @returns {*} The first value of the array, already removed.
   */
  shift() {
    const itemDeleted = this.data[0];
    this.shiftIndex(0);
    return itemDeleted;
  }
}

// Testing class
const customArray = new CustomArray();

// Testing push method
console.log(customArray.push('Test 1')); // Output: { '0': 'Test 1' }
console.log(customArray.push('Test 2')); // Output: { '0': 'Test 1', '1': 'Test 2' }
console.log(customArray.length); // Output: 2

// Testing get method
console.log(customArray.get(0)); // Output: 'Test 1'

// Testing pop method
console.log(customArray.pop()); // Output: 'Test 2'
console.log(customArray.data); // Output: { '0': 'Test 1' }

// Testing delete method
customArray.push('Test 2');
customArray.push('Test 3');
console.log(customArray.data); // Output: { '0': 'Test 1', '1': 'Test 2', '2': 'Test 3' }
console.log(customArray.delete(1)); // Output: 'Test 2'
console.log(customArray.data); // Output: { '0': 'Test 1', '1': 'Test 3' }

// Testing unshift method
console.log(customArray.unShift('unshift')); // Output: 3
console.log(customArray.data); // Output: { '0': 'unshift', '1': 'Test 1', '2': 'Test 1' }

// Testing shift method
console.log(customArray.shift()); // Output: 'unshift'
console.log(customArray.data); // Output: { '0': 'Test 1', '1': 'Test 3' }
