{
  const rain = Math.round(Math.random());

  if (rain === 1) {
    console.log("Пошел дождь. Возьмите зонт!");
  }

  if (rain === 0) {
    console.log("Дождя нет");
  }
}

{
  const math = +prompt("Введите количество баллов по математике", 85);
  const rusLanguage = +prompt(
    "Введите количество баллов по русскому языку",
    75
  );
  const informatics = +prompt("Введите количество баллов по информатике", 95);

  const results = math + rusLanguage + informatics;

  if (results >= 265) {
    console.log("Поздравляю, вы поступили на бюджет!");
  } else {
    console.log("Вы не поступили");
  }
}

{
  const clientMoney = +prompt("Сколько вы хотите снять денег?", 400);
  if (clientMoney % 100 === 0 && clientMoney > 0) {
    console.log("Сумма выдается");
  } else {
    console.log("Неверная сумма");
  }
}
