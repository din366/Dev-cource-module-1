const gameBot = () => {
  const botNumber = Math.ceil(Math.random() * 100);
  console.log(botNumber);

  let userNumber = null;

  while (true) {
    userNumber = prompt("Choose your number", 10);

    if (userNumber === null) {
      console.log("Game over");
      break;
    }

    if (isNaN(userNumber)) {
      console.log("Enter an integer number, leather bag!");
      continue;
    }

    userNumber = +userNumber;

    if (userNumber < botNumber) {
      console.log("Less");
      continue;
    }

    if (userNumber > botNumber) {
      console.log("More");
      continue;
    }

    if (userNumber === botNumber) {
      console.log("Great!");
      break;
    }
  }
};

gameBot();
