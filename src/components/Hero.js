import React from "react";
import { Link } from "react-router-dom";
import venus from "../img/Venus.png";
import { MdNorthEast } from "react-icons/md";

const Hero = () => {
  return (
    <section className="Hero">
      <div className="hero-text">
        <h1>
          Welcome to the <strong>Louvre</strong>
        </h1>
        <Link to="/exhibitions">
          <button>
            Exhibitions <MdNorthEast />
          </button>
        </Link>
      </div>
      <figure>
        <img src={venus} alt="Venus de Milo sculpture" />
      </figure>
    </section>
  );
};

export default Hero;
