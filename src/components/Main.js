import { Link } from "react-router-dom";
// import '../main.css';
import Footer from "components/Footers/Footer.js";
const logo = 'https://i.pinimg.com/originals/af/1a/7d/af1a7dffcc95abe22dc27844169fa010.jpg';

function App() {
  return (
    <>
      <section className="mt-24 pb-0 relative bg-blueGray-100 ">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-7/12 lg:w-4/12 px-10 md:px-4 mr-auto ml-auto md:-mt-44">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://i.pinimg.com/originals/af/1a/7d/af1a7dffcc95abe22dc27844169fa010.jpg"
                  // src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    ¡Hola Mundo!
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Soy Sebastian Calle y este es un pequeño espacio para que conozcas un poco de mi, de mis proyectos y en algunos de ellos podrás saber que pienso.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-5/12 px-4 mx-auto">

              <div className="container mx-auto ">
                <div className="justify-center flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4  -mt-24">
                    <div className="flex flex-wrap pt-32">
                      {/* <div className="w-full lg:w-8/12 px-4">
                        <h5 className="text-xl font-semibold pb-4 text-center">
                          Login Page
                        </h5>
                        <Link to="/auth/login">
                          <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                            <img
                              alt="..."
                              className="align-middle border-none max-w-full h-auto rounded-lg"
                              src={require("assets/img/login.jpg").default}
                            />
                          </div>
                        </Link>
                      </div> */}

                      <div className="w-full lg:w-8/12 px-4">
                        <h5 className="text-xl font-semibold pb-4 text-center">
                          Misión NFT LATAM
                        </h5>
                        <Link to="/misionnft">
                          <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                            <img
                              alt="..."
                              className="align-middle border-none max-w-full h-auto rounded-lg"
                              src={require("assets/img/misionnft.JPG").default}
                            />
                          </div>
                        </Link>
                      </div>

                      {/* <div className="w-full lg:w-8/12 px-4">
                        <h5 className="text-xl font-semibold pb-4 text-center">
                          CV (Hoja de vida)
                        </h5>
                        <Link to="/cv">
                          <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                            <img
                              alt="..."
                              className="align-middle border-none max-w-full h-auto rounded-lg"
                              src={require("assets/img/cv.jpg").default}
                            />
                          </div>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
    // <div className="flex flex-wrap">

    //   <header className="Main-header">
        
    //     <div className="aux izq" >
    //       <ul className="list">
    //         <li><Link className="noLink" to="/misionnft">Misión NFT LATAM</Link></li>
    //         <li><Link className="noLink" to="/cv">CV Personal</Link></li>
    //       </ul>
    //     </div>
        
    //     <div className="aux der">
    //       <img src={logo} className="Main-logo" alt="logo" />
    //         <div className="intro">
    //           <p> <span className="text-xl text-blueGray-700" >¡Hola Mundo!</span> <br/><br/> Soy Sebastian Calle <span>@jscalle</span> este es un espacio para que conozcas un poco sobre mi y algunos de mis proyectos.</p>
    //         </div>
    //       </div>
    //   </header>
    
    // </div>
  );
}

export default App;
