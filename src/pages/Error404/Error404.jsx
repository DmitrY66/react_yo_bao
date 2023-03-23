import st from './Error404.module.css';
import koi from 'src/img/koi.svg';

export const Error404 = () => {

  return (
    <main className={`${st.error404} container`}>
      <h2>Страница не найдена</h2>
      <div className={st.error404_wrap}>
        <p>4</p>
        <img src={koi} alt="цыфра ноль в виде китайскич рыбок кои" />
        <p>4</p>
      </div>
    </main>
  )
};
