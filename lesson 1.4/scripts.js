{
  const productName = prompt("Введите наименование товара", "apple");
  const productAmount = +prompt("Введите количество товара", "23");
  const productCategory = prompt("Введите категорию товара", "fruits");
  const productPrice = +prompt("Введите цену товара", "13");

  if (isNaN(productAmount)) {
    console.log("Вы ввели некорректные данные");
  }

  if (isNaN(productPrice)) {
    console.log("Вы ввели некорректные данные");
  }

  if (!isNaN(productAmount) && !isNaN(productPrice)) {
    console.log(
      `### В наличии ${productAmount} единицы товара "${productName}" на сумму ${
        productPrice * productAmount
      } рублей ###`
    );
  }
}
