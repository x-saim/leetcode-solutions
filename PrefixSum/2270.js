/*
2270. Number of Ways to Split Array

Given an integer array nums, find the number of ways to split the array into two parts so that the first section has a sum greater than or equal to the sum of the second section. The second section should have at least one number.

*/

const waysToSplitArray = (nums) => {
  const n = nums.length;

  //Compute the prefix sum array
  let prefixSum = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    prefixSum.push(nums[i] + prefixSum[prefixSum.length - 1]);
  }

  let result = 0;

  //Loop through the array to find the split points
  for (let i = 0; i < nums.length - 1; i++) {
    if (prefixSum[i] >= prefixSum[n - 1] - prefixSum[i]) result++;
  }

  return result;
};

// Example 1
const nums1 = [10, 4, -8, 7];
console.log(waysToSplitArray(nums1)); // Output: 2

// Example 2
const nums2 = [2, 3, 1, 0];
console.log(waysToSplitArray(nums2)); // Output: 2
