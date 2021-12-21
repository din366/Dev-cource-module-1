{
  const productName = "apples";
  const productAmount = 35;
  const productCategory = "fruits";
  const productPrice = 12;

  console.log(productName);
  console.log(productAmount * productPrice);
}

{
  const productName = "mobile phone";
  const productAmount = 24;
  const productCategory = "electronics";
  const productPrice = 435;

  console.log(`Наименование товара ${productName}`);
  console.log(`Общая сумма товара: ${productAmount * productPrice}`);
}

let productName = prompt("Введите наименование товара", "apple");
let productAmount = +prompt("Введите количество товара", "23");
let productCategory = prompt("Введите категорию товара", "fruits");
let productPrice = +prompt("Введите цену товара", "13");

console.log(`Переменная наименования товара, тип ${typeof productName}`);
console.log(`Переменная количества товара, тип ${typeof productAmount}`);
console.log(`Переменная категории товара, тип ${typeof productCategory}`);
console.log(`Переменная цены товара, тип ${typeof productPrice}`);

console.log(
  `### В наличии ${productAmount} единицы товара "${productName}" на сумму ${
    productPrice * productAmount
  } рублей ###`
);
