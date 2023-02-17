/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let left = 0;
    let right = 0;
    for (let l = i; l > -1; l--) {
      left += nums[l];
    }
    for (let r = i; r < nums.length; r++) {
      right += nums[r];
    }
    if (left === right) {
      return i;
    }
  }
  return -1;
};

const nums = [1, 7, 3, 6, 5, 6];

/*
PROBLEM: Given an array of integers nums, calculate the pivot index of this array.
In English: Find the index in the array where all the elements to it's left added
equal the same value as all the index to it's right added. If this condition can't
be met, return -1

loop through array. For each iteration of the loop create 2 new for loops,
one, counting down from the current possition and one counting up.
As the for loop that's counting down iterates add it's values and store them in 
an array, do the same for the for loop that's counting up.
check if the two values match, if they do, return the index.

*/
