import st from './Registration.module.css';

export const Registration = ({ registrationActive, setRegistrationActive, handlerModal }) => {

  return (
    <div
      className={!registrationActive ? st.registration_hide : st.registration_show}
      onClick={handlerModal}
    >
      <form
        className={st.form}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Вход на сайт</h3>

        <div
          className={st.close}
          onClick={handlerModal}
        ></div>

        <fieldset className={st.fieldset}>
          <label className={st.label}>
            <span>Эл. почта:</span>

            <input
              className={st.input}
              type='email'
              name='email'
              // value={}
              placeholder='e-mail'
              onChange={() => { }} />
          </label>

          <label className={st.label}>
            <span>Пароль:</span>

            <input
              className={st.input}
              type='text'
              name='password'
              // value={}
              placeholder='пароль'
              onChange={() => { }} />
          </label>
        </fieldset>

        <div className={st.btn_container}>
          <button
            className={st.form_btn}
            onClick={(e) => e.preventDefault()}
          >Войти</button>
          <button
            className={st.form_btn}
            disabled
          >Ргистрация</button>
        </div>

        <p className={st.form_p}>
          Продолжая, вы&nbsp;соглашаетесь со&nbsp;сбором и&nbsp;обработкой персональных данных и&nbsp;пользовательским соглашением.
        </p>
      </form>
    </div>
  )
};
