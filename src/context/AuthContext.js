import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);
      } catch (error) {
        console.error("Invalid token:", error);
        logout();
      }
    }
    setLoading(false);
  }, []);

  const login = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        formData
      );
      const { token } = response.data;

      localStorage.setItem("token", token);
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
      alert("Giriş başarılı!");
      navigate("/");
    } catch (error) {
      console.error("Login Hatası:", error);
      alert("Email veya şifre hatalı!");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
