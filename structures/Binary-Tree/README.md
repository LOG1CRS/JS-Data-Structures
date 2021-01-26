# Binary Tree

The binary tree is a data structure that stores data in nodes, and each node can have a maximum of two child nodes that form a shape of the tree, linking the nodes as a linked list, allowing you to quickly find a node.

**Important terms:**

- Root: It's the first element of the tree, there is only one root node per tree.
- Parent: It's the node that has a child node.
- Child: It's the node that has a parent node.
- Leaf: It's the node that doesn't have a child node.

Binary tree sorts nodes according to the parent node value. If the value is greater than the parent node, that value will be the right side child node, if not, will be the left side child node.

**Example:**

Values -> 2 - 4 - 6 - 8 - 10 - 12 - 14 - 16 - 18 - 20 - 22

We can take the value "12" as the root node.

                  12
               /      \
              /        \
             6          18
           /   \       /   \
          4     8     16    20
         /       \   /       \
        2        10 12        22

## Graphic Description

<img src="https://github.com/LOG1CRS/JS-Data-Structures/blob/main/assets/tree-example.png" width="500px" />

## Methods

- Basic Methods
  - search: Search a node.
  - insert: Insert a node.
  - delete: Delete a node.

## Support Article

- [TutorialsPoint Tree Topic](https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm)
