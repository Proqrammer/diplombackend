import styles from "./ContactSec.module.scss";

const ContactSec = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact Us</h2>
      <p>Have questions? Get in touch with us!</p>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className={styles.formGroup}>
          <label>Message</label>
          <textarea placeholder="Type your message..." required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      <div className={styles.info}>
        <div>
          <h3>📍 Address</h3>
          <p>Sumgait , Sarvar Badalbayli 317</p>
        </div>
        <div>
          <h3>📞 Phone</h3>
          <p>+994 (55) 555 55 55</p>
        </div>
        <div>
          <h3>✉️ Email</h3>
          <p>support@addressbook.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSec;
