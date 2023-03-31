import { useSelector } from 'react-redux';
import { BtnViolSq } from 'src/components/BtnViolSq/BtnViolSq';
import st from './OrderSum.module.css';

export const OrderSum = () => {
  const {totalCount, totalPrice} = useSelector((state) => state.order);

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

        <div className={st.totalCounts}>
          <div className={st.total_sum}>
            <h4>Всего товаров:</h4>
            <p>{totalCount}</p>
          </div>

          <div className={st.total_sum}>
            <h4>Сумма заказа:</h4>
            <p>{totalPrice}&nbsp;₽</p>
          </div>
        </div>
      </div>
    </div>
  )
};
