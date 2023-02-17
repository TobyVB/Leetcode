/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let val = 0;
  const numsArr = [];
  for (let i = 0; i < nums.length; i++) {
    val = nums[i] + val;
    numsArr.push(val);
  }
  return numsArr;

  // nums.reduce((a,c,i,arr) => arr[i] += a)
  // return nums
};
/* 

Feb 17, 2023
Easy

a: accumulator
c: current value
i: index
arr: source array

The first solution is one I came up with on my own.
The second solution was an interesting one liner I found using 
the reduce method.

PROBLEM: Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
In English: Given an array of numbers, return an array where each element is the original value plus the sum,
of preceding elements.

create 'val' variable with a starting value of 0
create an empty array
using a for loop, iterate throught the array changing the value of 'val'
to the current elements value + val's current value.
Then push the val's value into the created array.
When that's completed return the array
*/
