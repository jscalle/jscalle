import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from "react-router-dom";
// import Navbar from "../Navbars/AuthNavbar.js";
import CurrentLaunch from './components/CurrentLaunch';
import UpcomingLaunches from "./components/UpcomingLaunches";

function App() {
  const [ view, setView ] = useState('currLaun')
  const [ data, setData ] = useState([])

  useEffect(()=>{
    axios.get(`https://api.spacexdata.com/v5/launches/upcoming`)
    .then(res => {
      setData(res.data)
    })
  }, [])

  return (
    <div className='flex justify-start w-full h-screen'>
      <div className='flex w-full'>
        
        <div className='flex text-slate-100 w-2/12'>
          <nav className='flex flex-col p-2 bg-gray-800 w-full h-full'>
            <h2 className='text-2xl font-bold p-2 '>Space X Launches</h2>
            <p className='mt-10 text-xl py-2 px-2 rounded-lg hover:bg-slate-500 cursor-pointer' onClick={()=>setView('currLaun')}>
              Lanzamiento actual
            </p>
            <p className='mt-5 text-xl py-2 px-2 rounded-lg hover:bg-slate-500 cursor-pointer' onClick={()=>setView('upcomLaun')}>
              Proximos lanzamientos
            </p>
            <Link className="flex absolute m-20 bottom-0 items-center text-white text-sm font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase" to="/" >
              <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-arrow-left text-lg leading-lg mr-2" />
              Atrás
            </Link>
          </nav>
        </div>

        <div className='flex flex-col text-slate-100 w-10/12'>
          {view==='currLaun' ? <CurrentLaunch data={data} /> : view==='upcomLaun' && <UpcomingLaunches data={data} /> } 
        </div>
      </div>
      
      {/* <Navbar transparent /> */}
    </div>
  );
}

export default App;
