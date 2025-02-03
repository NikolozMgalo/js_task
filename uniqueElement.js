let num = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicate = (num) => {
  const uniqueNum = num.filter((elem, index) => num.indexOf(elem) === index);
  num.length = 0;
  num.push(...uniqueNum);
  return uniqueNum.length;
};

const uniqueElements = removeDuplicate(num);
console.log("Number of unique elements :", uniqueElements);
console.log("num array: ", num);
