import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Yönlendirme için
import { registerUser } from "../../api/auth"; 
import styles from "./SignUp.module.scss";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate(); // useNavigate hook'unu tanımla

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

// frontend (SignUp.jsx)
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:8000/api/auth/register", formData); // Backend'in doğru portunu yaz!
    console.log("Kayıt başarılı:", response.data);
    alert("Signed up")
    navigate("/login")
  } catch (error) {
    console.log("Kayıt Hatası:", error);
    alert("Bu mail kullaniliyor")
    // Hata mesajlarını burada işleyebilirsin
  }
};


  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpForm}>
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

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

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login" className={styles.loginLink}>Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
