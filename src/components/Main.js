import { Link } from "react-router-dom";
import '../main.css';
const logo = 'https://i.pinimg.com/originals/af/1a/7d/af1a7dffcc95abe22dc27844169fa010.jpg';

function App() {
  return (
    <div className="styleApp">
      <header className="styleApp-header">
        <div className="aux" >
          <img src={logo} className="styleApp-logo" alt="logo" />
          <div className="intro">
            <p> <span>¡Hola Mundo!</span> <br/><br/> Soy Sebastian Calle <span>@jscalle</span> este es un espacio para que conozcas un poco sobre mi y algunos de mis proyectos.</p>
          </div>
          <ul className="list">
            <li><Link className="noLink" to="/misionnft">Misión NFT LATAM</Link></li>
            <li><Link className="noLink" to="/cv">CV Personal</Link></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
