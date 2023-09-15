import styles from "./footer.module.scss";

const Footer = () => {
  return <div className={styles.footer}>
    <div className={styles.companyBlock}>
      <img src='/logo-footer.svg' alt='logo-footer' className={styles.footerLogo}/>
      
        <div className={styles.menu}>
          <h2>Меню</h2>
          <nav className={styles.nav}>
              <ul className={styles.list}>
                <li><a href="">Головна</a></li>
                <li><a href="">навчання</a></li>
                <li><a href="">наша команда</a></li>
                <li><a href="">Contact us</a></li>
              </ul>
          </nav>
        </div>
        <div className={styles.contactsFollowsBlock}>
          <div className={styles.contactsBlock}>
            <h2>Контакти</h2>
            <div className={styles.contacts}>
              <p><img src="./footerIcons/telIcon.svg" alt="telIcon" /><a className={styles.contactLink} href="tel:+380939000000">+ 380 93 900 00 00</a></p>
              <p><img src="./footerIcons/mailIcon.svg" alt="mailIcon" /><a className={styles.contactLink} href="mailto:welcome@efa.com">welcome@efa.com</a></p>
            </div>
          </div>
          <div className={styles.followsBlock}>
          <h2>Стежити</h2>
          <div className={styles.followsIcons}>
            <img src="./footerIcons/facebook.svg" alt="facebookIcon" />
            <img src="./footerIcons/instIcon.svg" alt="instIcon" />
            <img src="./footerIcons/telegramIcon.svg" alt="telegramIcon" />
            <img src="./footerIcons/youtube.svg" alt="youtubeIcon" />
          </div>
          </div>
        </div>
      
      
      
    </div>
    <p className={styles.developerBlock}>Розробка <a href="https://baza-trainee.tech/ua" target="_blank">Baza Trainee Ukraine </a>2023 © Всі права захищені</p>
  </div>;
};
export default Footer;
