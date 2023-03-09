import st from './BtnViolSq.module.css';

export const BtnViolSq = ({ children }) => {
  return (
    <div className={st.btn__viol__sq} role='button'>
      {children}
    </div>
  )
};
