import st from './BtnViolEll.module.css';

export const BtnViolEll = ({ children }) => {

  return (
    <button className={st.btn_viol_ell}>
      {children}
    </button>
  )
};
