import React from "react";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Products from "./products";
import Subsection from "./subsection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Subsection />
      <Products />
    </div>
  );
};

export default Home;
