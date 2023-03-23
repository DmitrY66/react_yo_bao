import { NavLink } from 'react-router-dom';
import st from './CartNavigation.module.css';

export const CartNavigation = () => {

  return (
    <ul className={st.cartnavigation_list}>
      <li className={st.cartnavigation_item}>
        <NavLink className={st.cartnavigation_link} to="#">
          <h4>1</h4>
        </NavLink>
        <p>Корзина</p>
      </li>

      <li className={st.cartnavigation_item}>
        <NavLink className={st.cartnavigation_link} to="/cat">
          <h4>2</h4>
        </NavLink>
        <p>Оформление заказа</p>
      </li>

      <li className={st.cartnavigation_item}>
        <NavLink className={st.cartnavigation_link} to="/cat">
          <h4>3</h4>
        </NavLink>
        <p>Заказ принят</p>
      </li>
    </ul>
  )
};
