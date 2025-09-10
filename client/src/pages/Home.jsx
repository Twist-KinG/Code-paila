import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Team from "./Team";

const Home = () => {
  return (
    <section>
      <Hero /><br />
      <About /><br />
      <Services /><br />
      <Portfolio /><br />
      <Team />
    </section>
  );
};

export default Home;
