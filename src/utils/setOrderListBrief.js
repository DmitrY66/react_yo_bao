// используется на странице "Оформление заказа"

import { OrderBrief } from 'src/components/OrderBrief/OrderBrief';
import { v4 as uuidv4 } from 'uuid';

const setOrderListBrief = (dataList) => {

  return dataList.map(item =>
    <OrderBrief
      productphoto={item.productphoto ? item.productphoto : '../assets/img/no-photo.svg'}
      title={item.title}
      price={item.price}
      count={item.count}
      key={uuidv4()}
      id={item.id}
    />
  );
};

export default setOrderListBrief;
