import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import AboutPage from "./Pages/Aboutpage/AboutPage";
import Contactus from "./Pages/Contactus/Contactus";
import Services from "./Pages/Servicespage/Services";
import Loginpage from "./Pages/Loginpage/Loginpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
