import React from "react";
import Hero from "../components/Hero";
import PopularExhibitions from "../components/PopularExhibitions";
import Salle from "../components/Salle";
import Collection from "../components/Collection";

const Home = () => {
  return (
    <main>
      <Hero />
      <PopularExhibitions />
      <Salle />
      <Collection />
    </main>
  );
};

export default Home;
