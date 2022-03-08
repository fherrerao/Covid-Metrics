import React from "react";
import "./App.css";
import Header from "./components/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import Metrics from "./components/Metrics";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Continents from "./components/Continents";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Metrics />} />
          <Route path="/about" element={<About />} />
          <Route path="/countries/:name" element={<Continents />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
