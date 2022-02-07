const getReverseString = (str) => {
  return str.split("").reverse().join("");
};

const getReverseStringWithoutReverse = (str) => {
  const returnedArray = [];

  for (let i = str.length - 1; i >= 0; i--) {
    returnedArray.push(str[i]);
  }

  return returnedArray.join("");
};
