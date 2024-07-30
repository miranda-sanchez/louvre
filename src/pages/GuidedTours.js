import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import guidedTours from "../data/GuidedToursData";
import GuidedToursInfo from "../components/GuidedToursInfo";

const GuidedTours = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTour, setSelectedTour] = useState(null);
  const navigate = useNavigate();

  // CARROUSEL
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

  const handleReadMore = () => {
    const selectedTour = guidedTours[currentIndex];
    setSelectedTour(selectedTour);
    navigate(`/guided-tours/${selectedTour.id}`);
  };

  const handleGoBack = () => {
    setSelectedTour(null);
    navigate("/guided-tours");
  };

  return (
    <main className="GuidedTours">
      <h1>Guided Tours</h1>
      {selectedTour ? (
        <GuidedToursInfo tour={selectedTour} onGoBack={handleGoBack} />
      ) : (
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
      )}
    </main>
  );
};

export default GuidedTours;
