import { Link } from "react-router-dom";
import '../App.css';
const logo = 'https://i.pinimg.com/originals/af/1a/7d/af1a7dffcc95abe22dc27844169fa010.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="intro">
          <p>CV Personal</p>
        </div>
        <ul className="list">
          <li><Link className="App-link" to="/Misionnft">Misión NFT LATAM</Link></li>
          <li><Link className="App-link" to="/">Home</Link></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
