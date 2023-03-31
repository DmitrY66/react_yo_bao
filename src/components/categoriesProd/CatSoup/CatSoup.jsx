import st from './CatSoup.module.css';
import setProdList from 'src/utils/setProdList';
import { useSelector } from 'react-redux';

export const CatSoup = () => {
  const dataListSoup = useSelector((state) => state.getData.data.soup);

  return (
    <>
      <h2>Супы</h2>

      {dataListSoup.length ? (
        <ul className={st.list}>
          {setProdList(dataListSoup)}
        </ul>) : (
        <p className={st.notification}>Извините, товары данной категории временно отсутствуют</p>
      )}
    </>
  )
};
