'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
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
    if (this.discount !== 0) {
      returnedPrice *= (100 - this.discount) / 100;
    }
    return returnedPrice.toFixed(2);
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
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },
};

cart.add('Apple Watch', 399, 2);
cart.add('Samsung Galaxy S20', 850);
cart.add('Lenovo Legion 7', 1870);
cart.add('Mi Power Bank', 15, 7);
cart.print();

cart.setDiscount = 'NEWYEAR';
cart.print();
cart.setDiscount = 'METHED';
cart.print();
