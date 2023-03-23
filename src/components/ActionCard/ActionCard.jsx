import { BtnViolSq } from '../BtnViolSq/BtnViolSq';
import st from './ActionCard.module.css';

export const ActionCard = ({ actionphoto, title, description }) => {

  return (
    <li className={st.action_card}>
      <img src={actionphoto} alt="фото товара" />

      <div className={st.card_container}>
        <h3>{title}</h3>

        <p tabIndex="0">{description}</p>

        <BtnViolSq className={st.btn_mod}>Посмотреть</BtnViolSq>
        {/* <button className={st.btn_mod}>Посмотреть</button> */}
      </div>
    </li>
  )
};
