import React, { useState } from 'react';
import uniqid from 'uniqid';
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Multiplex = () => {
    const template = {
        name: '',
        screen: [{
            screen: '',
            seat: '',
            screenId: uniqid()
        }],
        id: uniqid()
    };
    
    const [multiplexValue, setMultiplexValue] = useState([template]);

    const addmultiplexClick = () => {
        setMultiplexValue([...multiplexValue, { ...template, id: uniqid() }]);
    };

    const screenAdd = (id) => {
        let _multiplex = [...multiplexValue];
        let index = _multiplex.findIndex(e => e.id === id);
        _multiplex.forEach((elem, ind) => {
            if (ind === index) {
                elem.screen = [...elem.screen, {
                    screen: '',
                    seat: '',
                    screenId: uniqid()
                }]
                return
            }
        });
        // console.table(_multiplex);
        setMultiplexValue(_multiplex)
    };

    const inputChange = (event, id) => {
        // console.log(event.target.value, id);
        let _multiplex = [...multiplexValue];
        let index = _multiplex.findIndex(e => e.id === id);
        _multiplex[index][event.target.name] = event.target.value;
        setMultiplexValue(_multiplex);
    };

    const screenChange = (event, screenId, id) => {
        let _multiplex = [...multiplexValue];
        let index = _multiplex.findIndex(e => e.id === id);
        let screenIndex = _multiplex[index].screen.findIndex(e => e.screenId === screenId);
        _multiplex[index].screen[screenIndex][event.target.name] = event.target.value;
        setMultiplexValue(_multiplex);
    };

    const deleteMultiplex = (id) => {
        let _multiplex = [...multiplexValue];
        let index = _multiplex.findIndex(e => e.id === id);
        _multiplex.splice(index, 1);
        setMultiplexValue(_multiplex);
    }

    const addAll = () => {
        localStorage.setItem('multiplex', JSON.stringify(multiplexValue));
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
                                <div className="w-full max-w-xs m-auto py-4">
                                    <input className="shadow appearance-none border rounded mb-3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Multiplex Name"
                                        name="name"
                                        value={e.name}
                                        onChange={(event) => inputChange(event, e.id)}
                                    />

                                    <div className="flex my-3" onClick={() => screenAdd(e.id)}>
                                        <span className="relative addText">Multiplex Screen</span> <span><BsPlusLg /></span>
                                    </div>
                                    {
                                        e.screen.map((elem, index) => {
                                            return <div className="screen_seat_Box my-3" key={index}>
                                                <input className="shadow appearance-none border mb-3 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Screen"
                                                    name="screen"
                                                    value={elem.screen}
                                                    onChange={(event) => screenChange(event, elem.screenId, e.id)}
                                                />
                                                <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    name="seat"
                                                    value={elem.seat}
                                                    onChange={(event) => screenChange(event, elem.screenId, e.id)}
                                                >
                                                    <option value=''>Select Seat Type</option>
                                                    <option value="club">Club</option>
                                                    <option value="royel">Royel</option>
                                                    <option value="normal">Normal</option>
                                                </select>
                                            </div>
                                        })
                                    }

                                    <div className="flex my-3 cursor-pointer" onClick={addmultiplexClick}>
                                        <span className="relative addText"> Add Multiplex </span> <span><BsPlusLg /></span>
                                    </div>
                                    {
                                        multiplexValue.length > 1 && <div className="flex my-3 cursor-pointer" 
                                        onClick={() => deleteMultiplex(e.id)}>
                                            <span className="relative addText"> Delete Multiplex </span> <span><BiMinus /></span>
                                        </div>
                                    }
                                </div>
                            </div>
                        })
                    }

                </div>
                <div className="text-center my-3">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={addAll}>
                        Add All
                    </button>
                </div>
            </div>
        </>
    )
};

export default Multiplex