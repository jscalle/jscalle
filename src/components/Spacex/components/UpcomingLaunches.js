import axios from 'axios';
import { useEffect, useState } from 'react'

const UpcomingLaunches = ({data}) => {
    const [ _data, setData ] = useState([])

    useEffect(()=>{
        setData(data)
    }, [data])

    const Time = ({date}) => {
        let day = new Date(date)
        return ( <p>{`${day.toLocaleDateString('en-US', { month: 'long'})} ${day.getDate()}th ${day.getFullYear()}`}</p> )
    }

    const Launched = ({aux}) => {
        const [lnch, setLnch] = useState([])
        
        axios.get(`https://api.spacexdata.com/v4/launchpads/${aux}`)
        .then(res => {
            setLnch(res.data.name)
        })

        return ( <p>{lnch}</p> )
    }
    
    return (
        <div className="flex flex-col justify-start content-center w-full px-6 bg-gradient-to-r from-pink-800 via-fuchsia-900 to-slate-300 h-screen">
            <div className='px-28 py-10 '>
                <h1 className='text-6xl pb-8 font-semibold flex justify-center'>Upcoming - next launches</h1>
                <div className='flex flex-col shadow-lg p-6 rounded-md bg-gray-900 bg-opacity-50 text-slate-100'>
                    <div className="grid grid-cols-3 gap-3 border-b pb-3 text-2xl font-bold">
                        <div>Mission</div>
                        <div>Date (UTC)</div>
                        <div>Launched</div>
                    </div>

                    { _data.length && _data.map((e, i) => 
                        <div className="grid grid-cols-3 gap-3 text-lg" key={i}>
                            <div className='py-2 border-b'>
                                <p>{e.name}</p>
                            </div>
                            <div className='py-2 border-b'>
                                <Time date={e.date_utc} />
                            </div>
                            <div className='py-2 border-b'>
                                <Launched aux={e.launchpad} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UpcomingLaunches