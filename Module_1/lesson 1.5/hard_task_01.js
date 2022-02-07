const nod = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return nod(num2, num1 % num2);
};
