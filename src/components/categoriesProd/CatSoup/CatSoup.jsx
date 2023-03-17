import st from './CatSoup.module.css';
import dataJson from 'src/data/data.json';
import setProdList from 'src/utils/setProdList';

export const CatSoup = () => {
  const dataListSoup = dataJson.soup;
  const category = dataListSoup[0].category;

  return (
    <>
      <h2>{category}</h2>
      <ul className={st.list}>
        {setProdList(dataListSoup)}
      </ul>
    </>
  )
};
