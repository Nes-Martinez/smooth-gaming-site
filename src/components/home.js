import React from "react";
import Indiegames from "./aboutindie";
import About from "./aboutswitch";
import Featured from "./featuredgame";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Products from "./products";

const Home = () => {
  return (
    <div>
      <Hero />
      <Indiegames />
      <Featured />
      <About />
      <Products />
    </div>
  );
};

export default Home;
