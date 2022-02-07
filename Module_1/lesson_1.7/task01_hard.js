const getAveragePriceGoods = (priceArray) => {
  let averageCost = 0;
  for (let i = 0; i < priceArray.length; i++) {
    let productPrice = priceArray[i];
    averageCost += productPrice[1] / productPrice[0] / priceArray.length;
  }

  return Math.floor(averageCost);
};

const allCashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];

getAveragePriceGoods(allCashbox);
