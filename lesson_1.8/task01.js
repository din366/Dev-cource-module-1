const numbersGenerator = (arrayLength) => {
  const returnedArray = [];

  for (let i = 0; i < arrayLength; i++) {
    const randomNumber = Math.ceil(Math.random() * 100);
    returnedArray.push(randomNumber);
  }

  return returnedArray;
};
