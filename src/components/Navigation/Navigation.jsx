import { NavLink } from 'react-router-dom';
import st from './Navigation.module.css';

export const Navigation = () => {

  return (
    <nav className={st.navigation}>
      <button className={st.btn_close}></button>
      <ul className={st.nav__list}>
        <li className={st.nav__item}><NavLink to="/">Home</NavLink></li>
        <li className={st.nav__item}><NavLink to="/cat/pasta">Паста</NavLink></li>
        <li className={st.nav__item}><NavLink to="/cat/soup">Супы</NavLink></li>
        <li className={st.nav__item}><NavLink to="/cat/salads">Салаты</NavLink></li>
        <li className={st.nav__item}><NavLink to="/cat/antipasti">Антипасти</NavLink></li>
        <li className={st.nav__item}><NavLink to="/cat/drinks">Напитки</NavLink></li>
        <li className={st.nav__item}><NavLink to="/cat/desserts">Десерты</NavLink></li>
        <li className={st.nav__item}><NavLink to="/cat/grocery">Бакалея</NavLink></li>
        <li className={st.nav__item}><NavLink to="/actions">Акции</NavLink></li>
        <li className={st.nav__item}><NavLink to="/contacts">Контакты</NavLink></li>
      </ul>
    </nav>
  )
};
