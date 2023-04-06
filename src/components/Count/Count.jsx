import st from './Count.module.css';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from 'src/store/order/orderSlice';

// export const Count = ({ children }) => {
export const Count = ({ children, id, count }) => {
  // const [count, setCount] = useState(children);
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch(addProduct({
      id: id,
      // count: count
    }))
  };

  const removeCount = () => {
    dispatch(removeProduct({
      id: id,
      // count: count
    }))
  };

  return (
    <div className={`${st.count} container`}>
      <button
        className={st.minus}
        onClick={removeCount}
      // disabled={count === 1}
      >

        <svg width="8" height="3" viewBox="0 0 8 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.85714 0.535714C7.85714 0.239955 7.61719 0 7.32143 0H0.535714C0.239955 0 0 0.239955 0 0.535714V1.60714C0 1.9029 0.239955 2.14286 0.535714 2.14286H7.32143C7.61719 2.14286 7.85714 1.9029 7.85714 1.60714V0.535714Z" fill="#5C6370" />
        </svg>
      </button>

      {/* {children ? (
        <p className={st.amount}>{children}</p>
      ) : (
        <p className={st.amount}>0</p>
      )} */}

      <p className={st.amount}>{children}</p>

      <button className={st.plus} onClick={addCount}>

        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.85714 3.53571C7.85714 3.23996 7.61719 3 7.32143 3H5V0.678571C5 0.382812 4.76004 0.142857 4.46429 0.142857H3.39286C3.0971 0.142857 2.85714 0.382812 2.85714 0.678571V3H0.535714C0.239955 3 0 3.23996 0 3.53571V4.60714C0 4.9029 0.239955 5.14286 0.535714 5.14286H2.85714V7.46429C2.85714 7.76004 3.0971 8 3.39286 8H4.46429C4.76004 8 5 7.76004 5 7.46429V5.14286H7.32143C7.61719 5.14286 7.85714 4.9029 7.85714 4.60714V3.53571Z" fill="#5C6370" />
        </svg>
      </button>
    </div>
  )
};
