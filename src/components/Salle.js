import React from "react";
import { Link } from "react-router-dom";

const ExhibitionsInfo = () => {
  return (
    <section className="Salle">
      <Link to="/exhibitions-info">
        <button className="btn-salle">
          Explore the <strong>Salle des Cariatides</strong>
        </button>
      </Link>
    </section>
  );
};

export default ExhibitionsInfo;
