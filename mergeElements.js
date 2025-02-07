/*
Given an array whose subarray contain numbers: 
[ 
	[1, 2, 3], 
	[4, 5, 6], 
  [7, 8, 9], 
] 
Merge the elements of this array into numbers: [123, 456, 789] 
*/

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const mergedNumbers = array.map((subarray) => parseInt(subarray.join("")));
console.log(mergedNumbers);
