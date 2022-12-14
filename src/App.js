import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home/Home.page';
import Prediction from "./pages/prediction/prediciton.page";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/application" element={<Prediction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


