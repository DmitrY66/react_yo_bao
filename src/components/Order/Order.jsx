import st from './Order.module.css';
import photoGood from 'src/img/no-photo.svg';
import iconDelete from 'src/img/icons/icon-delete.svg';
import { Count } from 'src/components/Count/Count';

export const Order = () => {

  return (
    <li className={st.order}>
      <div className={st.order_wrap_flax}>
        <img className={st.order_img} src={photoGood} alt="фото товара" />
        <div className={st.order_wrap_block}>
          <h3 className={st.order_title}>Томатный суп с яйцами</h3>
          <p className={st.order_description}>Лёгкое, но питательное, с потрясающим кисло-сладким вкусом, немного острое первое блюдо. Это простой, но очень вкусный и ароматный супчик на курином бульоне.</p>
        </div>
      </div>

      <div className={st.order_wrap_flax}>
        <p className={st.price}>120 ₽</p>

        <Count />

        <button className={st.btn_delete}>
          <img src={iconDelete} alt="иконка удалить" />
        </button>
      </div>
    </li>
  )
};
