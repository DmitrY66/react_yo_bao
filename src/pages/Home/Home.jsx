import st from './Home.module.css';
import { SectionActions } from "src/modules/SectionActions/SectionActions"
import { SectionHero } from "src/modules/SectionHero/SectionHero"
import { SectionNewItems } from "src/modules/SectionNewItems/SectionNewItems"
import { SectionPayDelivery } from "src/modules/SectionPayDelivery/SectionPayDelivery"
import { SectionProductCards } from "src/modules/SectionProductCards/SectionProductCards"

export const Home = () => {

  return (
    <main className={st.main}>
      <SectionHero />
      <SectionNewItems />
      <SectionProductCards />
      <SectionActions />
      <SectionPayDelivery />
    </main>
  )
};