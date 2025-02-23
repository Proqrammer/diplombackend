import React, { useEffect, useState } from "react";
import styles from "./AdminPanel.module.scss";

const API_URL = "http://localhost:8000/api/addresses";

const AdminPanel = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setAddresses(data))
      .catch((err) => console.error("Veri çekme hatası:", err));
  }, []);

  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setAddresses(addresses.filter((addr) => addr._id !== id)))
      .catch((err) => console.error("Silme hatası:", err));
  };

  const handleToggleFavorite = (id) => {
    const selectedAddress = addresses.find((addr) => addr._id === id);
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...selectedAddress, isFavorite: !selectedAddress.isFavorite }),
    })
      .then((res) => res.json())
      .then((updatedAddress) => {
        setAddresses(addresses.map((addr) => (addr._id === id ? updatedAddress : addr)));
      })
      .catch((err) => console.error("Favori güncelleme hatası:", err));
  };

  return (
    <div className={styles.container}>
      <h2>Admin Panel</h2>
      {addresses.length > 0 ? (
        <ul className={styles.addressList}>
          {addresses.map((addr) => (
            <li key={addr._id} className={styles.addressCard}>
              <p><strong>{addr.name}</strong> {addr.isFavorite && "⭐"}</p>
              <p>{addr.email}</p>
              <p>{addr.phone}</p>
              <p>{addr.street}, {addr.city}, {addr.country}</p>
              <button onClick={() => handleToggleFavorite(addr._id)}>
                {addr.isFavorite ? "Unfavorite" : "Make Favorite"}
              </button>
              <button className={styles.deleteButton} onClick={() => handleDelete(addr._id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No addresses found.</p>
      )}
    </div>
  );
};

export default AdminPanel;
