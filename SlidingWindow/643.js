/*
Maximum Average Subarray I

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
*/

const findMaxAverage = function (nums, k) {
  let maxAvgValue = -Infinity;
  let windowSum = 0;

  for (let i = 0; i < nums.length; i++) {
    windowSum += nums[i];
    console.log('windowSum: ', windowSum);

    if (i >= k - 1) {
      maxAvgValue = Math.max(maxAvgValue, windowSum / k);
      console.log('maxAvgValue', maxAvgValue);
      windowSum -= nums[i - (k - 1)]; // Shrinking window size
      console.log('window sum after shrink ', windowSum);
    }
  }
  console.log('final ans- ', maxAvgValue);
  return maxAvgValue;
};

nums = [1, 12, -5, -6, 50, 3];
k = 4;
findMaxAverage(nums, k);
