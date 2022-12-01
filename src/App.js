import "./App.css";
import Footer from "./pages/Footer";
import React from "react";
import Aside from "./pages/Aside";
import { BrowserRouter as Router } from "react-router-dom";
import OrigamiState from "./context/origami/OrigamiState";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <OrigamiState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="Container">
            <Aside />
            <Home />
          </div>
          <Footer />
        </div>
      </Router>
    </OrigamiState>
  );
}

export default App;
