import { Routes, Route } from "react-router-dom";
import Home from "./Components/Main"
import Cv from "./Components/cv/main"
import Misionnft from "./Components/misionnft/main"
import './styleApp.css';

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