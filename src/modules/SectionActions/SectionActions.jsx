import { Link } from 'react-router-dom';
import st from './SectionActions.module.css';
import actionBanner from 'src/img/action-banner.png'

export const SectionActions = () => {

  return (
    // <section className={st.section_actions}>
    <section className={`${st.section_actions} container`}>
      <h2><span>Наши</span> акции</h2>
      <ul className={st.actions_list}>
        <li><img src={actionBanner} alt="баннер рекламной акции" /></li>
        <li><img src={actionBanner} alt="баннер рекламной акции" /></li>
        <li><img src={actionBanner} alt="баннер рекламной акции" /></li>
        <li><img src={actionBanner} alt="баннер рекламной акции" /></li>
        <li><img src={actionBanner} alt="баннер рекламной акции" /></li>
      </ul>
      <Link to="/actions">Все вкции</Link>
    </section>
  )
};
