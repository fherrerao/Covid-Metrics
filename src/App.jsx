import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Continents from './components/Continents';
import Countries from './components/Countries';
import Homepage from './components/Homepage';
import Header from './components/Header';

function App() {
  return (
    <div className="bg-blue-light">
      <HashRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/continents/:name" element={<Continents />} />
          <Route path="/countries/:name" element={<Countries />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
