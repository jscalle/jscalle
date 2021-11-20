// import logo from './logo.svg';
import './main.css';
// import { StyleReset } from 'atomize';
import env from './components/env.json'
import DoubleContent from './components/doubleContent';
const logo = 'https://i.pinimg.com/originals/f4/83/4b/f4834b81fe7412c36c81bb5c87969d52.jpg';

function App() {
  return (
    <div className="Main mx-auto" >
      {/* <StyleReset /> */}
      <header className="Main-header">
        {/* <img src={logo} className="Main-logo" alt="logo" /> */}
        <p className="text-5xl" >MISIÓN NFT LATAM</p>
        {/* <img src={logo} className="Main-logo" alt="logo" /> */}
      </header>
      <div className="mainContainer">
        <DoubleContent option={1} title={env.bloque1.titulo} txt={env.bloque1.texto1} img={logo} reverse={true} />
        <DoubleContent option={2} txt={env.bloque1.texto2} img={logo} hide={true} />
        <DoubleContent option={1} txt={env.bloque1.texto3} img={logo} />
        <DoubleContent option={2} title={env.bloque2.titulo} txt={env.bloque2.texto} img={logo} />
        <DoubleContent option={1} title={env.bloque3.titulo} txt={env.bloque3.texto} img={logo} />
        <DoubleContent option={4} img={logo} img2={logo} />
        <DoubleContent option={7} title={env.bloque4.titulo} txt={env.bloque4.texto} />
        <DoubleContent option={8} title={env.bloque5.titulo} txt={env.bloque5.texto} />
        <DoubleContent option={4} img={logo} img2={logo} />
        <DoubleContent option={9} title={env.bloque6.titulo} txt={env.bloque6.texto} />
      </div>
    </div>
  );
}

export default App;
