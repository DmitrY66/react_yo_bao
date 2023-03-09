import st from './Navigation.module.css';

export const Navigation = () => {

  return (
    <nav className={st.navigation}>
      <button className={st.btn_close}></button>
      <ul className={st.nav__list}>
        <li className={st.nav__item}><a href="#!">Паста</a></li>
        <li className={st.nav__item}><a href="#!">Супы</a></li>
        <li className={st.nav__item}><a href="#!">Салаты</a></li>
        <li className={st.nav__item}><a href="#!">Антипасти</a></li>
        <li className={st.nav__item}><a href="#!">Напитки</a></li>
        <li className={st.nav__item}><a href="#!">Десерты</a></li>
        <li className={st.nav__item}><a href="#!">Бакалея</a></li>
        <li className={st.nav__item}><a href="#!">Акции</a></li>
        <li className={st.nav__item}><a href="#!">Комбо</a></li>
        <li className={st.nav__item}><a href="#!">Контакты</a></li>
      </ul>
    </nav>
  )
};
