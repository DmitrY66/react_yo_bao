// не используется, просто алтернативный вариант формирования списка товаров по id путем перебора всех данных файла data.json

const getOrderGoods = (listData, listOrder) => {
  let goodsList = [];
  let dataListCommon = [];

  Object.values(listData).forEach(item => {
    dataListCommon.push(...item);
  });

  listOrder = listOrder.map(item => Object.values(item));

  dataListCommon.forEach(item => {
    listOrder.forEach(elem => {
      if (elem[0] === item.id) {
        goodsList.push([item, elem[1]]);
      }
    })
  })
  console.log('goodsList: ', goodsList);
  return goodsList;
};

export default getOrderGoods;

