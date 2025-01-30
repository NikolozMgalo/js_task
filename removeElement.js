let num =  [2,2,2,10,5,6,8];
let val = -2;

const removeElement = (num, val) => {
  let k = 0;

  if((num.length >= 0 && num.length <= 100) && (val >= 0 && val <= 100 )){
  for (let elem of num) {
    if (elem !== val) {
        num[k] = elem
        k++;
    } 
  }
  return k;
} else {
  return 'incorrect data provided';
}
};

const k = removeElement(num, val);
num = num.slice(0, k);
console.log(k, num)
