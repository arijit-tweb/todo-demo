import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout, setAuth } from '../redux/reducers/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { auth } = useSelector(state => state.user);

    const logoutClicked = () => {
        localStorage.removeItem('token');
        dispatch(logout());
        dispatch(setAuth(false));
        navigate('/');
    };
    return (
        <>
            <div className="flex my-5 justify-around">
                <Link to="/">
                    <button className="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Home
                    </button>
                </Link>
                <div className="flex gap-3">
                    {
                        !auth && <>
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
                        </>
                    }
                   {
                       auth &&  <button className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={logoutClicked}>
                       Logout
                   </button>
                   }
                </div>
            </div>
        </>
    )
}

export default Header