import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DetailCharacter from "./pages/DetailCharacter/DetailCharacter";
import NavBar from "./navigation/navBar/NavBar";
import Locations from "./pages/Locations/Locations";
import Episodes from "./pages/Episodes/Episodes";

export default function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailCharacter/:id" element={<DetailCharacter />} />
        <Route path="/locations" element={<Locations/>} />
        <Route path="/episodes" element={<Episodes/>} />
      </Routes>
    </Router>
  );
}