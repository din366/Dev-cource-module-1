'use strict';

const botNumbersRange = (m, n) => {
  const numbersArray = [m, n];
  return numbersArray.sort((a, b) => a - b);
};

const botNumbersRandomNumber = (numbersArray) =>
  Math.floor(
    Math.random() * (numbersArray[1] + 1 - numbersArray[0]) + numbersArray[0],
  );

const botNumberOfAttempt = (rangeArray) => {
  const rangedNumber = rangeArray[1] - rangeArray[0];
  console.log(rangedNumber);
  if (rangedNumber > 50 && rangedNumber < 100) {
    return 15;
  } else {
    return Math.round((rangeArray[1] - rangeArray[0]) * 0.3);
  }
};

const modifiedGameBot = () => {
  let m = null;
  let n = null;

  while (true) {
    m = parseInt(prompt('Choose first number for the robot', 10));
    if (Number.isInteger(m)) {
      break;
    }
  }
  while (true) {
    n = parseInt(prompt('Choose second number for the robot', 25));
    if (Number.isInteger(n)) {
      break;
    }
  }
  const numbersRangeArray = botNumbersRange(m, n); // two numbers -> [m,n]
  const numberOfAttempts = botNumberOfAttempt(numbersRangeArray);
  const userAttempts = [];

  const botNumber = botNumbersRandomNumber(numbersRangeArray);
  console.log(`Число бота: ${botNumber}`);

  let userNumber = null;

  for (let i = 0; i <= numberOfAttempts; i++) {
    if (i === numberOfAttempts) {
      console.log('You have used all the attempts. Game over. ');
      break;
    }
    while (true) {
      userNumber = prompt('Введите целое число', 10);
      // eslint-disable-next-line no-loop-func
      if (userAttempts.find((item) => item === +userNumber)) {
        console.log(
          'This number has already been entered. Attempt does not count.',
        );
        continue;
      } else break;
    }

    if (userNumber === null) {
      console.log('Game over. You out the game.');
      break;
    }

    if (isNaN(userNumber)) {
      console.log(
        'Enter an integer number, leather bag! This attempt has been missed!',
      );
      continue;
    }

    userNumber = +userNumber;

    if (userNumber < botNumber) {
      console.log('less');
      userAttempts.push(userNumber);
      continue;
    }

    if (userNumber > botNumber) {
      console.log('more');
      userAttempts.push(userNumber);
      continue;
    }

    if (userNumber === botNumber) {
      console.log(
        'GLaDOS Emergency Shutdown and Cake Dispensary, Keep Unlocked',
      );
      break;
    }
  }
};

modifiedGameBot(); // start game
