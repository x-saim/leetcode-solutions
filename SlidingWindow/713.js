/*

Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

For example, given the input nums = [10, 5, 2, 6], k = 100, the answer is 8. The subarrays with products less than k are:

[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
*/

function countSubarrays(nums, k) {
  if (k <= 1) {
    return 0; // There are no subarrays with product less than or equal to 0
  }

  let count = 0;
  let product = 1;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    // Shrink the window from the left until the product is less than k
    while (product >= k) {
      product /= nums[left];
      left++;
    }

    // At this point, all subarrays ending at 'right' with product < k and starting at or after 'left' are valid
    count += right - left + 1;
  }

  return count;
}

const nums = [10, 5, 2, 6];
const k = 100;
console.log(countSubarrays(nums, k)); // Output: 8
