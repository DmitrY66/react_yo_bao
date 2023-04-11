import { NavLink } from 'react-router-dom';
import st from './CartNavigation.module.css';

export const CartNavigation = () => {
  const pathname = window.location.pathname;

  return (
    <ul className={st.cartnavigation_list}>
      <li className={st.cartnavigation_item}>
        <NavLink
          className={
            pathname === '/makingorder' || pathname === '/ordersuccess'
              ? st.link_disabled : st.cartnavigation_link
          }
          to="/cart">
          <h4>1</h4>
        </NavLink>
        <p>Корзина</p>
      </li>

      <li className={st.cartnavigation_item}>
        <NavLink
          className={
            pathname === '/cart' || pathname === '/ordersuccess'
              ? st.link_disabled : st.cartnavigation_link
          }
          to="/makingorder">
          <h4>2</h4>
        </NavLink>
        <p>Оформление заказа</p>
      </li>

      <li className={st.cartnavigation_item}>
        <NavLink
          className={
            pathname === '/cart' || pathname === '/makingorder'
              ? st.link_disabled : st.cartnavigation_link
          }
          to="/ordersuccess">
          <h4>3</h4>
        </NavLink>
        <p>Заказ принят</p>
      </li>
    </ul>
  )
};
