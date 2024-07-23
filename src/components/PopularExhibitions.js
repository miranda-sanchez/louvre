import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Velazquez from "../img/VelazquezMariaTeresa.jpg";
import Degas from "../img/DegasMaryCassatt.jpg";
import Michaelangelo from "../img/img8.jpg";

const popularExhibitions = [
  {
    title: "Velázquez",
    image: Velazquez,
    alt: "The infanta Maria Theresa of Spain by Velazquez",
  },
  {
    title: "Edgar Degas",
    image: Degas,
    alt: "Mary Cassatt at the Louvre by Degas",
  },
  {
    title: "Michaelangelo",
    image: Michaelangelo,
    alt: "Sleeping Hermaphroditus by Michaelangelo",
  },
];

const PopularExhibitions = () => {
  const [velazquezRef, velazquezInView] = useInView({ triggerOnce: true });
  const [degasRef, degasInView] = useInView({ triggerOnce: true });
  const [michaelangeloRef, michaelangeloInView] = useInView({
    triggerOnce: true,
  });

  const refs = [velazquezRef, degasRef, michaelangeloRef];
  const inViews = [velazquezInView, degasInView, michaelangeloInView];

  return (
    <section className="Popular-exhibitions">
      <h2>Popular exhibitions</h2>
      <div className="cards">
        {popularExhibitions.map((exhibition, index) => {
          const ref = refs[index];
          const inView = inViews[index];
          return (
            <article key={index} ref={ref} className={inView ? "fade-in" : ""}>
              <div className="text-container">
                <h3>{exhibition.title}</h3>
                <Link to="/exhibitions">
                  <button>Visit</button>
                </Link>
              </div>
              <img src={exhibition.image} alt={exhibition.alt} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PopularExhibitions;
