import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/auth";

// Kullanıcı kayıt fonksiyonu
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.log("Register Request Data:", userData);

    throw error.response?.data || { message: "Kayıt başarısız!" };
  }
};

