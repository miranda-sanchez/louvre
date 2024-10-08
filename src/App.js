import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Visit from "./pages/Visit";
import Exhibitions from "./pages/Exhibitions";
import Tickets from "./pages/Tickets";
import ExhibitionsInfo from "./components/ExhibitionsInfo";
import GuidedTours from "./pages/GuidedTours";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index exact="true" path="/" element={<Home />}></Route>
        <Route path="/visit" element={<Visit />}></Route>
        <Route path="/exhibitions/*" element={<Exhibitions />}></Route>
        <Route path="/exhibitions/:id" element={<ExhibitionsInfo />}></Route>
        <Route path="/exhibitions/:id" element={<ExhibitionsInfo />}></Route>
        <Route path="/guided-tours" element={<GuidedTours />}></Route>
        <Route path="/guided-tours/:id" element={<GuidedTours />} />
        <Route path="/tickets" element={<Tickets />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
