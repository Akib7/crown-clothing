import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";

const HatsPAge = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hats" element={<HatsPAge />} />
      </Routes>
    </div>
  );
}

export default App;
