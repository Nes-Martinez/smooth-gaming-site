import React from "react";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Products from "./products";
import Subsection from "./subsection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Subsection />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
