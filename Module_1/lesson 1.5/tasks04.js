const calculate = (basketAmount, numberGoods, promocode) => {
  let resultBasketAmount = basketAmount;
  if (numberGoods > 10) {
    resultBasketAmount -= basketAmount * 0.03;
  }

  if (basketAmount > 30000) {
    resultBasketAmount -= (basketAmount - 30000) * 0.15;
  }

  if (promocode === "METHED") {
    resultBasketAmount -= basketAmount * 0.1;
  }

  if (promocode === "G3H1Z1" && resultBasketAmount > 2000) {
    resultBasketAmount -= 500;
  }

  return resultBasketAmount;
};
