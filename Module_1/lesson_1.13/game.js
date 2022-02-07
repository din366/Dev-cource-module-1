'use strict';

(() => {
  const FIGURES_ENG = [
    'rock',
    'scissors',
    'paper',
    'Rock, scissors or paper?',
    'Are you sure you want to exit?',
    'You win!',
    'You lose :(',
    'Draw!',
    'Gamer',
    'Computer',
  ];
  const FIGURES_RUS = [
    'камень',
    'ножницы',
    'бумага',
    'Камень, ножницы или бумага?',
    'Вы уверены что хотите выйти?',
    'Вы выиграли!',
    'Вы проиграли :(',
    'Ничья!',
    'Игрок',
    'Компьютер',
  ];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const setGameLanguage = (lang) => {
    if (lang === 'EN' || lang === 'ENG') {
      return FIGURES_ENG;
    } else return FIGURES_RUS;
  };

  const game = (choiceUserLanguage) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const gameLanguage = setGameLanguage(choiceUserLanguage);

    return function start() {
      const userСhoice = prompt(gameLanguage[3]);
      // Option "exit block and table leaders"
      if (userСhoice === null) {
        const confirmExit = confirm(gameLanguage[4]);
        if (confirmExit) {
          let resultGame = null;
          if (result.player > result.computer) {
            resultGame = `${gameLanguage[5]}`;
          } else if (result.player < result.computer) {
            resultGame = `${gameLanguage[6]}`;
          } else {
            resultGame = `${gameLanguage[7]}`;
          }
          console.log(`${resultGame}
          ${gameLanguage[8]}: ${result.player}
          ${gameLanguage[9]}: ${result.computer}`);
        } else return start();
        // END option "exit block and table leaders"
      } else {
        const userChoiceFirstLetter = userСhoice[0].toLowerCase();
        console.log(userChoiceFirstLetter);

        const computerChoiceFirstLetter =
          gameLanguage[getRandomIntInclusive(0, 2)][0];
        console.log(computerChoiceFirstLetter);
        // battle logic
        if (
          // камень/rock - [0]; ножницы/scissors - [1]; бумага/paper - [2]
          (userChoiceFirstLetter === gameLanguage[0][0] &&
            computerChoiceFirstLetter === gameLanguage[1][0]) ||
          (userChoiceFirstLetter === gameLanguage[1][0] &&
            computerChoiceFirstLetter === gameLanguage[2][0]) ||
          (userChoiceFirstLetter === gameLanguage[2][0] &&
            computerChoiceFirstLetter === gameLanguage[0][0])
        ) {
          result.player++;
          return start();
        } else if (
          (computerChoiceFirstLetter === gameLanguage[0][0] &&
            userChoiceFirstLetter === gameLanguage[1][0]) ||
          (computerChoiceFirstLetter === gameLanguage[1][0] &&
            userChoiceFirstLetter === gameLanguage[2][0]) ||
          (computerChoiceFirstLetter === gameLanguage[2][0] &&
            userChoiceFirstLetter === gameLanguage[0][0])
        ) {
          result.computer++;
          return start();
        } else {
          return start();
        }
        // END battle logic
      }
    };
  };

  window.rps = game;
})();
