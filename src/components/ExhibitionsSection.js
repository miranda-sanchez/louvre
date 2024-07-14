import React from "react";
import olympism from "../img/olympism.webp";
import torloniaCollection from "../img/torlonia-collection.jpg";

const ExhibitionsSection = () => {
  const exhibitions = [
    {
      imgSrc: olympism,
      imgAlt: "A Greek vessel of the Marquis Campana",
      title: "Olympism",
      description: "Modern Invention, Ancient Legacy",
      date: "24 April to 16 September 2024",
    },
    {
      imgSrc: torloniaCollection,
      imgAlt: "A sculpture from the Torlonia collection",
      title: "Masterpieces from the Torlonia Collection",
      description:
        "The largest ever private collection of ancient Roman sculptures",
      date: "26 June to 11 November 2024",
    },
  ];

  return (
    <section className="section-exhibitions">
      {exhibitions.map((exhibition, index) => (
        <article key={index} className="exhibition-item">
          <img src={exhibition.imgSrc} alt={exhibition.imgAlt} />
          <div className="exhibition-text">
            <h2>{exhibition.title}</h2>
            <p>{exhibition.description}</p>
            <p>{exhibition.date}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ExhibitionsSection;
