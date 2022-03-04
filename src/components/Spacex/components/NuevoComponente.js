import { useState } from 'react';
import { useTimer } from 'react-timer-hook';

const MyTimer = ({expiryTimestamp}) => {
    const {
        seconds,
        minutes,
        hours,
        days,
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
        <div className="flex flex-col justify-center content-center items-center pt-5">
            <span className="text-7xl font-semibold pb-4"> {days} </span> <p className='flex flex-col my-2 items-center text-lg uppercase border border-white rounded w-28' >Días </p> 
            <span className="text-7xl font-semibold pb-4"> {hours} </span> <p className='flex flex-col my-2 items-center text-lg uppercase border border-white rounded w-28' >Horas </p> 
            <span className="text-7xl font-semibold pb-4"> {minutes} </span> <p className='flex flex-col my-2 items-center text-lg uppercase border border-white rounded w-28' >Minutos </p> 
            <span className="text-7xl font-semibold pb-4"> {seconds} </span> <p className='flex flex-col my-2 items-center text-lg uppercase border border-white rounded w-28' >Segundos </p> 
        </div>
    )
}

const NuevoComponente = ({data}) => {
    const [date] = useState(data[0])

    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    let _date = new Date(date.date_utc)

    return (
        <div className='w-full flex flex-col items-center bg-gradient-to-r from-teal-400 to-teal-900 h-screen'>
            <div className="w-2/3 flex flex-col justify-center mt-8 py-6 shadow-lg rounded-md bg-gray-900/60 text-slate-100">
            <div className="flex flex-col justify-center content-center items-center">
                <h1 className="text-5xl uppercase font-semibold">{date.name}</h1>
                <p className="text-2xl uppercase font-semibold">{`Lunes ${_date.getDate()} - ${_date.getHours()}:${_date.getMinutes()<10? `0${_date.getMinutes()}` : _date.getMinutes() }`}</p>
            </div>
            <MyTimer expiryTimestamp={_date} />
            </div>
        </div>
    )
}

export default NuevoComponente