import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/reducers/userSlice';
import AuthModal from './AuthModal';
import { useNavigate, useLocation} from 'react-router-dom';
import { useDocumnetTitle } from '../../helpers/setDocumentTitle';

const Login = () => {

  useDocumnetTitle("login");

  const location = useLocation();
  const navigate = useNavigate();
  const fromLocation = location.state?.from?.pathname || '/';

  const {loginToken} = useSelector(state => state.user);

  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  });

  const fromSubmit = (e)=>{
    e.preventDefault();
    dispatch(loginUser(loginDetails));
  }

  useEffect(()=>{
    // console.log(location);
    console.log('hii');
    if(loginToken.token){
      console.log('hello');
      localStorage.setItem('token', loginToken.token);
      navigate(fromLocation, {replace: true});
    }
  }, [loginToken])

  return (
    <>
      <AuthModal details={loginDetails} setDetails={setLoginDetails} fromSubmit={fromSubmit} name="Log in"/>
    </>
  )
}

export default Login