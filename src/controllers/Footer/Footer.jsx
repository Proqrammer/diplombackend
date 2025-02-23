import styles from "./Footer.module.scss";
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.followSection}>
        <h2>Are you following us?</h2>
        <p>We post some funny stuff and some helpful tips on occasion.</p>
        <div className={styles.socialIcons}>
          <div className={styles.icon}><FaFacebookF /></div>
          <div className={styles.icon}><FaInstagram /></div>
          <div className={styles.icon}><FaPinterest /></div>
          <div className={styles.icon}><FaTwitterSquare /></div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.socialLinks}>
          <FaFacebookF />
          <FaInstagram />
          <FaPinterest />
          <FaTwitterSquare />
        </div>

        <nav className={styles.navLinks}>
          <a href="/">Home</a>
          <a href="/addressbook">AddressBook</a>
          <a href="/about">About</a>
          <a href="/faq">FAQ</a>
          <a href="/sub">Sub</a>
          <a href="/contact">Contact</a>
        </nav>

        <a href="/contact">
            <button className={styles.contactBtn}>Contact us</button>
        </a>

        

        <p className={styles.copyright}>Totally Made in NY ©2025 Postable</p>
      </div>
    </footer>
  );
};

export default Footer;
