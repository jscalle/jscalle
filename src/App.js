import { Routes, Route } from "react-router-dom";
// import { styled } from "styletron-react";
// import { StyleReset } from 'atomize';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

import Home from "./components/Main"
import Cv from "./components/cv/main"
import SpaceX from "./components/Spacex/App"
import Landing from "./components/Landing"

import './main.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cv" element={<Cv />} />
        <Route path="spacex" element={<SpaceX />} />
        <Route path="pageReactWithTailwindCSS" element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App;