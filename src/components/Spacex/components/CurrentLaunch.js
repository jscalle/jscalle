import { useTimer } from 'react-timer-hook';

const MyTimer = ({expiryTimestamp}) => {
    const {
        seconds,
        minutes,
        hours,
        days,
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
        <div className="flex flex-col justify-center content-center items-center pt-3">
            <span className="text-6xl font-semibold "> {days} </span> <p className='flex flex-col px-16 my-1 items-center text-lg uppercase border border-white rounded w-30' >Días </p> 
            <span className="text-6xl font-semibold "> {hours} </span> <p className='flex flex-col px-12 my-1 items-center text-lg uppercase border border-white rounded w-30' >Horas </p> 
            <span className="text-6xl font-semibold "> {minutes} </span> <p className='flex flex-col px-10 my-1 items-center text-lg uppercase border border-white rounded w-30' >Minutos </p> 
            <span className="text-6xl font-semibold "> {seconds} </span> <p className='flex flex-col px-8 my-1 items-center text-lg uppercase border border-white rounded w-30' >Segundos </p> 
        </div>
    )
}

const CurrentLaunch = ({data}) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    let _date = data[0] && new Date(data[0].date_utc)

    return (
        <div className='w-full flex flex-col items-center bg-gradient-to-r from-teal-400 to-teal-900 h-screen'>
            {/* <div className="w-2/3 flex flex-col justify-center mt-8 py-6 shadow-lg rounded-md bg-gray-900/60 text-slate-100"> */}
            <div className="w-2/3 flex flex-col justify-center mt-8 py-6 shadow-lg rounded-md bg-gray-900 bg-opacity-50 text-slate-100">
            {data[0] && (<>
                <div className="flex flex-col justify-center content-center items-center">
                    <h1 className="text-5xl uppercase font-semibold">{data[0] && data[0].name}</h1>
                    <p className="text-2xl uppercase font-semibold">{`Lunes ${_date.getDate()-1} - ${_date.getHours()}:${_date.getMinutes()<10? `0${_date.getMinutes()}` : _date.getMinutes() }`}</p>
                </div>
                <MyTimer expiryTimestamp={_date} />
            </>)}
            </div>
        </div>
    )
}

export default CurrentLaunch