'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(title, price, amount = 1) {
    this.items.push({title, price, amount});
    this.increaseCount(amount);
    this.totalPrice += price * amount;
  },
  increaseCount(incrNumber) {
    this.count += incrNumber;
  },
  calculateItemPrice() {
    let returnedPrice = 0;
    for (const item of this.items) {
      returnedPrice += item.price * item.amount;
    }
    this.totalPrice = returnedPrice;
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
};

cart.add('Apple Watch', 399, 2);
cart.add('Samsung Galaxy S20', 850);
cart.add('Lenovo Legion 7', 1870);
cart.add('Mi Power Bank', 15, 7);
cart.print();
