import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addMultiplex } from '../../redux/reducers/multiplex';

const Multiplex = () => {
    const dispatch = useDispatch();
    const [multiplexValue, setMultiplexValue] = useState({
        name: '',
        screen: '',
        seatType: ''
    });

    const [err, setErr] = useState('');

    const inputChange = (e) => {
        setMultiplexValue({
            ...multiplexValue,
            [e.target.name]: e.target.value
        })
    };

    const addMultiplexadded = () => {
        const { name, screen, seatType } = multiplexValue
        if (name === '' || screen === '' || seatType === '') {
            setErr("field can't be Blank");
            return
        }
        setErr('');
        dispatch(addMultiplex(multiplexValue))

    };

    useEffect(()=>{

    },[])

    const multiplex = localStorage.getItem('multiplex');

    return (
        <>
            <h4 className="text-center mb-4">Add Multiplex</h4>

            <p className="text-center my-2">
                {
                    err && err
                }
            </p>

            <div className="w-full max-w-xs m-auto">
                <input className="shadow appearance-none border rounded mb-3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Multiplex Name"
                    name="name"
                    value={multiplexValue.name}
                    onChange={inputChange}
                />
                <input className="shadow appearance-none border mb-3 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Screen"
                    name="screen"
                    value={multiplexValue.screen}
                    onChange={inputChange}
                />
                <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    name="seatType"
                    value={multiplexValue.seatType}
                    onChange={inputChange}
                >
                    <option value=''>Select Seat Type</option>
                    <option value="club">Club</option>
                    <option value="royel">Royel</option>
                    <option value="normal">Normal</option>
                </select>

                <button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={addMultiplexadded}>
                    Add
                </button>
            </div>

            <div className="my-5">
               
            </div>
        </>
    )
}

const PerMultiplex = () => {

}

export default Multiplex