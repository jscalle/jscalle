import React from "react";
import env from './components/env.json'
import DoubleContent from './components/doubleContent';

import Navbar from "../Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
// const logo = 'https://i.pinimg.com/originals/f4/83/4b/f4834b81fe7412c36c81bb5c87969d52.jpg';
const logo = require('../../assets/img/pkball.png').default;

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page font-mono">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                // "url('https://i.pinimg.com/originals/af/1a/7d/af1a7dffcc95abe22dc27844169fa010.jpg')",
                // "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
                "url('https://compote.slate.com/images/1ac38d53-d44b-4dd6-b776-68c9922863a8.gif?width=1200&rect=780x520&offset=0x0')",
                // "url('https://64.media.tumblr.com/895d0262561113630297f7576ddaec65/d9349dddc86a6ee5-ed/s1280x1920/8b864be43fdbe0933e1d03c443a3cd5852a28d29.gifv')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            >
            </span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-6/12 px-4 flex justify-center">
                    <div className="relative">
                      {/* <img
                        alt="..."
                        src={require("assets/img/team-0-800x800.jpg").default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      /> */}
                      <h1 className="text-5xl sm:text- font-bold italic leading-normal text-blueGray-800 text-center">
                        Misión NFT LATAM
                      </h1>
                    </div>
                  </div>
                </div> 
                <div className="text-center">
                </div>
                <div className="mt-4 py-10 border-blueGray-200 text-left"> {/* border-t */}
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-10/12 px-6 sm:px-2">
                      <DoubleContent option={1} title={env.bloque1.titulo} txt={env.bloque1.texto1} img={logo} reverse={true} />
                      <DoubleContent option={2} txt={env.bloque1.texto2} img={logo} hide={true} />
                      <DoubleContent option={1} txt={env.bloque1.texto3} img={logo} />
                      <DoubleContent option={2} title={env.bloque2.titulo} txt={env.bloque2.texto} img={logo} />
                      <DoubleContent option={1} title={env.bloque3.titulo} txt={env.bloque3.texto} img={logo} />
                      <DoubleContent option={4} img={logo}/> {/* img2={logo} */}
                      <DoubleContent option={7} title={env.bloque4.titulo} txt={env.bloque4.texto} />
                      <DoubleContent option={8} title={env.bloque5.titulo} txt={env.bloque5.texto} />
                      <DoubleContent option={4} img={logo}/> {/* img2={logo} */}
                      <DoubleContent option={9} title={env.bloque6.titulo} txt={env.bloque6.texto} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
