# Hash Table

A hash table is a data structure that assigns a given value with a particular key for faster access to items, using a hash function to calculate the index of the item's position to find or save it, allowing to save a large number of items and the cost to finding an item is constant because the time does not depend on the size of the table, only on the hash function and the element key. The hash table stores items in slots (also called buckets) and its hash function is what determines the complexity and cost of using a hash table.

_A hash function is a computational method that can map an indeterminate size of data into a fixed size of data. Or more plainly, it provides a number quantity that represents the input data._

The biggest problem with using a hash table is collisions and it is when two or more keys were hashed to result in the same location and this is impossible to avoid. This space would be a linked list, and this makes it more difficult to find a specific item.

You can find hash tables in other programming languages like in Python as dictionaries, in Java as maps, in Go also as Maps and Ruby as hashes. In JavaScript, there is no pre-built hash table, but a great example of a hash table is JS objects.

## Graphic Description

<img src="https://github.com/LOG1CRS/JS-Data-Structures/blob/main/assets/hash-example.jpg" width="200px">

## Methods

- Basic Methods
  - insert: Adds an element in the table.
  - search: Searches for an element with its key.
  - delete: Deletes and element with its key.

## Support Article

- [GeekForGeeks Hash Table Article](https://www.geeksforgeeks.org/hashing-data-structure/)
- [ScienceDirect Hash Function Article](https://www.sciencedirect.com/topics/computer-science/hash-function)
