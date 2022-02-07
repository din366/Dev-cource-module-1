'use strict';

const recursionArray = (arr) => {
  const clonedArr = [...arr];
  const sumArr = clonedArr.reduce((sum, current) => sum + current, 0);

  if (sumArr >= 50) {
    return clonedArr;
  } else {
    clonedArr.push(Math.round(Math.random() * 10));
    return recursionArray(clonedArr);
  }
};

console.log(recursionArray([1, 2, 3, 4]));
