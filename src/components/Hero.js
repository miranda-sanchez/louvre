import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Rellax from "rellax";
import venus from "../img/Venus.png";
import { MdNorthEast } from "react-icons/md";

const Hero = () => {
  const heroTextRef = useRef();
  const figureRef = useRef();

  useEffect(() => {
    new Rellax(heroTextRef.current, {
      speed: -5, // Velocidad para el div
    });
    new Rellax(figureRef.current, {
      speed: 8, // Velocidad para el figure
    });
  }, []);

  return (
    <section className="Hero">
      <div className="hero-text" ref={heroTextRef}>
        <h1>
          Welcome to the <strong>Louvre</strong>
        </h1>
        <Link to="/exhibitions">
          <button>
            Exhibitions <MdNorthEast />
          </button>
        </Link>
      </div>
      <figure ref={figureRef}>
        <img src={venus} alt="Venus de Milo sculpture" />
      </figure>
    </section>
  );
};

export default Hero;
