import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catagory from "./Pages/Catagory";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Catagory" element={<Catagory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
