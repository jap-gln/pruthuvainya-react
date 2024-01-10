import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Home, About, Login, Register, CardSlider } from "./components";

const Navigation = () => {
  const hideNavbarRoutes = ['/login', '/register', '/cardslider'];

  return (
    <BrowserRouter>
    {!hideNavbarRoutes.includes(window.location.pathname) && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cardslider" element={<CardSlider />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
