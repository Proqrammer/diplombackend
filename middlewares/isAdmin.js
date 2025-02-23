const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Yetkisiz erişim!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    // Kullanıcı admin değilse erişimi engelle
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin yetkisi gereklidir!" });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: "Geçersiz token!" });
  }
};

module.exports = isAdmin;
