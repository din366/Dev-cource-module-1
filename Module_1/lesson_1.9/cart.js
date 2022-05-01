'use strict';
const Cart = function(goods = [], totalPrice = 0, count = 0) {
  this.goods = goods;
  this.totalPrice = totalPrice;
  this.count = count;
};

Cart.prototype.calculateGoodsPrice = function() {
  let returnedPrice = 0;
  for (const item of this.goods) {
    returnedPrice += item.price;
  }
  this.totalPrice = returnedPrice;
};

Cart.prototype.addGoods = function({count, name, price, ...other}) {
  this.goods.push({count, name, price, ...other});
  this.increaseCount(count);
  this.totalPrice += price * count;
};

Cart.prototype.getTotalPrice = function() {
  return this.totalPrice;
};

Cart.prototype.increaseCount = function(incrNumber) {
  this.count += incrNumber;
};

Cart.prototype.clear = function() {
  this.goods = [];
  this.totalPrice = 0;
  this.count = 0;
};

Cart.prototype.print = function() {
  console.log(JSON.stringify(this.goods));
  console.log(this.totalPrice);
};


const Goods = function(count, name, price) {
  this.count = count;
  this.name = name;
  this.price = price;
};

const FoodGoods = function(count, name, price, callories) {
  Goods.call(this, count, name, price);
  this.callories = callories;
};

const СlothingGoods = function(count, name, price, material) {
  Goods.call(this, count, name, price);
  this.material = material;
};

const TechnicsGoods = function(count, name, price, type) {
  Goods.call(this, count, name, price);
  this.type = type;
};

Object.setPrototypeOf(FoodGoods.prototype, Goods.prototype);
Object.setPrototypeOf(СlothingGoods.prototype, Goods.prototype);
Object.setPrototypeOf(TechnicsGoods.prototype, Goods.prototype);

const itemDefault = new Goods(5, 'Mobile Phone', 550);
const itemFood = new FoodGoods(10, 'Apple', 7, 130);
const itemClothing = new СlothingGoods(3, 'T-shirt', 23, 'linen');
const itemTecknics = new TechnicsGoods(8, 'HP Pavilion', 890, 'Computers');

const testShoppingCart = new Cart();
testShoppingCart.addGoods(itemDefault);
testShoppingCart.addGoods(itemFood);
testShoppingCart.addGoods(itemClothing);
testShoppingCart.addGoods(itemTecknics);
testShoppingCart.print();
