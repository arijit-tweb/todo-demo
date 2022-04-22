import React, { useState } from 'react';
import uniqid from 'uniqid';
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Multiplex = () => {
    const template = {
        name: '',
        screen: [],
        id: uniqid()
    };

    const screnTemplate = {
        screen: '',
        seat: [],
        screenId: uniqid()
    };

    const seatType = {
        name: '',
        price: '',
        seatId: uniqid()
    };

    const [multiplexValue, setMultiplexValue] = useState([template]);

    const addmultiplexClick = () => {
        setMultiplexValue([...multiplexValue, { ...template, id: uniqid() }]);
    };

    const deleteMultiplex = (id) => {
        let _multiplex = [...multiplexValue];
        let filteredArr = _multiplex.filter(e => e.id !== id);
        setMultiplexValue(filteredArr);
    }

    const screenAdd = (id) => {
        let _multiplex = [...multiplexValue];
        let index = _multiplex.findIndex(e => e.id === id);
        _multiplex.forEach((elem, ind) => {
            if (ind === index) {
                elem.screen = [...elem.screen, {
                    ...screnTemplate, screenId: uniqid()
                }]
                return
            }
        });
        // console.table(_multiplex);
        setMultiplexValue(_multiplex);
    };

    const screnDelete = (id, screenid) => {
        let _multiplex = [...multiplexValue];
        let index = _multiplex.findIndex(e => e.id === id);
        let filterScreen = _multiplex[index].screen.filter(e => e.screenId !== screenid);
        _multiplex[index].screen = filterScreen;
        setMultiplexValue(_multiplex);
    }

    const addSeat = (id, screenId) => {
        let _multiplex = [...multiplexValue];
        let index = _multiplex.findIndex(e => e.id === id);
        let screenIndex = _multiplex[index].screen.findIndex(e => e.screenId === screenId);
        _multiplex[index].screen.forEach((elem, ind)=>{
            if(ind === screenIndex){
                elem.seat = [...elem.seat,{
                    ...seatType, seatId: uniqid()
                }]
            }
        });
        setMultiplexValue(_multiplex)
    };

    const deleteSeat = (id, screenId, seatId)=>{
        let _multiplex = [...multiplexValue];
        let index = _multiplex.findIndex(e => e.id === id);
        let screenIndex = _multiplex[index].screen.findIndex(e => e.screenId === screenId);
        let filteredSeat = _multiplex[index].screen[screenIndex].seat.filter(e => e.seatId !== seatId);
        _multiplex[index].screen[screenIndex].seat = filteredSeat;

        setMultiplexValue(_multiplex);
    }

   


    return (
        <>
            <h4 className="text-center mb-4">Multiplex</h4>
            <div className="text-center my-3">
                <Link to="show">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Show Multiplex
                    </button>
                </Link>
            </div>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        multiplexValue.map((e, i) => {
                            return <div key={i}>
                                <div className="max-w-xs m-auto py-2">
                                    <div className="flex justify-between">
                                        <input className="shadow appearance-none border rounded mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Multiplex Name"
                                            name="name"
                                            
                                        />
                                        <div className="flex gap-5 cursor-pointer">
                                            <div onClick={addmultiplexClick}>
                                                <span><BsPlusLg /></span>
                                            </div>
                                            {
                                                multiplexValue.length > 1 && <div onClick={() => deleteMultiplex(e.id)}>
                                                    <span><BiMinus /></span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    {
                                        e.screen.length === 0 && <div className="flex my-3 cursor-pointer" onClick={() => screenAdd(e.id)}>
                                            <span className="relative addText"> Add Screen </span> <span><BsPlusLg /></span>
                                        </div>
                                    }
                                    {
                                        e.screen.length !== 0 && e.screen.map((elem, index) => {
                                            return <div className="screen_seat_Box my-3" key={index}>
                                                <div className="flex justify-between ml-3">
                                                    <div>
                                                        <input className="shadow appearance-none border mb-3 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Screen"
                                                            name="screen"
                                                        
                                                        />
                                                    </div>
                                                    <div className="flex gap-5 cursor-pointer">
                                                        <div onClick={() => screenAdd(e.id)}>
                                                            <span><BsPlusLg color="blue"/></span>
                                                        </div>
                                                        <div onClick={() => screnDelete(e.id, elem.screenId)}>
                                                            <span><BiMinus color="blue"/></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {
                                                    elem.seat.length === 0 && <div className="flex my-3 cursor-pointer"
                                                        onClick={() => addSeat(e.id, elem.screenId)}>
                                                        <span className="relative addText"> Add Seat </span> <span><BsPlusLg /></span>
                                                    </div>
                                                }
                                                {
                                                   elem.seat.length !== 0 && elem.seat.map((seat, seatIndex) => {
                                                        return <div key={seatIndex}>
                                                            <div className="flex justify-between ml-8">
                                                                <div>
                                                                    <input className="shadow appearance-none border mb-3 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="seat Name"
                                                                        
                                                                    />
                                                                    <input className="shadow appearance-none border mb-3 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Price"
                                                                        
                                                                    />
                                                                </div>
                                                                <div className="flex gap-5 cursor-pointer">
                                                                    <div onClick={() => addSeat(e.id, elem.screenId)}>
                                                                        <span><BsPlusLg color="red"/></span>
                                                                    </div>
                                                                    <div onClick={() => deleteSeat(e.id, elem.screenId, seat.seatId)}>
                                                                        <span><BiMinus color="red"/></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        })
                    }

                </div>
                <div className="text-center my-3">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Add All
                    </button>
                </div>
            </div>
        </>
    )
};

export default Multiplex