const express = require("express");
const Address = require("../models/Address");

const router = express.Router();

// 📌 Yeni adres ekle
router.post("/", async (req, res) => {
  try {
    const newAddress = new Address(req.body);
    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(500).json({ message: "Adres eklenirken hata oluştu.", error });
  }
});

// 📌 Tüm adresleri getir
router.get("/", async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ message: "Adresleri getirirken hata oluştu.", error });
  }
});

// 📌 Belirli adresi güncelle
router.put("/:id", async (req, res) => {
  try {
    const updatedAddress = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAddress);
  } catch (error) {
    res.status(500).json({ message: "Adres güncellenirken hata oluştu.", error });
  }
});

// 📌 Adres sil
router.delete("/:id", async (req, res) => {
  try {
    await Address.findByIdAndDelete(req.params.id);
    res.json({ message: "Adres silindi." });
  } catch (error) {
    res.status(500).json({ message: "Adres silinirken hata oluştu.", error });
  }
});

module.exports = router;
