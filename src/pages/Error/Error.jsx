import st from './Error.module.css';
import koi from 'src/img/koi.svg';

export const Error = () => {

  return (
    <div className={`${st.error} container`}>
      <h2>Страница не найдена</h2>
      <div className={st.error_wrap}>
        <p>4</p>
        <img src={koi} alt="цыфра ноль в виде китайскич рыбок кои" />
        <p>4</p>
      </div>
    </div>
  )
};
