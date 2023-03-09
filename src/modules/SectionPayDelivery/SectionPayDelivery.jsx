// import { CardTypesDelivery } from '../../components/CardTypesDelivery/CardTypesDelivery';
import { CardTypesDelivery } from 'src/components/CardTypesDelivery/CardTypesDelivery';
import st from './SectionPayDelivery.module.css';
import googleMap from 'src/img/google-map.jpg'

export const SectionPayDelivery = () => {
  const dataList = [
    {
      "id": "1223980593n",
      "imgPath": "assets/img/icons/types_delivery1.svg",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      "id": "1223980593a",
      "imgPath": "assets/img/icons/types_delivery2.svg",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      "id": "1223980593s",
      "imgPath": "assets/img/icons/types_delivery3.svg",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      "id": "1223980593d",
      "imgPath": "assets/img/icons/types_delivery4.svg",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
  ];

  return (

    // <section className={st.section_pay_delivery}>
    <section className={st.section_pay_delivery}>
      <h2>Оплата и доставка</h2>

      <div className={`${st.section_pay_delivery_wrap} container`}>
        <ul className={st.type_delivery_list}>
          {dataList.map(item =>
            <CardTypesDelivery
              key={item.id}
              src={item.imgPath}
              text={item.text}
            />)}
        </ul>
        <img className={st.pay_delivery_map} src={googleMap} alt="карта google" />
      </div>
    </section>
  )
};
