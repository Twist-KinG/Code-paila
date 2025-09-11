import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Team from "./Team";


const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
    </section>

  );
};

export default Home;
