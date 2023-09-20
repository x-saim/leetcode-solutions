//Output: [0,1,9,16,100]

const sortedSquares = (array) => {
  const sortedArray = [];
  array.forEach((element) => {
    sortedArray.push(element ** 2);
  });
  return sortedArray.sort((a, b) => {
    return a - b;
  });
};

//Two Pointer Method
const sortedSquaresTwoPointers = (array) => {
  let left = 0;
  let right = array.length - 1;
  const result = [];

  //Need to iterate backwards to maintain non-decreasing order.
  for (let i = array.length - 1; i >= 0; i--) {
    if (Math.abs(array[left]) < Math.abs(array[right])) {
      result[i] = array[right] ** 2;
      right--;
    } else {
      result[i] = array[left] ** 2;
      left++;
    }
  }
  return result;
};

nums = [-4, -1, 0, 3, 10];

// console.log(sortedSquares(nums));
// console.log(sortedSquares([-7, -3, 2, 3, 11]));

console.log(sortedSquaresTwoPointers(nums));
console.log(sortedSquaresTwoPointers([-7, -3, 2, 3, 11]));
