import st from './FooterDiffInform.module.css';
import logoFooter from 'src/img/logo-footer.svg'
import iconVisa from 'src/img/icons/icon-visa.svg'
import iconPP from 'src/img/icons/icon-pp.svg'
import iconMC from 'src/img/icons/icon-mc.svg'

export const FooterDiffInform = () => {

  return (
    <div className={st.footer_diff_inform}>
      <img className={st.logo_footer} src={logoFooter} alt="логотип Yo Bao" />
      <div className={st.footer_links}>
        <a href="#!">Калорийность и&nbsp;состав</a>
        <a href="#!">Правовая информация</a>
      </div>

      <div className={st.socnet}>
        <h3>Мы в соцсетях</h3>
        <div className={st.socnet_wrap}>
          <a href="#!">YouTube</a>
          <a href="#!">Instagram</a>
          <a href="#!">Facebook</a>
          <a href="#!">ВКонтакте</a>
        </div>
      </div>

      <div className={st.copyright}>
        <p>YaBao Все праава защищены&nbsp;©&nbsp;2021</p>
        <div className={st.copyright_pay}>
          <img src={iconVisa} alt="иконка системы оплаты Visa" />
          <img src={iconPP} alt="иконка системы оплаты PayPal" />
          <img src={iconMC} alt="иконка системы оплаты MasterCard" />
        </div>
      </div>
    </div>
  )
};
