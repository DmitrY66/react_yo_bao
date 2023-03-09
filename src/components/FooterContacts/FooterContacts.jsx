import { ButtonGray } from '../ButtonGray/ButtonGray';
import { LinkContact } from '../LinkContact/LinkContact';
import { Phone800 } from '../Phone800/Phone800';
import st from './FooterContacts.module.css';

export const FooterContacts = () => {
  const linksList = [
    {
      "id": "12er80593ny",
      "imgPath": "assets/img/icons/contact-viber.svg",
      "link": "#!"
    },
    {
      "id": "12er80593qw",
      "imgPath": "assets/img/icons/contact-skype.svg",
      "link": "#!"
    },
    {
      "id": "12er80593n4",
      "imgPath": "assets/img/icons/contact-zoom.svg",
      "link": "#!"
    },
    {
      "id": "12er80593n1",
      "imgPath": "assets/img/icons/contact-telegram.svg",
      "link": "#!"
    },
    {
      "id": "12er80593nl",
      "imgPath": "assets/img/icons/contact-facebook.svg",
      "link": "#!"
    },
    {
      "id": "12er80593nm",
      "imgPath": "assets/img/icons/contact-vk.svg",
      "link": "#!"
    }
  ];

  return (
    <div className={st.footer_contacts}>
      <h3>Остались вопросы? А мы всегда на связи:</h3>
      <div className={st.cotact_links}>
        {linksList.map(item =>
          <LinkContact
            key={item.id}
            href={item.link}
            src={item.imgPath}
          />)}
        <button className={st.btn_contacts}>Написать нам</button>
      </div>
      <Phone800 />
      <div className={st.margin_bottom}></div>
      <ButtonGray>Заказать звонок</ButtonGray>
    </div>
  )
};
