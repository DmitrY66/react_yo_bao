import st from './CardTypesDelivery.module.css';

export const CardTypesDelivery = ({ src, text, id }) => {

  return (
    <li className={st.card_types_delivery} key={id}>
      <div className={st.icon_types_delivery}>
        <img src={src} alt="иконка типа доставки" />
      </div>
      <p>{text}</p>
    </li>
  )
};
