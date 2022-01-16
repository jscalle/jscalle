import React from "react";
// import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

const persLeft = require('../assets/img/pesonajePrincipalLeft.png').default;
const persFront = require('../assets/img/pesonajePrincipalFront.png').default;
const persRight = require('../assets/img/pesonajePrincipalRight.png').default;
// const persGroup = require('../assets/img/pesonajePrincipalGroup.png').default;

export default function PageReactWithTailwindCSS() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://s1.1zoom.me/b5050/699/Canada_Houses_Winter_Sky_472108_1366x768.jpg')",
                // "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Lorem Ipsum.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Voluptate dolore eiusmod aliquip eu id duis non tempor irure elit pariatur nulla.
                    Proident adipisicing eiusmod laboris excepteur dolore est irure aute quis sunt sunt.
                  </p>
                </div>
              </div>
            </div>
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
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="w-9/12 mx-auto px-4"> {/* container  */}
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Lorem Ipsum.</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Ipsum incididunt enim sit est magna.
                      Aliquip pariatur in est est voluptate occaecat occaecat excepteur minim laboris ad qui exercitation.
                      Id sint culpa veniam occaecat enim consectetur.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Lorem Ipsum.</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Occaecat ipsum irure elit quis culpa occaecat officia.
                      Veniam amet voluptate cupidatat proident.
                      Enim enim sunt aute commodo tempor eiusmod.
                      Qui irure excepteur enim esse velit proident.
                      Esse pariatur consectetur fugiat occaecat sunt aliqua.
                      Ut sunt ut labore nulla minim cupidatat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Lorem Ipsum.</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Commodo sit mollit mollit eiusmod mollit aliqua qui eiusmod est qui cillum veniam elit nisi.
                      Aliqua excepteur laboris eu ullamco voluptate consectetur proident laborum exercitation.
                      Labore adipisicing irure velit elit irure aliqua duis culpa nisi id.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Lorem Ipsum.
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Reprehenderit cillum consequat duis minim deserunt labore deserunt cupidatat qui.
                  Quis magna non quis non pariatur do do velit dolor occaecat sit nostrud.
                  Magna sint esse aute quis.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Incididunt enim minim voluptate eiusmod commodo duis enim nulla ex veniam do veniam aute tempor.
                  Reprehenderit culpa amet aliquip sit laboris consequat cillum ipsum tempor.
                  Cupidatat nisi velit ut ut et anim.
                  Sit sint consequat ipsum laboris magna laboris cupidatat quis.
                </p>
                {/* <Link to="/" className="font-bold text-blueGray-700 mt-8">
                  Check Notus React!
                </Link> */}
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={persFront}
                    // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-10/12 mx-auto align-middle rounded-t-lg"
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
                    <h4 className="text-xl font-bold tLorem Ipsum">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="w-9/12 mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg" // shadow-lg 
                  src={persLeft}
                //   src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Lorem Ipsum.</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Ex non labore consequat ea occaecat tempor nulla est ea.
                    Ipsum duis dolor quis minim adipisicing ad est laborum officia cillum aliqua occaecat officia.
                    Reprehenderit eiusmod veniam aliqua consectetur tempor labore consectetur consectetur.
                    Commodo anim magna labore est enim.
                    Cupidatat quis consectetur deserunt deserunt dolore adipisicing culpa aliqua nostrud incididunt sunt quis nostrud.
                    Nulla proident excepteur ut ullamco cillum reprehenderit ullamco amet ipsum nulla consequat.
                    Elit ut enim amet id magna exercitation culpa velit fugiat.
                  </p>
                  {/* <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="w-9/12 mx-auto px-4">
            {/* <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div> */}
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    // src={require("assets/img/team-1-800x800.jpg").default}
                    src={persRight}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Lorem Ipsum</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Lorem Ipsum
                    </p>
                    {/* <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    // src={require("assets/img/team-2-800x800.jpg").default}
                    src={persRight}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Lorem Ipsum</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Lorem Ipsum
                    </p>
                    {/* <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    // src={require("assets/img/team-3-800x800.jpg").default}
                    src={persLeft}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Lorem Ipsum</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Lorem Ipsum
                    </p>
                    {/* <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    // src={require("assets/img/team-4-470x470.png").default}
                    src={persLeft}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Lorem Ipsum</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Lorem Ipsum
                    </p>
                    {/* <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="w-9/12 mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Lorem Ipsum.
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Proident proident ullamco esse irure.
                  Reprehenderit consequat do enim nostrud quis qui amet.
                  Ad sit enim laborum sint ut eu mollit consectetur ad nulla.
                  Ea velit anim sunt mollit aliqua enim ad cupidatat reprehenderit elit dolor est pariatur.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Lorem Ipsum
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Aliquip ex ipsum elit deserunt fugiat nisi laboris quis velit velit do laboris.
                  Ex commodo ad occaecat anim.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Lorem Ipsum
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Consequat aliqua pariatur dolore fugiat ipsum.
                  Exercitation aliquip labore cupidatat incididunt eiusmod velit esse elit sit ipsum minim labore.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Lorem Ipsum
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Consectetur veniam exercitation proident eu anim laborum.
                  Irure pariatur dolore veniam exercitation exercitation ut ipsum.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="w-10/12 mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-700 text-gray-100">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Contact
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-500">
                      Adipisicing minim amet reprehenderit elit dolor esse amet esse cupidatat pariatur.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Nombre completo
                      </label>
                      <input
                        // type="text"
                        className="bg-gray-800 border-0 p-3 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 placeholder-gray-500 focus:placeholder-gray-800 focus:bg-gray-500"
                        // className="border-0 px-3 py-3 bg-gray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="John Arias"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Correo electrónico
                      </label>
                      <input
                        // type="email"
                        className="bg-gray-800 border-0 p-3 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 placeholder-gray-500 focus:placeholder-gray-800 focus:bg-gray-500"
                        placeholder="johnarias@mail.com"
                      />
                      {/* <input
                        type="email"
                        className="border-0 px-3 py-3 bg-gray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="johnarias@mail.com"
                      /> */}
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Mensaje
                      </label>
                      {/* <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 bg-gray-600 text-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Hola, yo..."
                      /> */}
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 p-3 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 bg-gray-800 placeholder-gray-500 focus:placeholder-gray-800 focus:bg-gray-500"
                        // className="border-0 px-3 py-3 bg-gray-600 text-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Hola, yo..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Enviar mensaje
                      </button>
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