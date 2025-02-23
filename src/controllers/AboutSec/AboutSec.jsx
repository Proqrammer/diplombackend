import styles from "./AboutSec.module.scss";

const About = () => {
  return (
    <div className={styles["about-container"]}>
      <h1>About Us</h1>
      <p>
        Welcome to our <strong>Address Book</strong> application! Our mission is to help you
        manage your contacts efficiently and securely. Whether you are organizing
        personal or professional contacts, we provide a simple and user-friendly
        solution.
      </p>
      
      <h2>Our Vision</h2>
      <p>
        We believe that keeping track of your contacts should be easy and
        stress-free. Our team is constantly working to improve the application
        and add new features to enhance your experience.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>Easy-to-use interface</li>
        <li>Secure contact storage</li>
        <li>Fast and reliable performance</li>
        <li>Free updates and support</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or suggestions, feel free to visit our{" "}
        <a href="/contact">Contact</a> page.
      </p>
    </div>
  );
};

export default About;
