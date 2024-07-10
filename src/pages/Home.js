import React from "react";
import Hero from "../components/Hero";
import Exhibitions from "../components/Exhibitions";
import Salle from "../components/Salle";
import Collection from "../components/Collection";

const Home = () => {
  return (
    <main>
      <Hero />
      <Exhibitions />
      <Salle />
      <Collection />
    </main>
  );
};

export default Home;
