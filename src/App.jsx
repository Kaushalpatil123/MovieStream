import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
    </BrowserRouter>
  );
}

export default App;
