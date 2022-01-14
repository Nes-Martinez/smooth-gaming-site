import React from "react";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Products from "./products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
