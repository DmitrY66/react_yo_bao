import st from './CatPasta.module.css';
import dataJson from 'src/data/data.json';
import setProdList from 'src/utils/setProdList';

export const CatPasta = () => {
  const dataListPasta = dataJson.pasta;
  const category = dataListPasta[0].category;

  return (
    <>
      <h2>{category}</h2>
      <ul className={st.list}>
        {setProdList(dataListPasta)}
      </ul>
    </>
  )
};
