import st from './Home.module.css';
import { SectionActions } from 'src/modules/SectionActions/SectionActions';
import { SectionHero } from 'src/modules/SectionHero/SectionHero';
import { SectionNewItems } from 'src/modules/SectionNewItems/SectionNewItems';
import { SectionPayDelivery } from 'src/modules/SectionPayDelivery/SectionPayDelivery';
import { SectionProductCardsHome } from 'src/modules/SectionProductCardsHome/SectionProductCardsHome';

export const Home = () => {

  return (
    <main className={st.main}>
      <SectionHero />
      <SectionNewItems />
      <SectionProductCardsHome />
      <SectionActions />
      <SectionPayDelivery />
    </main>
  )
};
