// Declare an array.
const array = ['Hello', 'World', 1, 2, 3];
console.log(array); // Output [ 'Hello', 'World', 1, 2, 3 ]

// Add value at the end.
array.push('New value');
console.log(array); // Output [ 'Hello', 'World', 1, 2, 3, 'New value' ]

// Remove the last element.
array.pop();
console.log(array); // Output [ 'Hello', 'World', 1, 2, 3 ]

// Add value at the beginning.
array.unshift('New value');
console.log(array); // Output [ 'New value', 'Hello', 'World', 1, 2, 3 ]

// Remove the first element.
array.shift();
console.log(array); // Output [ 'Hello', 'World', 1, 2, 3 ]

// Add, remove, or replace an element at a given index.
array.splice(1, 1, 'Universe');
console.log(array); // Output [ 'Hello', 'Universe', 1, 2, 3 ]

// Loop through all elements of the array.
array.forEach((item) => console.log(item));
// Output
// Hello
// Universe
// 1
// 2
// 3

// Check if the array includes the item passed in the method.
console.log(array.includes(4)); // Output false

// Create a new array with elements that fall under the given criteria.
const newArray = array.filter((item) => item < 4);
console.log(newArray); // Output [ 1, 2, 3 ]

// Create a new array containing the results of calling a function on every element in this array.
// The difference between map and forEach is that map allows return values to create a new array and forEach just can modify itself.
const mapArray = array.map((item) => {
  console.log(item);
  // Output
  // Hello
  // Universe
  // 1
  // 2
  // 3
  return item;
});
console.log(mapArray); // Output [ 'Hello', 'Universe', 1, 2, 3 ]

// Sort elements of an array in place.
const numArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(numArray); // Output [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]
const sortedArray = numArray.sort((a, b) => a - b);
console.log(sortedArray); // Output [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
