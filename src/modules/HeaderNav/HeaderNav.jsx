import { BtnViolSq } from '../../components/BtnViolSq/BtnViolSq';
import { Navigation } from '../../components/Navigation/Navigation';
import st from './HeaderNav.module.css';

export const HeaderNav = () => {

  return (
    <div className={`${st.header__nav} container`}>
      <Navigation />

      <button className={st.btn_menu}>Меню</button>

      <button className={st.log_in}>Войти</button>
      
      <BtnViolSq>
        {/* <p>Корзина</p> */}
        <svg xmlns="http://www.w3.org/2000/svg"
          height="28"
          width="28"
          viewBox="0 0 48 48">
          <g fill="currentColor">
            <path d="M20 16h4v10h-4zM28 16h4v10h-4zM40 22l-4 4V16h4z" />
          </g>
          <g fill="currentColor">
            <path
              d="M45 10H15c-.6 0-1-.4-1-1V5c0-1.7-1.3-3-3-3H0v2h.1c.4 2 2 3.5 4 3.9C4.5 10.2 6.6 12 9 12h3v14h2V11.8c.3.1.6.2 1 .2h30c.6 0 1 .4 1 1v7c0 .8-.5 2.2-1.1 2.8l-6.3 7c-.5.6-1.8 1.2-2.6 1.2H15c-1.7 0-3 1.3-3 3v2.1c-2.3.5-4 2.5-4 4.9 0 2.8 2.2 5 5 5 2.4 0 4.4-1.7 4.9-4h8.2c.5 2.3 2.5 4 4.9 4 2.8 0 5-2.2 5-5s-2.2-5-5-5c-2.4 0-4.4 1.7-4.9 4h-8.2c-.4-2-1.9-3.5-3.9-3.9V34c0-.6.4-1 1-1h21c1.4 0 3.1-.8 4.1-1.8l6.3-7c.9-1 1.6-2.8 1.6-4.2v-7c0-1.7-1.3-3-3-3zM2.2 4H11c.6 0 1 .4 1 1v1H5c-1.3 0-2.4-.8-2.8-2zM9 10c-1.3 0-2.4-.8-2.8-2H12v2H9zm22 28c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm-15 3c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3z" />
            <path
              d="M31 42.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zM11.5 41c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5z" />
          </g>
        </svg>

        <svg width="2" height="23" viewBox="0 0 2 23" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="2" height="23" rx="1" fill="currentColor" /></svg>
        <p className={st.count}>1</p>
      </BtnViolSq>
    </div>
  )
};
