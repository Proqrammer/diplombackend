const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  isFavorite: { type: Boolean, default: false },
});

module.exports = mongoose.model("Address", addressSchema);
