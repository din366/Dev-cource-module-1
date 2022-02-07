'use strict';

const gameBotRecursion = (botNumber) => {
  let userNumber = prompt('Choose your number', 10);

  if (userNumber === null) {
    console.log('Game over');
    return true;
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
    console.log('Great!');
    return true;
  }
};

const gameBot = () => {
  const botNumber = Math.ceil(Math.random() * 100);
  console.log(botNumber);

  gameBotRecursion(botNumber);
};

gameBot();
