import { Map } from 'src/components/Map/Map';
import st from './Contacts.module.css';

export const Contacts = () => {

  return (
    <main className={st.contacts}>
      <section className={`${st.section_contacts} container`}>
        <h2>Контакты</h2>
        <Map />
      </section>
    </main>
  )
};
