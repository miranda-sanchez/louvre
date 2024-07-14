import React from "react";

const GuidedToursInfo = ({ tour, onGoBack }) => {
  return (
    <section className="section-guidedtoursinfo">
      <div className="header-">
        <h2>{tour.title}</h2>
        <span>{tour.days}</span>
        <span>{tour.hours}</span>
      </div>
      <p>{tour.description}</p>

      <button onClick={onGoBack}>See all guided tours</button>
    </section>
  );
};

export default GuidedToursInfo;
