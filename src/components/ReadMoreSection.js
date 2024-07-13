import React from "react";

const ReadMoreSection = ({ tour, onGoBack }) => {
  return (
    <section className="section-readmore">
      <h2>More Information on {tour.title}</h2>
      <p>{tour.description}</p>
      <p>{tour.month}</p>
      <p>{tour.days}</p>
      <p>{tour.hours}</p>
      <button onClick={onGoBack}>See all guided tours</button>
    </section>
  );
};

export default ReadMoreSection;
