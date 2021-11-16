import { Link } from "react-router-dom";
<<<<<<< HEAD
import '../styleApp.css';
=======
import '../App.css';
>>>>>>> main
const logo = 'https://i.pinimg.com/originals/af/1a/7d/af1a7dffcc95abe22dc27844169fa010.jpg';

function App() {
  return (
<<<<<<< HEAD
    <div className="styleApp">
      <header className="styleApp-header">
        <img src={logo} className="styleApp-logo" alt="logo" />
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
>>>>>>> main
        <div className="intro">
          <p> ¡Hola Mundo! soy Sebastian Calle <span>(jscalle)</span> este es un espacio para que conozcas un poco sobre mi y algunos de mis proyectos.</p>
        </div>
        <ul className="list">
<<<<<<< HEAD
          <li><Link className="styleApp-link" to="/misionnft">Misión NFT LATAM</Link></li>
          <li><Link className="styleApp-link" to="/cv">CV Personal</Link></li>
          {/* <li>
            <a className="styleApp-link" href="https://misionnftlatam.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
=======
          <li><Link className="App-link" to="/misionnft">Misión NFT LATAM</Link></li>
          <li><Link className="App-link" to="/cv">CV Personal</Link></li>
          {/* <li>
            <a className="App-link" href="https://misionnftlatam.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
>>>>>>> main
              Misión NFT LATAM
            </a>
          </li>
          <li>
<<<<<<< HEAD
            <a className="styleApp-link" href="https://misionnftlatam.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
=======
            <a className="App-link" href="https://misionnftlatam.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
>>>>>>> main
              CV Personal
            </a>
          </li> */}
        </ul>
      </header>
    </div>
  );
}

export default App;
