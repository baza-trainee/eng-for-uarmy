import { useTranslations } from "next-intl";

import styles from "./privacy-policy.module.scss";

const PrivacyPolicy = () => {
  //   const t = useTranslations("privacy policy");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>Website Privacy Policy</h2>
            <p className={styles.textHead}>Last Update: Apr 11, 2022</p>
          </div>

          <div className={styles.policyWrapper}>
            <div className={styles.textWrapper}>
              <p className={styles.text}>
                This Website Privacy Policy (“Privacy Policy”) covers the web
                sites (“Web Sites”) operated by Intellum, Inc. (“Intellum” or
                “we” or “us” or “our”), including but not limited to
                Intellum.com, Exceedlms.com, Catcat.com, Facebookblueprint.com,
                Snacker.tv and Tribesocial.com. This Privacy Policy describes
                the types of information that we collect, what we do with it,
                how we protect it, and if and when we disclose it to third
                parties. This Privacy Policy is a part of and subject to the
                Intellum Terms of Service (“TOS”). Accordingly, when you enter
                into the TOS, you agree that you have read, understand, and
                agree that we can collect, use, and disclose your information in
                accordance with this Privacy Policy. If you do not agree or are
                not comfortable with any part of this Privacy Policy, you should
                not agree to the TOS (including this Privacy Policy) and you may
                not use the Web Sites.
              </p>
            </div>

            <div className={styles.textWrapper}>
              <h3 className={styles.subTitle}>
                Information Gathering, Processing and Usage
              </h3>
              <p className={styles.text}>
                In connection with operation of the Web Sites and providing our
                services to you, we may collect the following types of user
                information (“Information”):
              </p>
             
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      <b> Personal Information.</b> We collect personal
                      information (“Personal Information”) from you and those
                      individuals to whom you have given Web Site access. This
                      Personal Information is used for billing purposes, account
                      management purposes and for you to utilize the features of
                      the Web Sites to which you have purchased access. Examples
                      of Personal Information we might collect include but are
                      not limited to: first name, last name, email address,
                      mailing address, etc. We also collect Personal Information
                      provided to us via any emails you send to us and via any
                      user information added by you to the Web Sites (including
                      Personal Information for users other than yourself).
                    </p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      <b>Browsing Information.</b> We collect information about
                      your computer hardware and software and browsing activity.
                    </p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      <b>Training Information.</b> We collect information on
                      learning/training activities within the Learning
                      Management System (“LMS”)
                    </p>
                  </li>
                  <li className={styles.item}>
                    <p className={styles.text}>
                      <b> Survey Information.</b> We collect responses to any
                      Intellum-sponsored Web Site surveys.
                    </p>
                  </li>
                </ul>
              </div>
        

            <h3 className={styles.subTitle}>Cookies</h3>
            <p className={styles.text}>
              To enhance your experience on our Web Sites, many of our web pages
              use &quot;cookies&quot;. Cookies are bits of electronic
              information that a web site can transfer to a visitor&#39;s hard
              drive to help tailor and keep records of his or her visit. Cookies
              are required to use most Intellum services. You may refuse to
              accept browser cookies by activating the appropriate setting on
              your browser. However, if you select this setting you may be
              unable to access most of Intellum&#39;s services. Unless you have
              adjusted your browser setting so that it will refuse cookies, our
              system will issue cookies when you direct your browser to our Web
              Sites. If you proceed with using our Web Sites without
              deactivating cookies through your browser, you are deemed to have
              accepted our use of cookies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
