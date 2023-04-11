import st from './OrderBrief.module.css';

export const OrderBrief = ({ productphoto, title, description, price, count, id }) => {


  return (
    <li className={st.order} >
      <div className={st.order_wrap_block}>
        <img className={st.order_img} src={productphoto} alt="фото товара" />
        <h4 className={st.order_title}>{title}</h4>
      </div>

      <div className={st.order_wrap_flax}>
        <p className={st.price}>{count}&nbsp;шт.</p>

        <p className={st.price}><span>на сумму</span></p>

        <p className={st.price}>{price * count}&nbsp;₽</p>
      </div>
    </li>
  )
};
