'use strict';

const userLangChoice = prompt('Choice language (RU, EN)', 'RU');

const startGame = window.rps(userLangChoice.toUpperCase());

startGame();
