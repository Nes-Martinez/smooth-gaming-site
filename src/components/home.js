import React from "react";
import Indiegames from "./aboutindie";
import About from "./aboutswitch";
import Featured from "./featuredgame";
import Hero from "./hero";
import Navbar from "./navbar";
import Products from "./products";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Indiegames />
      <Featured />
      <About />
      <Products />
    </>
  );
};

export default Home;
