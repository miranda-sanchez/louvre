import React from "react";
import { Link } from "react-router-dom";
import exhibitions from "../data/ExhibitionsData";

const ExhibitionsSection = () => {
  return (
    <section className="section-exhibitions">
      {exhibitions.map((exhibition, index) => (
        <article key={index} className="exhibition-item">
          <Link to={`/exhibitions/${index}`}>
            <img src={exhibition.imgSrc} alt={exhibition.imgAlt} />
          </Link>
          <div className="exhibition-text">
            <h2>{exhibition.title}</h2>
            <p>{exhibition.description}</p>
            <p>{exhibition.date}</p>
            <Link to="/tickets">
              <button className="action-btn">Book</button>
            </Link>
            <Link to={`/exhibitions/${index}`}>
              <button>Read More</button>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ExhibitionsSection;
