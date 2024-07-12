import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import headerImg from "../img/outside.jpg";
import { useSwipeable } from "react-swipeable";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import olympism from "../img/olympism.webp";
import torloniaCollection from "../img/torlonia-collection.jpg";
import guidedTour1 from "../img/img5.jpg";
import guidedTour2 from "../img/Garden.webp";

const Exhibitions = () => {
  //Menu
  const [activeSection, setActiveSection] = useState("exhibitions");

  // Exhibitions items
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

  //Carrousel for Guided Tours
  const [currentIndex, setCurrentIndex] = useState(0);

  const guidedTours = [
    {
      imgSrc: guidedTour1,
      month: "July 2024",
      title: "Welcome to the Louvre",
      description:
        "This guided tour will make you discover the must-see artworks at the Louvre",
      days: "Monday to Saturday",
      hours: "9.45am to 2pm",
    },
    {
      imgSrc: guidedTour2,
      month: "July 2024",
      title: "The Gardens",
      description: "Explore the delightful gardens of the Louvre.",
      days: "Monday to Friday",
      hours: "8am to 10pm",
    },
    {
      imgSrc: guidedTour1,
      month: "August 2024",
      title: "Welcome to the Louvre",
      description:
        "This guided tour will make you discover the must-see artworks at the Louvre",
      days: "Monday to Saturday",
      hours: "9.45am to 2pm",
    },
  ];

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % guidedTours.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + guidedTours.length) % guidedTours.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextItem,
    onSwipedRight: prevItem,
  });

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
        <section className="section-guidedtours" {...handlers}>
          <button className="arrow left-arrow" onClick={prevItem}>
            <MdArrowBack />
          </button>
          <article className="guidedtours-item">
            <img src={guidedTours[currentIndex].imgSrc} alt="" />
            <span className="guidedtours-month">
              {guidedTours[currentIndex].month}
            </span>
            <h2>{guidedTours[currentIndex].title}</h2>
            <p>{guidedTours[currentIndex].description}</p>
            <div className="guidedtours-dayshours">
              <span>{guidedTours[currentIndex].days}</span>
              <span>{guidedTours[currentIndex].hours}</span>
            </div>
            <div>
              <button className="action-btn">Buy</button>
              <button>Read more</button>
            </div>
          </article>
          <button className="arrow right-arrow" onClick={nextItem}>
            <MdArrowForward />
          </button>
        </section>
      )}
    </main>
  );
};

export default Exhibitions;
