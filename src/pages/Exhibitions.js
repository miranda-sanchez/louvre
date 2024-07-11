import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import headerImg from "../img/outside.jpg";
import { useSwipeable } from "react-swipeable";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const Exhibitions = () => {
  //Menu
  const [activeSection, setActiveSection] = useState("exhibitions");

  //Carrousel
  const [currentIndex, setCurrentIndex] = useState(0);

  const guidedTours = [
    {
      title: "Olympism",
      description: "Modern Invention, Ancient Legacy",
      date: "24 April to September 2024",
    },
    {
      title: "Masterpieces from the Torlonia Collection",
      description: "",
      date: "26 June to 11 November 2024",
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
        <section className="section-exhibitions"></section>
      )}

      {activeSection === "guidedTours" && (
        <section className="section-guidedtours" {...handlers}>
          <button className="arrow left-arrow" onClick={prevItem}>
            <MdArrowBack />
          </button>
          <article className="guidedtours-item">
            <h2>{guidedTours[currentIndex].title}</h2>
            <p>{guidedTours[currentIndex].description}</p>
            <span>{guidedTours[currentIndex].date}</span>
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
