import { CartNavigation } from 'src/components/CartNavigation/CartNavigation';
import { Order } from 'src/components/Order/Order';
import { OrderSum } from 'src/components/OrderSum/OrderSum';
import st from './SectionCart.module.css';

export const SectionCart = () => {

  return (
    <main className={st.main}>
      <section className={`${st.section_cart} container`}>
        <div className={st.section_cart_container}>
          <div className={st.wrapper}>
            <h2>Корзина</h2>

            <CartNavigation />
          </div>

          <ul className={st.order_list}>
            <Order />

            <Order />
          </ul>

          <OrderSum />
        </div>
      </section>
    </main>
  )
};
