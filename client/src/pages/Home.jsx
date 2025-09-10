import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
   <section>
     <Hero />
     <About />
     <Services />
     <Portfolio />
   </section>
  );
};

export default Home;
