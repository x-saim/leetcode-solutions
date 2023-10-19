/*

Example 1: Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit, return a boolean array that represents the answer to each query. A query is true if the sum of the subarray from x to y is less than limit, or false otherwise.

For example, given nums = [1, 6, 3, 2, 7, 2], queries = [[0, 3], [2, 5], [2, 4]], and limit = 13, the answer is [true, false, true]. For each query, the subarray sums are [12, 14, 12].

*/

const answerQueeries = (nums, queries, limit) => {
  let prefixSum = [nums[0]]; //initialize

  //pre-process prefixSum array
  for (let i = 1; i < nums.length; i++) {
    prefixSum.push(nums[i] + prefixSum[prefixSum.length - 1]);
  }

  let result = [];

  // Extract the query range [x, y]
  for (const [x, y] of queries) {
    // Calculate the subarray sum and compare it to the limit
    if (prefixSum[y] - (x > 0 ? prefixSum[x - 1] : 0) < limit) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};

(nums = [1, 6, 3, 2, 7, 2]),
  (queries = [
    [0, 3],
    [2, 5],
    [2, 4],
  ]);
limit = 13;

console.log(answerQueeries(nums, queries, limit));
