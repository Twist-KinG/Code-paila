import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
   <section>
     <Hero /><br />
     <About /><br />
     <Services /><br />
     <Portfolio /><br />
   </section>
  );
};

export default Home;
