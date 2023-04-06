import { CartNavigation } from 'src/components/CartNavigation/CartNavigation';
import st from './SectionOrderSuccess.module.css';
import { Link } from 'react-router-dom';

export const SectionOrderSuccess = () => {

  return (
    <main className={st.main}>
      <section className={`${st.section_order_success} container`}>
        <div className={st.container}>
          <div className={st.wrapper}>
            <h2>Заказ принят</h2>

            <CartNavigation />

            <p className={st.notification}>
              Благодарим за&nbsp;Ваш заказ! С&nbsp;нетерпением ждем&nbsp;новых!
            </p>

            <Link to="/" className={st.link}>
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.996094 6.90625C0.732422 7.16992 0.732422 7.60938 0.996094 7.87305L6.67969 13.5859C6.97266 13.8496 7.41211 13.8496 7.67578 13.5859L8.34961 12.9121C8.61328 12.6484 8.61328 12.209 8.34961 11.916L3.83789 7.375L8.34961 2.86328C8.61328 2.57031 8.61328 2.13086 8.34961 1.86719L7.67578 1.19336C7.41211 0.929688 6.97266 0.929688 6.67969 1.19336L0.996094 6.90625Z" fill="currentColor" />
              </svg>
              <p>Вернуться в магазин</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
};
