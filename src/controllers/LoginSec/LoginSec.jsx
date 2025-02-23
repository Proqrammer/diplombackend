import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./LoginSec.module.scss";
import { useNavigate } from "react-router-dom"; 
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate(); 
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      login(formData);
    } catch (error) {
      console.error("Login Hatası:", error);
      alert("Email veya şifre hatalı!");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Log In
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className={styles.signupLink}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
