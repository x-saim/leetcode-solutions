/*
**Problem Summary:**
Given a binary string `s` (composed of only "0" and "1"), you can flip at most one "0" to "1." Find the length of the longest substring of "1"s you can obtain. In other words, find the longest substring with at most one "0."

For example, given `s = "1101100111"`, the answer is `5`. If you perform the flip at index `2`, the string becomes `1111100111`. Because the string can only contain `"1"` and `"0"`, another way to look at this problem is "what is the longest substring that contains **at most one** `"0"`?"

*/
function longestSubstringWithOneZero(s) {
  let left = 0; // Left pointer of the sliding window
  let curr = 0; // Number of "0"s in the current window
  let maxLength = 0; // Length of the longest substring

  for (let right = 0; right < s.length; right++) {
    if (s[right] === '0') {
      curr++; // Increment curr when we encounter a "0"
    }

    // Shrink the window from the left if curr exceeds 1
    while (curr > 1) {
      if (s[left] === '0') {
        curr--; // Decrement curr when we remove a "0"
      }
      left++;
    }

    // Update the maximum substring length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Example usage:
const s = '1101100111';
const result = longestSubstringWithOneZero(s);
console.log(result); // This will print 5
