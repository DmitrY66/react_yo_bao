import st from './Delivery.module.css';

export const Delivery = () => {

  return (
    <div className={st.delivery}>
      <h6>Доставка заказа <button>Москва</button></h6>
      <div className={st.delivery__time}>
        <p>Время доставки</p>
        <svg width="4" height="4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2" cy="2" r="2" fill="#FF2E65" />
        </svg>
        <p> от 31 мин</p>
      </div>
    </div>
  )
};
