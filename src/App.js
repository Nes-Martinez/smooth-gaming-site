import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Home from "./components/home";
import SingleProduct from "./components/singleProduct";
import Products from "./components/products";
import AboutPage from "./components/aboutpage";
import Footer from "./components/footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMain, setIsMain] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} isMain={!isMain} />
      <Navbar toggle={toggle} isMain={!isMain} />
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/products/:id"
            element={<SingleProduct isMain={!isMain} />}
          />
          <Route exact path="/about" element={<AboutPage isMain={!isMain} />} />
          <Route
            exact
            path="/products"
            element={<Products isMain={!isMain} />}
          />
        </Routes>
      </>
      <Footer />
    </Router>
  );
}

export default App;
