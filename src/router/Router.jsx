import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import FAQ from "../pages/FAQ/FAQ";
import Sub from "../pages/Sub/Sub";
import Sign from "../pages/Sign/Sign";
import Login from "../pages/Login/Login";
import Admin from "../pages/Admin/Admin";
import Adress from "../pages/Address/Adress";
import NotFound from "../controllers/NotFound/NotFound";
import { AuthProvider } from "../context/AuthContext";
import Favori from "../pages/Favorites/Favori";


const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sub" element={<Sub />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addressbook" element={<Adress />} />
          <Route path="/favorites" element={<Favori />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;
