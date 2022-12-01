import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import OrigamiState from "./context/origami/OrigamiState";
import Aside from "./layout/Aside";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import Navbar from "./layout/Navbar";

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
