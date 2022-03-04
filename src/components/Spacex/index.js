import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
//Views
import App from './App';
// import CurrentLaunch from "./components/CurrentLaunch";
// import UpcomingLaunches from "./components/UpcomingLaunches";


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
      <Routes>
        <Route element={<App />}> */}
          {/* <Route path="/" element={<CurrentLaunch />} />
          <Route path="upcomingLaunches" element={<UpcomingLaunches />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);