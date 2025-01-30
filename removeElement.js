let num = [2, 2, 2, 10, 5, 6, 8];
let val = 2;

const removeElement = (num, val) => {
  let k = 0;

  for (let elem of num) {
    if (elem !== val) {
      num[k] = elem;
      k++;
    }
  }
  return k;
};

const k = removeElement(num, val);
num = num.slice(0, k);
console.log(k, num);
