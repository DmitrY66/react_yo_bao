import st from './SectionHero.module.css';

export const SectionHero = () => {

  return (
    // <section className={st.section_hero}>
    <section className={`${st.section_hero} container`}>
      <div className={st.section_hero_wrap}>
        <h1 className='visually-hidden'>Yo Bao Дух китайской еды</h1>
      </div>
    </section>
  );
};
