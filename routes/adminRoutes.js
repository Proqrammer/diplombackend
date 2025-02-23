const express = require("express");
const { getAllUsers } = require("../controllers/adminController");
const isAdmin = require("../middlewares/isAdmin");

const router = express.Router();

// Admin paneline kullanıcıları listelemek için erişim
router.get("/users", isAdmin, getAllUsers);

module.exports = router;
