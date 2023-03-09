import { SectionActions } from '../SectionActions/SectionActions';
import { SectionHero } from '../SectionHero/SectionHero';
import { SectionNewItems } from '../SectionNewItems/SectionNewItems';
import { SectionPayDelivery } from '../SectionPayDelivery/SectionPayDelivery';
import { SectionProductCard } from '../SectionProductCard/SectionProductCard';
import st from './Main.module.css';

export const Main = () => {

  return (
    // <main className={`${st.main} container`}>
    <main className={st.main}>
      <SectionHero />
      <SectionNewItems />
      <SectionProductCard />
      <SectionActions />
      <SectionPayDelivery />
    </main>
  )
};
