/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  let data = [];
  function dfs(node) {
    if (!node) return;
    data.push(node.val);

    dfs(node.right);
    dfs(node.left);
  }
  dfs(root);
  data.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 1; i < data.length; i++) {
    if (data[i] - data[i - 1] < min) {
      min = data[i] - data[i - 1];
    }
  }
  return min;
};

// Feb 17, 2023
// What I've learned:
// Practice with Binary Search Tree
// I like this solution because it's easier read plainly.

/* 
Poblem: Find the smallest difference of values between any two nodes.

In a binary search tree the leftward child node is has a lesser value than
the parent node, and the rightward child node has a greater value than the parent node.
So the smallest value difference between two node values must be 1 generation
away from each other.

In this solution, depth-first search method is being used to determine whether
the current node value of node  should be added to the array named 'data'
if the current value of node is not null or undefined, it will be added.

The first node values to be added will be the rightmost acceptable values
because dfs(node.right) is called before dfs(node.left)
The leftmost acceptable value with be added last.

Once the array 'data' contains all of the acceptable node values, 
it is then ordered from least to greatest value

The values in the array 'data' should be ordered. This makes it easy to 
check because the two values must be next to each other in the array

Then a variable called 'min' is created with the greatest possible value.
It is  compared against while looping through the array 'data' to see if
the next value in the array minus the current value is less.
If the difference is less, then change the value of 'min' to that difference.

return min

*/
