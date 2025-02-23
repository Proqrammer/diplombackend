import React, { useState, useEffect } from "react";
import styles from "./AdresEklemeForm.module.scss";

const API_URL = "http://localhost:8000/api/addresses";

const AdresEklemeForm = () => {
  const [address, setAddress] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    country: "",
    isFavorite: false,
  });

  const [addresses, setAddresses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setAddresses(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Veri çekme hatası:", err);
        setError("Adresler alınırken bir hata oluştu.");
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const method = editingId ? "PUT" : "POST";
    const endpoint = editingId ? `${API_URL}/${editingId}` : API_URL;

    fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(address),
    })
      .then((res) => res.json())
      .then((newAddress) => {
        if (editingId) {
          setAddresses(
            addresses.map((addr) =>
              addr._id === editingId ? newAddress : addr
            )
          );
          setEditingId(null);
        } else {
          setAddresses([...addresses, newAddress]);
        }
        setAddress({
          name: "",
          email: "",
          phone: "",
          street: "",
          city: "",
          country: "",
          isFavorite: false,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Adres ekleme/güncelleme hatası:", err);
        setError("Adres eklenirken bir hata oluştu.");
        setLoading(false);
      });
  };

  const handleEdit = (id) => {
    const selectedAddress = addresses.find((addr) => addr._id === id);
    setAddress(selectedAddress);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setAddresses(addresses.filter((addr) => addr._id !== id)))
      .catch((err) => console.error("Adres silme hatası:", err));
  };

  const handleFavorite = (id) => {
    const selectedAddress = addresses.find((addr) => addr._id === id);
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...selectedAddress,
        isFavorite: !selectedAddress.isFavorite,
      }),
    })
      .then((res) => res.json())
      .then((updatedAddress) => {
        setAddresses(
          addresses.map((addr) => (addr._id === id ? updatedAddress : addr))
        );
      })
      .catch((err) => console.error("Favori güncelleme hatası:", err));
  };

  const filteredAddresses = loading
    ? []
    : (addresses || [])
        .filter((addr) =>
          Object.values(addr).some((value) =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
        .sort((a, b) => b.isFavorite - a.isFavorite);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>{editingId ? "Edit Address" : "Add a New Address"}</h3>
        {error && <div className={styles.error}>{error}</div>}
        <input
          type="text"
          name="name"
          value={address.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={address.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <input
          type="text"
          name="phone"
          value={address.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="text"
          name="street"
          value={address.street}
          onChange={handleChange}
          placeholder="Street Address"
          required
        />
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <input
          type="text"
          name="country"
          value={address.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : editingId ? "Update Address" : "Add Address"}
        </button>
      </form>

      <h3>Saved Addresses</h3>
      {filteredAddresses.map((addr) => (
        <div key={addr._id} className={styles.addressCard}>
          <p>
            {addr.name} {addr.isFavorite && "⭐"}
          </p>
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
              Favorite
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
      ))}
    </div>
  );
};

export default AdresEklemeForm;
