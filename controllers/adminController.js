const User = require("../models/User");

// Admin panelinde kullanıcıları listele
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Sunucu hatası!" });
  }
};

module.exports = { getAllUsers };
