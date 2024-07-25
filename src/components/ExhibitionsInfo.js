import React from "react";
import { useParams } from "react-router-dom";
import exhibitions from "../data/ExhibitionsData";

const ExhibitionsInfo = () => {
  const { id } = useParams();
  const exhibition = exhibitions[parseInt(id)];

  if (!exhibition) {
    return (
      <main>
        <p>Exhibition not found</p>
      </main>
    );
  }

  return (
    <main className="ExhibitionsInfo">
      <section className="exhibitions-info-header">
        <h1>{exhibition.title}</h1>
        <h2>{exhibition.description}</h2>
      </section>
      <figure className="exhibitions-info-img">
        <img src={exhibition.imgSrc} alt={exhibition.imgAlt} />
      </figure>
      <section className="exhibitions-info-content">
        {exhibition.paragraphs ? (
          exhibition.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <p>No detailed description available</p>
        )}
      </section>
    </main>
  );
};

export default ExhibitionsInfo;
