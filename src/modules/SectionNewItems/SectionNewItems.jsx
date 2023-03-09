import { CardNewItem } from '../../components/CardNewItem/CardNewItem';
import st from './SectionNewItems.module.css';

export const SectionNewItems = () => {

  return (
    // <section className={st.section_new_items}>
    <section className={`${st.section_new_items} container`}>
      <h2>Новинки</h2>
      <ul className={st.new_items_list}>
        <CardNewItem />
        <CardNewItem />
        <CardNewItem />
        <CardNewItem />
      </ul>
    </section>
  )
};
