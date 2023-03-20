import dataJson from 'src/data/data.json';
import setActionList from 'src/utils/setActionList';
import st from './Actions.module.css';

export const Actions = () => {
  const dataListActios = dataJson.actios;

  return (
    <main className={st.actions}>
      <section className={`${st.section_actions} container`}>
        <h2>Наши акции</h2>

        <ul className={st.list}>
          {setActionList(dataListActios)}
        </ul>
      </section>
    </main>
  )
};
