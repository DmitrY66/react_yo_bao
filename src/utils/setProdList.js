import { ProductCard } from 'src/components/ProductCard/ProductCard';
import { v4 as uuidv4 } from 'uuid';

const setProdList = (dataList) => {

  return dataList.map(item =>
    // console.log(item.image)
    <ProductCard
      productphoto={item.image ? item.image : '../assets/img/no-photo.svg'}
      title={item.title}
      description={item.description}
      price={item.price}
      key={uuidv4()}
    />
  );
};

export default setProdList;
