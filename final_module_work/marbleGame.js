'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const marbleGame = () => {
    const gameInfo = {
      userMarble: 5,
      computerMarble: 5,
    };

    return function start(whoWinPrevGame) {
      const resultGameWindow = (userMarble, computerMarble, whoseMoveFn) => {
        const playAgainFirstMoveChoice = (playAgain, whoWin, whoWinFunc) => {
          // Function to start a new game, set who win in current game and
          // set who will go first
          if (playAgain) {
            window.resultRpsGame = whoWin;
            gameInfo.userMarble = 5;
            gameInfo.computerMarble = 5;
            return whoWinFunc();
          } else return false;
        };

        let playAgain = null;
        if (computerMarble <= 0) {
          alert('Вы выиграли!');
          document.querySelector('#resultMarbles').textContent =
            'В последней игре вы выиграли!';
          document.querySelector('#game_mainwrapper').style.display = 'flex';
          playAgain = confirm('Вы хотите сыграть еще?');
          playAgainFirstMoveChoice(playAgain, 'playerWin', playerMove);
        } else if (userMarble <= 0) {
          alert('Вы проиграли!');
          document.querySelector('#resultMarbles').textContent =
            'В последней игре вы проиграли';
          document.querySelector('#game_mainwrapper').style.display = 'flex';
          playAgain = confirm('Вы хотите сыграть еще?');
          playAgainFirstMoveChoice(playAgain, 'computerWin', computerMove);
        } else return whoseMoveFn();
      };

      const compareGamers = (thinkNumber, guessesNumber) => {
        // Function to compare the choice of the player and the computer
        if (thinkNumber % 2 === guessesNumber % 2) {
          gameInfo.computerMarble += +thinkNumber;
          gameInfo.userMarble -= +thinkNumber;
          alert(
            // eslint-disable-next-line max-len
            `Ваш выбор: ${thinkNumber}; Выбор компьютера: ${guessesNumber}
            Gamer: ${gameInfo.userMarble}
            Comp: ${gameInfo.computerMarble}`,
          );
        } else {
          gameInfo.computerMarble -= +thinkNumber;
          gameInfo.userMarble += +thinkNumber;
          alert(
            // eslint-disable-next-line max-len
            `Ваш выбор: ${thinkNumber}; Выбор компьютера: ${guessesNumber}
            Gamer: ${gameInfo.userMarble}
            Comp: ${gameInfo.computerMarble}`,
          );
        }
      };

      // eslint-disable-next-line require-jsdoc
      function playerMove() {
        const userChoice = prompt(
          `Введите число от 1 до ${gameInfo.computerMarble}`,
        );

        if (userChoice === null) {
          document.querySelector('#resultMarbles').textContent =
            'Вы просто вышли из игры';
          document.querySelector('#game_mainwrapper').style.display = 'flex';
          return null;
        } else if (
          !Number.isInteger(+userChoice) ||
          userChoice < 1 ||
          userChoice > gameInfo.computerMarble
        ) {
          alert('Введите данные из требуемого диапазона');
          return playerMove();
        } else {
          const computerChoiceNumber = getRandomIntInclusive(
            1,
            gameInfo.userMarble,
          );
          compareGamers(userChoice, computerChoiceNumber);
          resultGameWindow(
            gameInfo.userMarble,
            gameInfo.computerMarble,
            computerMove,
          );
        }
      }

      // eslint-disable-next-line require-jsdoc
      function computerMove() {
        const userChoice = confirm(`Число четное?`);
        // При ходе компьютера в notEvenNumber присваивается обратное значение,
        // т.е если выбирается четное число, то дальше будет уходить нечетное.
        // Для того, чтобы в compareGamers() условия поменялись местами.
        const notEvenNumber = userChoice === false ? 2 : 1;

        const computerChoiceNumber = getRandomIntInclusive(
          1,
          gameInfo.userMarble,
        );
        compareGamers(computerChoiceNumber, notEvenNumber);

        resultGameWindow(
          gameInfo.userMarble,
          gameInfo.computerMarble,
          playerMove,
        );
      }

      (function whoFirstMoveMarble() {
        if (whoWinPrevGame === 'playerWin') {
          alert('Вы выиграли в предыдущей игре, поэтому вы ходите первым');
          playerMove();
        } else if (whoWinPrevGame === 'computerWin') {
          alert('Компьютер выиграл в предыдущей игре, поэтому он ходит первым');
          computerMove();
        } else if (whoWinPrevGame === 'draw') {
          const coinToss = getRandomIntInclusive(0, 1);
          if (coinToss === 1) {
            alert(
              // eslint-disable-next-line max-len
              'Вы сыграли в ничью, поэтому путем подбрасывания монеты великий рандом решил, что вы ходите первым',
            );
            playerMove();
          } else {
            alert(
              // eslint-disable-next-line max-len
              'Вы сыграли в ничью, поэтому путем подбрасывания монеты великий рандом решил, что компьютер ходит первым',
            );
            computerMove();
          }
        }
      })();
    };
  };

  window.marbleGame = marbleGame;
})();
