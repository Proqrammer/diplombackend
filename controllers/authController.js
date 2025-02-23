const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Kayıt (Register) Fonksiyonu
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Email kontrolü
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Bu email ile daha önce kayıt yapılmış!" });
    }

    // Şifreyi hash'le
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Yeni kullanıcı oluştur
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Kullanıcıyı veritabanına kaydet
    await newUser.save();

    res.status(201).json({ message: "Kayıt başarılı!" });
  } catch (error) {
    console.error("Kayıt Hatası:", error);
    res.status(500).json({ message: "Sunucu hatası!" });
  }
};

// Login (Giriş) Fonksiyonu
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Kullanıcıyı bul
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email veya şifre hatalı!" });
    }

    // Şifreyi kontrol et
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Email veya şifre hatalı!" });
    }

    // JWT token oluştur
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Giriş başarılı!",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Login Hatası:", error);
    res.status(500).json({ message: "Sunucu hatası!" });
  }
};

module.exports = { register, login };
