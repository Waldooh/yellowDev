import React from "react";
import Inicio from "./pages/inicio";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </>
  );
}

export default App;
