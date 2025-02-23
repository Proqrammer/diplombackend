import { useEffect, useState } from "react";
import styles from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [emoji, setEmoji] = useState("😢");
  const emojis = ["😢", "😞", "🤔", "😕", "🥺"];

  useEffect(() => {
    const interval = setInterval(() => {
      setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1>404 {emoji}</h1>
      <p>Üzgünüz, aradığınız sayfa bulunamadı.</p>
      <button onClick={() => navigate("/")}>Ana Sayfaya Dön</button>
    </div>
  );
};

export default NotFound;
