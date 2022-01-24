'use strict';

const userLangChoice = prompt('Choice language (RU, EN)', 'RU');

const startRpsGame = window.rps(userLangChoice);

if (startRpsGame !== null) {
  // checking for exit from the language selection window
  startRpsGame();
}

const startMarbleGame = window.marbleGame();
startMarbleGame(window.resultRpsGame);
