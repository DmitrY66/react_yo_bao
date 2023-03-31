import { Order } from 'src/components/Order/Order';
import { v4 as uuidv4 } from 'uuid';

const setOrderList = (dataList) => {

  return dataList.map(item =>
    <Order
      productphoto={item.productphoto ? item.productphoto : '../assets/img/no-photo.svg'}
      title={item.title}
      description={item.description}
      price={item.price}
      key={uuidv4()}
      id={item.id}
    />
  );
};

export default setOrderList;
