import st from './Main.module.css';
import { SectionProductCards } from "src/modules/SectionProductCards/SectionProductCards"

export const Main = () => {

  return (
    <main className={st.main}>
      <SectionProductCards />
    </main>
  )
};
