import st from './SectionProductCards.module.css';
import { Outlet } from 'react-router-dom';

export const SectionProductCards = () => {

  return (
    <section className={`${st.section_product_cards} container`}>
      <Outlet />
    </section>
  )
};

