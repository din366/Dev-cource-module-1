const getAverageValue = (allCashboxArray) => {
  let sumCashbox = 0;

  for (let checkAmount of allCashboxArray) {
    sumCashbox += checkAmount / allCashboxArray.length;
  }
  let meanCashbox = Math.floor(sumCashbox);
  return meanCashbox;
};

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
