const addPrefix = (array, prefix) => {
  const addedPrefixArray = [];
  for (let names of array) {
    addedPrefixArray.push(`${prefix} ${names}`);
  }
  return addedPrefixArray;
};

const names = [
  "Noah",
  "Liam",
  "Mason",
  "Jacob",
  "Robot",
  "William",
  "Ethan",
  "Michael",
  "Alexander",
];

addPrefix(names, "Mr");
