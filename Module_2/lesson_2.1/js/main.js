'use strict';

(() => {
  document.querySelector('.ads').remove();

  const mainBlock = document.querySelector('.items');

  /* fix mainblocks */
  mainBlock.prepend(document.querySelector('.item_three'));
  mainBlock.prepend(document.querySelector('.item_two'));
  mainBlock.prepend(document.querySelector('.item_one'));

  /* reverse blocks-lists */
  const propsThree = document.querySelector('.item_three .props__list');
  const propsFive = document.querySelector('.item_five .props__list');
  document.querySelector('.item_three .content').append(propsFive);
  document.querySelector('.item_five .content').append(propsThree);

  const twoItemsArray = document.querySelectorAll('.item_six .props__item_two');
  for (const elem of twoItemsArray) {
    document.querySelector('.item_two .props__list').append(elem);
  }

  const itemFour = document.querySelector('.item_two .props__item_four');
  console.log(itemFour);
  document.querySelectorAll('.item_four .props__item_four')[2].append(itemFour);

  /* fix titles */
  document.querySelector('.item_two .item__title').textContent =
    'Область видимости и замыкание';
  document.querySelector('.item_three .item__title').textContent =
    'This и прототипы объектов';
  document.querySelector('.item_five .item__title').textContent =
    'Асинхронная обработка и оптимизация';
  document.querySelector('.item_six .item__title').textContent =
    'ES6 и не только';
})();
