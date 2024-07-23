import React, { useState, useEffect } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import ExhibitionsSection from "../components/ExhibitionsSection";
import PageHeader from "../components/PageHeader";
import headerImg from "../img/outside.jpg";
import GuidedToursSection from "../components/GuidedToursSection";
import GuidedToursInfo from "../components/GuidedToursInfo";
import guidedTours from "../data/GuidedToursData"; // Import the guided tours data

const Exhibitions = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const tour = guidedTours.find((tour) => tour.id === parseInt(id));
      if (tour) {
        setSelectedTour(tour);
      } else {
        navigate("/exhibitions/guided-tours");
      }
    }
  }, [id, navigate]);

  const handleReadMore = (tour) => {
    setSelectedTour(tour);
    navigate(`/exhibitions/guided-tours/${tour.id}`);
  };

  const handleGoBack = () => {
    setSelectedTour(null);
    navigate("/exhibitions/guided-tours");
  };

  return (
    <main>
      <PageHeader title="Exhibitions" backgroundImage={headerImg} />
      <nav>
        <ul className="exhibitions-menu">
          <li className={location.pathname === "/exhibitions" ? "active" : ""}>
            <Link to="/exhibitions">Exhibitions</Link>
          </li>
          <li
            className={
              location.pathname.startsWith("/exhibitions/guided-tours")
                ? "active"
                : ""
            }
          >
            <Link to="/exhibitions/guided-tours">Guided Tours</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ExhibitionsSection />} />
        <Route
          path="guided-tours"
          element={<GuidedToursSection onReadMore={handleReadMore} />}
        />
        <Route
          path="guided-tours/:id"
          element={
            <GuidedToursInfo tour={selectedTour} onGoBack={handleGoBack} />
          }
        />
      </Routes>
    </main>
  );
};

export default Exhibitions;
