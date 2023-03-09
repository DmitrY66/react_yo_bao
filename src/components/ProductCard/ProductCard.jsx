import st from './ProductCard.module.css';
import { BtnViolEll } from '../BtnViolEll/BtnViolEll.jsx';

export const ProductCard = ({ productphoto, title, description, price }) => {

  return (
    <li className={st.product_card}>
      <div className={st.card_container}>
        <img src={productphoto} alt="фото товара" />

        <h3>{title}</h3>

        <p tabIndex="0">{description}</p>
      </div>
      <div className={st.product_card_price}>
        <h4>{price}&nbsp;₽</h4>

        <BtnViolEll>В корзину</BtnViolEll>
      </div>
    </li>
  )
};
