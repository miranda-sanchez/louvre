import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index exact path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
