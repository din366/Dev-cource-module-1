const numbersGenerator = (arrayLength, m, n, str) => {
  const returnedArray = [];

  let biggerNumber = null;
  let fewerNumber = null;

  if (m > n) {
    biggerNumber = m;
    fewerNumber = n;
  } else {
    biggerNumber = n;
    fewerNumber = m;
  }

  for (let i = 0; i < arrayLength; i++) {
    const randomNumber = Math.floor(
      Math.random() * (biggerNumber + 1 - fewerNumber) + fewerNumber
    );
    returnedArray.push(randomNumber);
  }

  if (str === "even") {
    return returnedArray.filter((item) => {
      return item % 2 === 0;
    });
  } else if (str === "odd") {
    return returnedArray.filter((item) => {
      return item % 2 !== 0;
    });
  } else return returnedArray;
};

console.log(numbersGenerator(20, 10, 100, "odd"));
