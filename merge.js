let num1 = [7, 12, 16, 30, 0, 0, 0, 0];
let m = 4;
let num2 = [11, 25, 28, 30,];
let n = 4;

const assert = (condition, message) => {
  if(!condition) {
    throw new Error(message)
  }
}

const merge = (num1, m, num2, n) => {
  assert(num1.length === m + n, "num1.length must be equal to m + n");
  assert(num2.length === n, "num2.length must be equal to n");
  assert(m >= 0 && m <= 200, "m must be between 0 and 200");
  assert(n >= 0 && n <= 200, "n must be between 0 and 200");
  assert(m + n >= 1 && m + n <= 200, "m + n must be between 1 and 200");
  assert(
    num1.every((num) => num >= -109 && num <= 109),
    "num1 elements must be between -109 and 109"
  );
  assert(
    num2.every((num) => num >= -109 && num <= 109),
    "num2 elements must be between -109 and 109"
  );

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
