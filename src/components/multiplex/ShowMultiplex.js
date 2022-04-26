import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const ShowMultiplex = () => {

    const navigate = useNavigate();

    const data = localStorage.getItem('multiplex');
    const [value, setvalue] = useState([])
    useEffect(() => {
        if (data) {
            let multiplexValue = JSON.parse(data);
            setvalue(multiplexValue);
        }
    }, [])

    return (
        <>
            <div className="container">
                <div className="text-center" onClick={()=> navigate(-1)}>
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        BACK
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

                    {
                        value.length !== 0 && value.map((e, i) => {
                            return <div className="w-full max-w-xs m-auto py-4" key={i}>
                                <p>Multiplex Name : {e.name}</p>
                                {
                                  e.screen.length!== 0 &&  e.screen.map((screen, index)=>{
                                        return <div key={index}>
                                            <p>screen Name : {screen.screen}</p>
                                            {
                                                screen.seat && screen.seat.length !== 0 && screen.seat.map((seat, seatIndex)=>{
                                                    return <div key={seatIndex}>
                                                            <p>seat Name : {seat.name}</p>
                                                            <p>seat Price : {seat.price}</p>
                                                        </div>
                                                })
                                            }
                                        </div>
                                    })
                                }
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ShowMultiplex