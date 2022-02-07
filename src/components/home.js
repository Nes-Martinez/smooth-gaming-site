import React, { useState } from "react";
import Indiegames from "./aboutindie";
import About from "./aboutswitch";
import Featured from "./featuredgame";
import Hero from "./hero";
import Navbar from "./navbar";
import Products from "./products";
import Sidebar from "./sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Indiegames />
      <Featured />
      <About />
      <Products />
    </>
  );
};

export default Home;
