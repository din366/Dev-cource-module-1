const clientIncome = +prompt("Введите сумму дохода", 25000);

if (clientIncome < 15000) {
  console.log(`Налог 13%: ${clientIncome * 0.13} руб.`);
}

if (clientIncome >= 15000 && clientIncome <= 50000) {
  console.log(`Налог 20%: ${clientIncome * 0.2} руб.`);
}

if (clientIncome > 50000) {
  console.log(`Налог 30%: ${clientIncome * 0.3} руб.`);
}
