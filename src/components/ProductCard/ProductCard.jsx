import st from './ProductCard.module.css';
import { BtnViolEll } from '../BtnViolEll/BtnViolEll.jsx';
import { useDispatch } from 'react-redux';
import { addProduct } from 'src/store/order/orderSlice';

export const ProductCard = ({ productphoto, title, description, price, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={st.product_card}>
      <div className={st.card_container}>
        <img src={productphoto} alt="фото товара" />

        <h3>{title}</h3>

        <p tabIndex="0">{description}</p>
      </div>
      <div className={st.product_card_price}>
        <h4>{price}&nbsp;₽</h4>

        <span onClick={() => {
          dispatch(addProduct({
            productphoto: productphoto,
            id: id,
            title: title,
            description: description,
            price: price,
          }));
        }}>
          <BtnViolEll>В корзину</BtnViolEll>
        </span>
      </div>
    </li>
  );
};
