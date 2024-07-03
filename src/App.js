import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Visit from "./pages/Visit";
import Exhibitions from "./pages/Exhibitions";
import Tickets from "./pages/Tickets";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index exact path="/" element={<Home />}></Route>
        <Route path="/visit" element={<Visit />}></Route>
        <Route path="/Exhibitions" element={<Exhibitions />}></Route>
        <Route path="/tickets" element={<Tickets />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
