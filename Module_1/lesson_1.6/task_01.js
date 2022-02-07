const getPowerTable = (x) => {
  let stringTable = [];
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= x; j++) {
      stringTable.push(` ${i ** j} `.padStart(13, " "));
    }
    console.log(stringTable.join("|"));
    stringTable = [];
  }
};

getPowerTable(10);
