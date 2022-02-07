const clientIncome = +prompt("Введите сумму дохода", 25000);

if (clientIncome < 15000) {
  console.log(`Налог 13%: ${clientIncome * 0.13} руб.`);
}

if (clientIncome >= 15000 && clientIncome <= 50000) {
  console.log(`Налог 20%: ${(clientIncome - 15000) * 0.2 + 15000} руб.`);
}

if (clientIncome > 50000) {
  console.log(`Налог 20%: ${(clientIncome - 50000) * 0.3 + 50000} руб.`);
}
