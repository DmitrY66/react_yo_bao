import st from './SectionProductCardsHome.module.css';
import { CatPasta } from 'src/components/categoriesProd/CatPasta/CatPasta';

export const SectionProductCardsHome = () => {

  return (
    <section className={`${st.section_product_cards} container`}>
      <CatPasta />
    </section>
  )
};
