import React from "react";
import venus from "../img/Venus.png";
import { MdNorthEast } from "react-icons/md";

const Hero = () => {
  return (
    <section className="Hero">
      <div className="hero-text">
        <h1>Welcome to the Louvre</h1>
        <button>
          Our galery <MdNorthEast />
        </button>
      </div>
      <figure>
        <img src={venus} alt="Venus de Milo sculpture" />
      </figure>
    </section>
  );
};

export default Hero;
