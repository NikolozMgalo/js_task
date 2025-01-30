let num1 = [7, 12, 16, 30, 0, 0, 0, 0];
let m = 4;
let num2 = [11, 25, 28, 30,];
let n = 4;

const merge = (num1, m, num2, n) => {
  let lastElemNum1 = m - 1;
  let lastElemNum2 = n - 1;
  let lastPositionNum1 = m + n - 1;

  while (lastElemNum1 >= 0 && lastElemNum2 >= 0) {
    if (num1[lastElemNum1] > num2[lastElemNum2]) {
      num1[lastPositionNum1] = num1[lastElemNum1];
      lastElemNum1--;
    } else {
      num1[lastPositionNum1] = num2[lastElemNum2];
      lastElemNum2--;
    }
    lastPositionNum1--;
  }

  while (lastElemNum2 >= 0) {
    num1[lastPositionNum1] = num2[lastElemNum2];
    lastElemNum2--;
    lastPositionNum1--;
  }
  console.log("Merged num1 array :", num1);
};

merge(num1, m, num2, n);
