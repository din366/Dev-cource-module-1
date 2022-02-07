'use strict';

const cart = {
  items: [],
  count: 0,
  add(title, price, amount = 1) {
    this.items.push({title, price, amount});
    this.increaseCount(amount);
  },
  increaseCount(incrNumber) {
    this.count += incrNumber;
  },
  calculateItemPrice() {
    let returnedPrice = 0;
    for (const item of this.items) {
      returnedPrice += item.price * item.amount;
    }
    return returnedPrice;
  },
  clear() {
    this.items = [];
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
  get totalPrice() {
    return this.calculateItemPrice();
  },
};

cart.add('Apple Watch', 399, 2);
cart.add('Samsung Galaxy S20', 850);
cart.add('Lenovo Legion 7', 1870);
cart.add('Mi Power Bank', 15, 7);
cart.print();
