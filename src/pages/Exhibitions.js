import React, { useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ExhibitionsSection from "../components/ExhibitionsSection";
import PageHeader from "../components/PageHeader";
import headerImg from "../img/outside.jpg";
import GuidedToursSection from "../components/GuidedToursSection";
import GuidedToursInfo from "../components/GuidedToursInfo";

const Exhibitions = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const location = useLocation();

  const handleReadMore = (tour) => {
    setSelectedTour(tour);
  };

  const handleGoBack = () => {
    setSelectedTour(null);
  };

  return (
    <main>
      <PageHeader title="Exhibitions" backgroundImage={headerImg} />

      <ul className="exhibitions-menu">
        <li className={location.pathname === "/exhibitions" ? "active" : ""}>
          <Link to="/exhibitions">Exhibitions</Link>
        </li>
        <li
          className={
            location.pathname === "/exhibitions/guided-tours" ? "active" : ""
          }
        >
          <Link to="/exhibitions/guided-tours">Guided Tours</Link>
        </li>
      </ul>

      <Routes>
        <Route index element={<ExhibitionsSection />} />
        <Route
          path="guided-tours"
          element={
            selectedTour ? (
              <GuidedToursInfo tour={selectedTour} onGoBack={handleGoBack} />
            ) : (
              <GuidedToursSection onReadMore={handleReadMore} />
            )
          }
        />
      </Routes>
    </main>
  );
};

export default Exhibitions;
