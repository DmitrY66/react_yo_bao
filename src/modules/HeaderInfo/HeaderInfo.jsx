import st from './HeaderInfo.module.css';
import { ButtonGray } from '../../components/ButtonGray/ButtonGray';
import { Delivery } from '../../components/Delivery/Delivery';
import { Phone800 } from '../../components/Phone800/Phone800';
import logo from '../../img/logo.svg';

export const HeaderInfo = () => {

  return (
    <div className={`${st.header__info} container`}>
      <div className={st.header__info_group_left}>
        <img src={logo} alt="логотип" />
        <Delivery />
      </div>
      <div className={st.header__info_group_right}>
        <ButtonGray>Заказать звонок</ButtonGray>
        <Phone800 />
      </div>
    </div>
  )
};
