import st from './OrderBrief.module.css';
// import { Count } from 'src/components/Count/Count';

export const OrderBrief = ({ productphoto, title, description, price, count, id }) => {


  return (
    <li className={st.order} >
      <div className={st.order_wrap_flax}>
        <img className={st.order_img} src={productphoto} alt="фото товара" />
        <div className={st.order_wrap_block}>
          <h3 className={st.order_title}>{title}</h3>
          <p className={st.order_description}>{description}</p>
        </div>
      </div>

      <div className={st.order_wrap_flax}>
        <p className={st.price}>{count}&nbsp;шт.</p>

        <p className={st.price}><span>на сумму</span></p>

        <p className={st.price}>{price * count}&nbsp;₽</p>
      </div>
    </li>
  )
};
