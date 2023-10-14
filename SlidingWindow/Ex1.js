//Given an array of positive integers nums and an integer k, find the length of the longest subarray whose sum is less than or equal to k.

function maxLengthSubarraySum(nums, k) {
  let left = 0; // Left pointer of the sliding window
  let sum = 0; // Current sum of the elements in the window
  let maxLength = 0; // Length of the longest subarray

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]; // Include the right element in the window

    // Shrink the window from the left if the sum exceeds k
    while (sum > k) {
      sum -= nums[left];
      left++;
    }

    // Update the maximum subarray length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Example usage:
const nums = [1, 2, 1, 1, 1];
const k = 3;
const result = maxLengthSubarraySum(nums, k);
console.log(result); // This will print 3
