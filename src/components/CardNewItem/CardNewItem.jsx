import st from './CardNewItem.module.css';
import photoNewProduct from '../../img/new-product.png';

export const CardNewItem = () => {

  return (
    <li className={st.card_new_item}>
      <img src={photoNewProduct} alt="фото нового продукта" />
      <div className={st.content}>
        <h3>Карбонара</h3>
        <p>от 120 ₽</p>
      </div>
    </li>
  )
}; 
