import React from "react";
import { Link } from "react-router-dom";
import exhibitions from "../data/ExhibitionsData";

const ExhibitionsSection = () => {
  return (
    <section className="section-exhibitions">
      {exhibitions.map((exhibition, index) => (
        <article key={index} className="exhibition-item">
          <img src={exhibition.imgSrc} alt={exhibition.imgAlt} />
          <div className="exhibition-text">
            <h2>{exhibition.title}</h2>
            <p>{exhibition.description}</p>
            <p>{exhibition.date}</p>
            <Link to="/tickets">
              <button className="action-btn">Book</button>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ExhibitionsSection;
