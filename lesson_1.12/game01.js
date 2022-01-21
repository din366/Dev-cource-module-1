'use strict';

const gameBotRecursion = (botNumber) => {
  let userNumber = prompt('Choose your number', 10);

  if (userNumber === null) {
    return 'Game over';
  }

  if (isNaN(userNumber)) {
    console.log('Enter an integer number, leather bag!');
    return gameBotRecursion(botNumber);
  }

  userNumber = +userNumber;

  if (userNumber < botNumber) {
    console.log('Less');
    return gameBotRecursion(botNumber);
  }

  if (userNumber > botNumber) {
    console.log('More');
    return gameBotRecursion(botNumber);
  }

  if (userNumber === botNumber) {
    return 'Great!';
  }
};

const gameBot = () => {
  const botNumber = Math.ceil(Math.random() * 100);
  console.log(botNumber);

  console.log(gameBotRecursion(botNumber));
};

gameBot();
