import { BtnViolSq } from 'src/components/BtnViolSq/BtnViolSq';
import st from './OrderSum.module.css';

export const OrderSum = () => {

  return (
    <div className={st.ordersum}>
      <h3>Промокод</h3>
      <div className={st.ordersum_wrap}>
        <form>
          <fieldset className={st.fieldset}>
            <input className={st.input} type="text" />
            <BtnViolSq>
              <p>Применить</p>
            </BtnViolSq>
          </fieldset>
        </form>

        <div className={st.total_sum}>
          <h4>Сумма заказа:</h4>
          <p>1 048 ₽</p>
        </div>
      </div>
    </div>
  )
};
