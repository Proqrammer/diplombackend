import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user, loading, logout } = useAuth();

  if (loading) return;

  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        {/* Logo kısmı */}
        <img
          src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F02ef731e-d1f8-45d6-99d0-b4cdc1ce27c2_1200x1200.jpeg"
          alt="Logo"
        />
        <Link to="/">
          <span>Postable</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addressbook">Adress Book</Link>
        </li>
        <li>
          <Link to="/sub">Subscription</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Navigation Actions (Sign up, Log in, etc.) */}
      <div className={styles.navActions}>
        {!user && (
          <>
            <Link to="/login" className={styles.signup}>
              Log in
            </Link>
            <Link to="/signup" className={styles.signup}>
              Sign up
            </Link>
          </>
        )}

        {user && (
          <>
            <button onClick={() => logout()} className={styles.signup}>
              Sign out
            </button>
          </>
        )}
        {/* Heart icon link to favorites page */}
        <Link to="/favorites" className={styles.iconButton}>
          ❤️
        </Link>
      </div>
    </nav>
  );
};

export default Header;
