import { NavLink } from 'react-router-dom';
import st from './Navigation.module.css';

export const Navigation = ({ menuActive, setMenuActive }) => {
  const show = () => setMenuActive(!menuActive);

  return (
    <div className={st.container}>
      <div
        className={menuActive ? st.overlayShow : st.overlayHide}
        onClick={show}
      ></div>

      <nav className={menuActive ? st.navigationShow : st.navigationHide}>
        <button
          className={st.btn_close}
          onClick={show}
        ></button>

        <ul className={st.nav__list}>
          <li className={st.nav__item} onClick={show}><NavLink to="/">Home</NavLink></li>
          <li className={st.nav__item} onClick={show}><NavLink to="/cat/pasta">Паста</NavLink></li>
          <li className={st.nav__item} onClick={show}><NavLink to="/cat/soup">Супы</NavLink></li>
          <li className={st.nav__item} onClick={show}><NavLink to="/cat/salads">Салаты</NavLink></li>
          <li className={st.nav__item} onClick={show}><NavLink to="/cat/antipasti">Антипасти</NavLink></li>
          <li className={st.nav__item} onClick={show}><NavLink to="/cat/drinks">Напитки</NavLink></li>
          <li className={st.nav__item} onClick={show}><NavLink to="/cat/desserts">Десерты</NavLink></li>
          <li className={st.nav__item} onClick={show}><NavLink to="/cat/grocery">Бакалея</NavLink></li>
          <li className={st.nav__item} onClick={show}><NavLink to="/actions">Акции</NavLink></li>
          <li className={st.nav__item} onClick={show}><NavLink to="/contacts">Контакты</NavLink></li>
        </ul>
      </nav>
    </div>
  )
};
