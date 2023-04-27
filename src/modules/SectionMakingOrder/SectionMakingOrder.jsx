import { CartNavigation } from 'src/components/CartNavigation/CartNavigation';
import st from './SectionMakingOrder.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BtnViolSq } from 'src/components/BtnViolSq/BtnViolSq';
import setOrderListBrief from 'src/utils/setOrderListBrief';
import {
  submitForm,
  validationName,
  updadeFormValue,
  validationPhone,
  validationStreet,
  validationHomenumber,
  validationFlatnumber,
} from 'src/store/form/formSlice';
import { OrderSum } from 'src/components/OrderSum/OrderSum';

export const SectionMakingOrder = () => {
  const order = useSelector((state) => state.order);
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const patternName = /^[а-яА-Яa-zA-Z]{2,30}$/;
  const patternPhone = /^\+?[1-9][0-9]{7,14}$/;
  const patternStreet = /^[а-яА-Яa-zA-Z]{2,30}$/;
  const patternHomenumber = /^[1-9][0-9]*([a-z]|[а-я]|(\/[1-9][0-9]*))?$/i;
  const patternFlatnumber = /^\d{1,4}$/;

  const formValidation = () => {
    if (form.format === 'delivery') {
      if (
        form.nameValid &&
        form.phoneValid &&
        form.streetValid &&
        form.homenumberValid &&
        form.flatnumberValid) {
        return true
      } else {
        return false;
      }
    } else {
      if (
        form.nameValid &&
        form.phoneValid) {
        return true
      } else {
        return false;
      }
    }
  };

  const handleInputChange = (e, pattern) => {
    dispatch(updadeFormValue({
      field: e.target.name,
      value: e.target.value,
    }));

    if (e.target.name === 'name') {
      dispatch(validationName({
        validName: pattern.test(e.target.value),
      }));
    }

    if (e.target.name === 'phone') {
      dispatch(validationPhone({
        validPhone: pattern.test(e.target.value),
      }));
    }

    if (e.target.name === 'street') {
      dispatch(validationStreet({
        validStreet: pattern.test(e.target.value),
      }));
    }

    if (e.target.name === 'homenumber') {
      dispatch(validationHomenumber({
        validHomenumber: pattern.test(e.target.value),
      }));
    }

    if (e.target.name === 'flatnumber') {
      dispatch(validationFlatnumber({
        validFlatnumber: pattern.test(e.target.value),
      }));
    }

    if (!pattern.test(e.target.value)) {
      // console.log('что-то не так');
      e.target.style.outline = '1px solid #ff5454';
      e.target.parentElement.children[1].style.display = 'block';
    } else {
      // console.log('круто, все ок');
      e.target.style.outline = 'none';
      e.target.parentElement.children[1].style.display = 'none';
    }
  };

  const handleInputChangeRadio = e => {
    dispatch(updadeFormValue({
      field: e.target.name,
      value: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const formCopy = { ...form }
    formCopy.status = 'cleared';
    formCopy.response = null;

    dispatch(submitForm({ ...formCopy, order }));

    navigate('/ordersuccess');
  };

  return (
    <main className={st.main}>
      <section className={`${st.section_making_order} container`}>
        <div className={st.container}>
          <div className={st.wrapper}>
            <h2>Оформление заказа</h2>

            <CartNavigation />

            <div className={st.form_container}>
              <form className={st.form} id='formorders' >
                <fieldset className={st.fieldset}>
                  <label className={st.label}>
                    <span>Имя:</span>

                    <div className={st.input_wrap}>
                      <input
                        className={st.input}
                        type='text'
                        name='name'
                        value={form.name}
                        placeholder='Ваше имя'
                        onChange={(e) => handleInputChange(e, patternName)}
                      />

                      <p className={st.error}>Не верное имя!</p>
                    </div>
                  </label>
                  <label className={st.label}>
                    <span>Телефон:</span>

                    <div className={st.input_wrap}>
                      <input
                        className={st.input}
                        type='tel'
                        name='phone'
                        value={form.phone}
                        placeholder='Телефон'
                        onChange={(e) => handleInputChange(e, patternPhone)}
                      />

                      <p className={st.error}>Не верный телефон!</p>
                    </div>
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
                      checked={form.format === 'pickup'}
                      onChange={handleInputChangeRadio}
                    />
                  </label>

                  <label className={st.label_radio}>
                    <span className={st.label_radio_span}>Доставка</span>

                    <input
                      className={st.label_radio_input}
                      type='radio'
                      name='format'
                      value='delivery'
                      checked={form.format === 'delivery'}
                      onChange={handleInputChangeRadio}
                    />
                  </label>
                </fieldset>

                {form.format === 'delivery' && (
                  <fieldset className={st.fieldset}>
                    <label className={st.label}>
                      <span>Адрес:</span>

                      <div className={st.label_wpap}>
                        <div className={st.input_wrap}>
                          <input
                            className={st.input_100}
                            type='text'
                            name='street'
                            value={form.street}
                            placeholder='Улица'
                            onChange={(e) => handleInputChange(e, patternStreet)}
                          />

                          <p className={st.error}>Не верная улица!</p>
                        </div>

                        <div className={st.input_wrap}>
                          <input
                            className={[st.input_50]}
                            type='text'
                            name='homenumber'
                            value={form.homenumber}
                            placeholder='Дом'
                            onChange={(e) => handleInputChange(e, patternHomenumber)}
                          />

                          <p className={st.error}>Не верный номер дома!</p>
                        </div>

                        <div className={st.input_wrap}>
                          <input
                            className={[st.input_50]}
                            type='number'
                            name='flatnumber'
                            value={form.flatnumber}
                            placeholder='Квартира'
                            onChange={(e) => handleInputChange(e, patternFlatnumber)}
                          />

                          <p className={st.error}>Не верный номер квартиры!</p>
                        </div>
                      </div>
                    </label>
                  </fieldset>
                )}

                <h3>Состав заказа:</h3>

                {order.orderList.length ? (
                  <ul className={st.order_list}>
                    {setOrderListBrief(order.orderList)}
                  </ul>
                ) : (
                  <p className={st.notification}>В корзине нет товаров</p>
                )}
              </form>

              <OrderSum />

              <div className={st.placeorder}>
                <Link to="/">
                  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.996094 6.90625C0.732422 7.16992 0.732422 7.60938 0.996094 7.87305L6.67969 13.5859C6.97266 13.8496 7.41211 13.8496 7.67578 13.5859L8.34961 12.9121C8.61328 12.6484 8.61328 12.209 8.34961 11.916L3.83789 7.375L8.34961 2.86328C8.61328 2.57031 8.61328 2.13086 8.34961 1.86719L7.67578 1.19336C7.41211 0.929688 6.97266 0.929688 6.67969 1.19336L0.996094 6.90625Z" fill="currentColor" />
                  </svg>
                  <p>Вернуться в магазин</p>
                </Link>


                <div
                  className={
                    order.orderList.length && formValidation() ? '' : st.disabled
                  }
                  onClick={handleSubmit}
                >
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
  );
};
