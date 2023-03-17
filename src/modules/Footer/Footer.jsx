import { FooterContacts } from 'src/components/FooterContacts/FooterContacts';
import { FooterDiffInform } from 'src/components/FooterDiffInform/FooterDiffInform';
import st from './Footer.module.css';

export const Footer = () => {

  return (
    <footer className={`${st.footer}  container`} id="footer">
      <FooterDiffInform />
      <FooterContacts />
    </footer>
  )
};
