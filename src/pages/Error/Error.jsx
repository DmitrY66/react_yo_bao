import st from './Error.module.css';
import koi from 'src/img/koi.svg';

export const Error = () => {

  return (
    <section className={`${st.error404} container`}>
      <h2>Страница не найдена</h2>
      <div className={st.error404_wrap}>
        <p>4</p>
        <img src={koi} alt="китайские рыбки кои" />
        <p>4</p>
      </div>
    </section>
  )
};
