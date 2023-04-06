import { CartNavigation } from 'src/components/CartNavigation/CartNavigation';
import st from './SectionMakingOrder.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BtnViolSq } from 'src/components/BtnViolSq/BtnViolSq';
import setOrderListBrief from 'src/utils/setOrderListBrief';

export const SectionMakingOrder = () => {
  const orderList = useSelector((state) => state.order.orderList);
  console.log('orderList: ', orderList);

  const hendler = () => {
    console.log('ffff');
  }

  return (
    <main className={st.main}>
      <section className={`${st.section_making_order} container`}>
        <div className={st.container}>
          <div className={st.wrapper}>
            <h2>Оформление заказа</h2>

            <CartNavigation />

            <div className={st.form_container}>
              <form className={st.form} id='delivery'>
                <fieldset className={st.fieldset}>
                  <label className={st.label}>
                    <span>Имя:</span>

                    <input
                      className={st.input}
                      type='text'
                      name='name'
                      placeholder='Ваше имя'
                    />
                  </label>
                  <label className={st.label}>
                    <span>Телефон:</span>

                    <input
                      className={st.input}
                      type='tel'
                      name='phone'
                      placeholder='Телефон'
                    />
                  </label>
                </fieldset>

                <fieldset className={st.fieldset_radio}>
                  <label className={st.label_radio}>
                    <span className={st.label_radio_span}>Самовывоз</span>

                    <input
                      className={st.label_radio_input}
                      type='radio'
                      name='format'
                      value='pickup'
                      onChange={hendler}

                    />
                  </label>

                  <label className={st.label_radio}>
                    <span className={st.label_radio_span}>Доставка</span>

                    <input
                      className={st.label_radio_input}
                      type='radio'
                      name='format'
                      value='delivery'
                      onChange={hendler}

                      checked
                    />
                  </label>
                </fieldset>

                <fieldset className={st.fieldset}>
                  <label className={st.label}>
                    <span>Адрес:</span>

                    <div className={st.label_wpap}>
                      <input
                        className={st.input_100}
                        type='text'
                        name='address'
                        placeholder='Улица'
                      />
                      <input
                        className={[st.input_50]}
                        type='number'
                        name='homenumber'
                        placeholder='Дом'
                      />
                      <input
                        className={[st.input_50]}
                        type='number'
                        name='flatnumber'
                        placeholder='Квартира'
                      />
                    </div>
                  </label>
                </fieldset>
              </form>

              <h3>Состав заказа:</h3>

              {orderList.length ? (
                <ul className={st.order_list}>
                  {setOrderListBrief(orderList)}
                </ul>
              ) : (
                <p className={st.notification}>В корзине нет товаров</p>
              )}


              <div className={st.placeorder}>
                <Link to="/">
                  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.996094 6.90625C0.732422 7.16992 0.732422 7.60938 0.996094 7.87305L6.67969 13.5859C6.97266 13.8496 7.41211 13.8496 7.67578 13.5859L8.34961 12.9121C8.61328 12.6484 8.61328 12.209 8.34961 11.916L3.83789 7.375L8.34961 2.86328C8.61328 2.57031 8.61328 2.13086 8.34961 1.86719L7.67578 1.19336C7.41211 0.929688 6.97266 0.929688 6.67969 1.19336L0.996094 6.90625Z" fill="currentColor" />
                  </svg>
                  <p>Вернуться в магазин</p>
                </Link>

                <div className={orderList.length ? '' : st.link_disabled} to="/makingorder">
                  <BtnViolSq>
                    <p><span>Отправить заказ</span></p>

                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5625 5.87305C6.82617 5.60938 6.82617 5.16992 6.5625 4.87695L2.57812 0.892578C2.28516 0.628906 1.8457 0.628906 1.58203 0.892578L0.908203 1.56641C0.644531 1.85938 0.644531 2.29883 0.908203 2.5625L3.75 5.4043L0.908203 8.2168C0.644531 8.48047 0.644531 8.91992 0.908203 9.21289L1.58203 9.85742C1.8457 10.1504 2.28516 10.1504 2.57812 9.85742L6.5625 5.87305Z" fill="white" />
                    </svg>
                  </BtnViolSq>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
};
