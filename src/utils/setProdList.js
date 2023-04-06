// используется на страницах категорий товаров и на главной

import { ProductCard } from 'src/components/ProductCard/ProductCard';
import { v4 as uuidv4 } from 'uuid';

const setProdList = (dataList) => {

  return dataList.map(item =>
    <ProductCard
      productphoto={item.image ? item.image : '../assets/img/no-photo.svg'}
      title={item.title}
      description={item.description}
      price={item.price}
      key={uuidv4()}
      id={item.id}
    />
  );
};

export default setProdList;
