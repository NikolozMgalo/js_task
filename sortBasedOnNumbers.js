/*
 * Sort the array elements in ascending order of the number of elements in the subarray.
 */
const array = [
  [1, 2, 3],
  [1, 2],
  [1, 2, 3, 4, 5],
  [1],
  [1, 2, 3, 4],
  [1, 2, 3, 4, 5, 6],
];

const sortArray = (array) => {
  let sortedArray = array.sort((a, b) => a.length - b.length);
  console.log(sortedArray);
};
sortArray(array);
