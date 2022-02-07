const myWeight = 72;

function calcEnergyValue(weight) {
  const speedLight = 3e8;
  return weight * speedLight ** 2;
}

console.log(calcEnergyValue(72));
