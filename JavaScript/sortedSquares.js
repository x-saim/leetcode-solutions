nums = [-4, -1, 0, 3, 10];

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

console.log(sortedSquares(nums));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
