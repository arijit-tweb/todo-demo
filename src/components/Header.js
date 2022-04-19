import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/reducers/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const logoutClicked = () => {
        localStorage.removeItem('token');
        dispatch(logout());
        navigate('/');
    };
    return (
        <>
            <div className="flex my-5 justify-around">
                <Link to="/">
                    <p className="text-center text-2xl text-blue-500">Todo App</p>
                </Link>

                <div className="flex gap-3">
                    <Link to="/login">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Log In
                        </button>
                    </Link>
                    <Link to="/signup"> 
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Signup
                        </button>
                    </Link>
                    <button className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={logoutClicked}>
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header