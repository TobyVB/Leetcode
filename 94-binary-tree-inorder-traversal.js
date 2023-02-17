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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let data = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    data.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return data;
};

const root = [1, null, 2, 3];

console.log(inorderTraversal(root));

/*
Feb 17, 2023
Easy

This is the second or third binary tree problem I've come across.
I got further this time in solving it by myself, but ultimately
I had to look for solutions because I didn't understand the problem initially.

This solution was crafted by me but only after looking at other solutions.


PROBLEM:
Given the root of a binary tree, return the inorder traversal of its nodes' values.
In other words: 
Order the nodes by left most to right most

SOLUTION:
Create an empty array to be filled with the desired arrangement.

Then create a recursive function that takes a parameter.
The first action of the function is to end the process if the parameter is
undefined or null.

The second action of the function is to call itself and to pass it's 
left node as the parameter.
The third action of the function is to push the given parameter into the empty array
The fourth action of the function is to call itself and to pass it's
right node as the parameter.
calls itself with it's 
 
As you can see the leftmost possible node is reached, and once that
leftmost function completes it's call, then the call preceding will move 
on to the third action itself and push it's parameter into the array.
Then it will do it's fourth action and call the function on the right.
This will cascade all the way to the rightmost node until all calls are fully ran.

Then finally return the 'data' array
*/
