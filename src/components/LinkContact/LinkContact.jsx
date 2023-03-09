import st from './LinkContact.module.css';

export const LinkContact = ({ href, src }) => {

  return (
    <a href={href} className={st.link_contact}>
      <img src={src} alt="иконка меседжера" />
    </a>
  )
};
