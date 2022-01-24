'use strict';

(() => {
  const FIGURES_ENG = [
    'rock',
    'scissors',
    'paper',
    'Rock, scissors or paper?',
    'Do you want to finish and go to the next stage?',
    'You win!',
    'You lose :(',
    'Draw!',
    'Gamer',
    'Computer',
    'Play again to advance to the next game?',
  ];
  const FIGURES_RUS = [
    'камень',
    'ножницы',
    'бумага',
    'Камень, ножницы или бумага?',
    'Вы хотите закончить и пойти на следующий этап?',
    'Вы выиграли!',
    'Вы проиграли :(',
    'Ничья!',
    'Игрок',
    'Компьютер',
    'Сыграть еще раз, чтобы пройти на следующую игру?',
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
    if (choiceUserLanguage === null) {
      return null;
    }
    const result = {
      player: 0,
      computer: 0,
    };

    const gameLanguage = setGameLanguage(choiceUserLanguage.toUpperCase());

    return function start() {
      const userСhoice = prompt(gameLanguage[3]);
      // Option "exit block and table leaders"
      if (userСhoice === null) {
        const confirmExit = confirm(gameLanguage[4]);
        if (confirmExit) {
          let resultGame = null;
          if (result.player > result.computer) {
            resultGame = `${gameLanguage[5]}`;
            window.resultRpsGame = 'playerWin';
          } else if (result.player < result.computer) {
            resultGame = `${gameLanguage[6]}`;
            window.resultRpsGame = 'computerWin';
          } else {
            resultGame = `${gameLanguage[7]}`;
            window.resultRpsGame = 'draw';
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
        } else {
          result.computer++;
          return start();
        }
        // END battle logic
      }
    };
  };

  window.rps = game;
})();
