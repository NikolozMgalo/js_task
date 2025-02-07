/*
 * Sort the array elements in ascending order of the sum of the subarray elements. 
 */
let arr = [
    [2, 4, 5],
    [1, 2, 3],
    [0, 1, 1],
    [5, 7, 1]
];

arr.sort((a, b) => {
    let sumA = a.reduce((sum, num) => sum + num, 0);
    let sumB = b.reduce((sum, num) => sum + num, 0);
    return sumA - sumB;
});

console.log(arr);