import st from './ButtonGray.module.css';

export const ButtonGray = ({ children }) => {

  return (
    <button className={st.button__gray}>
      {children}
    </button>
  )
};
