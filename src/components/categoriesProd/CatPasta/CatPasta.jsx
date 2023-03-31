import st from './CatPasta.module.css';
import setProdList from 'src/utils/setProdList';
import { useSelector } from 'react-redux';

export const CatPasta = () => {
  const dataListPasta = useSelector((state) => state.getData.data.pasta);

  return (
    <>
      <h2>Паста</h2>

      {dataListPasta.length ? (
        <ul className={st.list}>
          {setProdList(dataListPasta)}
        </ul>) : (
        <p className={st.notification}>Извините, товары данной категории временно отсутствуют</p>
      )}
    </>
  )
};
