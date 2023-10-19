/*
Max Consecutive Ones III

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length
*/

const longestOnes = (nums, k) => {
  //need to determine the max length window which will contain '0' k values.

  let left = 0; //left pointer
  let maxLength = 0;
  let zeroCount = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--; // Decrement zeroCount when we remove a "0"
      }
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
k = 2;

console.log(longestOnes(nums, k));
//The final iteratation should equal to the follow window: [0,1,1,1,1,0]
