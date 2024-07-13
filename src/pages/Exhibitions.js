import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import headerImg from "../img/outside.jpg";
import GuidedToursSection from "../components/GuidedToursSection";
import ReadMoreSection from "../components/ReadMoreSection";
import olympism from "../img/olympism.webp";
import torloniaCollection from "../img/torlonia-collection.jpg";

const Exhibitions = () => {
  const [activeSection, setActiveSection] = useState("exhibitions");
  const [selectedTour, setSelectedTour] = useState(null);

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

  const handleReadMore = (tour) => {
    setSelectedTour(tour);
    setActiveSection("readMore");
  };

  const handleGoBack = () => {
    setActiveSection("guidedTours");
  };

  return (
    <main>
      <PageHeader title="Exhibitions" backgroundImage={headerImg} />

      <ul className="exhibitions-menu">
        <li
          className={activeSection === "exhibitions" ? "active" : ""}
          onClick={() => setActiveSection("exhibitions")}
        >
          Exhibitions
        </li>
        <li
          className={activeSection === "guidedTours" ? "active" : ""}
          onClick={() => setActiveSection("guidedTours")}
        >
          Guided Tours
        </li>
      </ul>

      {activeSection === "exhibitions" && (
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
      )}

      {activeSection === "guidedTours" && (
        <GuidedToursSection onReadMore={handleReadMore} />
      )}

      {activeSection === "readMore" && selectedTour && (
        <ReadMoreSection tour={selectedTour} onGoBack={handleGoBack} />
      )}
    </main>
  );
};

export default Exhibitions;
