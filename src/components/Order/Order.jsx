import st from './Order.module.css';
import iconDelete from 'src/img/icons/icon-delete.svg';
import { Count } from 'src/components/Count/Count';

export const Order = ({ productphoto, title, description, price, count, id }) => {


  return (
    <li className={st.order} >
      <div className={st.order_wrap_flax}>
        <img className={st.order_img} src={productphoto} alt="фото товара" />
        <div className={st.order_wrap_block}>
          <h3 className={st.order_title}>{title}</h3>
          <p className={st.order_description}>{description}</p>
        </div>
      </div>

      <div className={st.order_wrap_flax}>
        <p className={st.price}>{price}&nbsp;₽</p>

        <Count id={id}>{count}</Count>

        <button className={st.btn_delete}>
          <img src={iconDelete} alt="иконка удалить" />
        </button>
      </div>
    </li>
  )
};
