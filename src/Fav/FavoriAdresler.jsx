import React from "react";
import styles from "./FavoriAdresler.module.scss";

const FavoriAdresler = ({ addresses, handleFavorite, handleEdit, handleDelete }) => {
  // Favori adresleri filtreleme
  const favoriteAddresses = addresses.filter(addr => addr.isFavorite);

  return (
    <div className={styles.container}>
      <h3>Favori Adresler</h3>
      {favoriteAddresses.length === 0 ? (
        <p>Henüz favori adresiniz yok.</p>
      ) : (
        favoriteAddresses.map((addr) => (
          <div key={addr._id} className={styles.addressCard}>
            <p>{addr.name} ⭐</p>
            <p>{addr.country}</p>
            <p>{addr.email}</p>
            <p>{addr.city}</p>
            <p>{addr.phone}</p>
            <p>{addr.street}</p>

            <div className={styles.buttonContainer}>
              <button
                className={styles.favoriteButton}
                onClick={() => handleFavorite(addr._id)}
              >
                Unfavorite
              </button>
              <button
                className={styles.editButton}
                onClick={() => handleEdit(addr._id)}
              >
                Edit
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(addr._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoriAdresler;
