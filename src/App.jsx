import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Metrics from './components/Metrics';
import 'bootstrap/dist/css/bootstrap.min.css';
import Continents from './components/Continents';
import Countries from './components/Countries';

function App() {
  return (
    <div className="bg-blue-light">
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Metrics />} />
          <Route path="/continents/:name" element={<Continents />} />
          <Route path="/countries/:name" element={<Countries />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
