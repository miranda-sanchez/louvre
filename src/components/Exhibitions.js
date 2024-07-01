import React from "react";
import { useInView } from "react-intersection-observer";
import Velazquez from "../img/VelazquezMariaTeresa.jpg";
import Degas from "../img/DegasMaryCassatt.jpg";
import Michaelangelo from "../img/img8.jpg";

const Exhibitions = () => {
  const { ref: velazquezRef, inView: velazquezInView } = useInView({
    triggerOnce: true,
  });
  const { ref: degasRef, inView: degasInView } = useInView({
    triggerOnce: true,
  });
  const { ref: michaelangeloRef, inView: michaelangeloInView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="Exhibitions">
      <h2>Popular exhibitions</h2>
      <div className="cards">
        <article
          ref={velazquezRef}
          className={velazquezInView ? "fade-in" : ""}
        >
          <div className="text-container">
            <h3>Diego Velazquez</h3>
            <button>Visit</button>
          </div>
          <img
            src={Velazquez}
            alt="The infanta Maria Theresa of Spain by Velazquez"
          />
        </article>

        <article ref={degasRef} className={degasInView ? "fade-in" : ""}>
          <div className="text-container">
            <h3>Edgar Degas</h3>
            <button>Visit</button>
          </div>
          <img src={Degas} alt="Mary Cassatt at the Louvre by Degas" />
        </article>

        <article
          ref={michaelangeloRef}
          className={michaelangeloInView ? "fade-in" : ""}
        >
          <div className="text-container">
            <h3>Michaelangelo</h3>
            <button>Visit</button>
          </div>
          <img
            src={Michaelangelo}
            alt="Sleeping Hermaphroditus by Michaelangelo"
          />
        </article>
      </div>
    </section>
  );
};

export default Exhibitions;
