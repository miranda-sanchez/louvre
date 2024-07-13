import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import guidedTour1 from "../img/img5.jpg";
import guidedTour2 from "../img/Garden.webp";

const GuidedToursSection = ({ onReadMore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define guided tours locally
  const guidedTours = [
    {
      id: 1,
      imgSrc: guidedTour1,
      month: "July 2024",
      title: "Welcome to the Louvre",
      description:
        "This guided tour will make you discover the must-see artworks at the Louvre",
      days: "Monday to Saturday",
      hours: "9.45am to 2pm",
    },
    {
      id: 2,
      imgSrc: guidedTour2,
      month: "July 2024",
      title: "The Gardens",
      description: "Explore the delightful gardens of the Louvre.",
      days: "Monday to Friday",
      hours: "8am to 10pm",
    },
    {
      id: 3,
      imgSrc: guidedTour1,
      month: "August 2024",
      title: "Welcome to the Louvre",
      description:
        "This guided tour will make you discover the must-see artworks at the Louvre",
      days: "Monday to Saturday",
      hours: "9.45am to 2pm",
    },
  ];

  // CARROUSEL
  // Function to go to the next tour item
  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % guidedTours.length);
  };

  // Function to go to the previous tour item
  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + guidedTours.length) % guidedTours.length
    );
  };

  // Event handlers for swipe left and right
  const handlers = useSwipeable({
    onSwipedLeft: nextItem,
    onSwipedRight: prevItem,
  });

  // Function to handle the "Read more" event
  const handleReadMore = () => {
    // Calls the function passed from Exhibitions.js with the current tour
    onReadMore(guidedTours[currentIndex]);
  };

  return (
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
          <Link to="/tickets">
            <button className="action-btn">Buy</button>
          </Link>
          <button onClick={handleReadMore}>Read more</button>
        </div>
      </article>
      <button className="arrow right-arrow" onClick={nextItem}>
        <MdArrowForward />
      </button>
    </section>
  );
};

export default GuidedToursSection;
