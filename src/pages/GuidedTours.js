import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import guidedTours from "../data/GuidedToursData";

const GuidedToursSection = ({ onReadMore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

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
    const selectedTour = guidedTours[currentIndex];
    onReadMore(selectedTour);
    navigate(`/exhibitions/guided-tours/${selectedTour.id}`);
  };

  return (
    <section className="section-guidedtours" {...handlers}>
      <button className="arrow left-arrow" onClick={prevItem}>
        <MdArrowBack />
      </button>
      <article className="guidedtours-item">
        <img
          onClick={handleReadMore}
          src={guidedTours[currentIndex].imgSrc}
          alt={guidedTours[currentIndex].alt}
        />
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
            <button className="action-btn">Book</button>
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
