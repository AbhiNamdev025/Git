import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Main Pages/Home Pge/homePage";
import ContactPage from "./Main Pages/Contact Page/contactPage";
import AboutPage from "./Main Pages/About Page/aboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/parichya" element={<AboutPage />} />
        <Route path="/sampark" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
