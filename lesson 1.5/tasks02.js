const getModifiedString = (str) => {
  const lowerStr = str.toLowerCase();
  let newStr = lowerStr[0].toUpperCase() + lowerStr.slice(1);
  return newStr;
};
