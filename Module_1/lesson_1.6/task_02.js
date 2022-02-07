const isPrime = (x) => {
  if (x <= 0) return false;

  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return true;
};

console.log(isPrime(1987));
