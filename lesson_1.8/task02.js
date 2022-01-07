const numbersGenerator = (arrayLength, m, n) => {
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

  return returnedArray;
};
