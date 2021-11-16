import { Routes, Route } from "react-router-dom";
import Home from "./components/Main"
import Cv from "./components/cv/main"
import Misionnft from "./components/misionnft/main"
import './main.css';

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cv" element={<Cv />} />
        <Route path="misionnft" element={<Misionnft />} />
      </Routes>
    </div>
  )
}

export default App;