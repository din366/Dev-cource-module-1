'use strict';

const rectangle = {
  width: 5,
  height: 5,
  set rectWidth(val) {
    if (typeof val === 'number') {
      this.width = val;
    }
  },
  get rectWidth() {
    return `${this.width}см`;
  },
  set rectHeight(val) {
    if (typeof val === 'number') {
      this.height = val;
    }
  },
  get rectHeight() {
    return `${this.height}см`;
  },
};

rectangle.rectHeight = 'test';
rectangle.rectWidth = 30;
console.log(rectangle.rectHeight);
console.log(rectangle.rectWidth);
