import React from "react";
import Hero from "../components/Hero";
import Exhibitions from "../components/Exhibitions";
import Visit from "../components/Visit";
import Collection from "../components/Collection";

const Home = () => {
  return (
    <main>
      <Hero />
      <Exhibitions />
      <Visit />
      <Collection />
    </main>
  );
};

export default Home;
