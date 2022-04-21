import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/reducers/userSlice';
import AuthModal from './AuthModal';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useDocumnetTitle } from '../../helpers/setDocumentTitle';

const Login = () => {

  // custom hook for page title 
  useDocumnetTitle("login");

  const [params] = useSearchParams();
  const paramId = params.get('todoId')

  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const fromLocation = location.state?.from?.pathname || '/';

  const { loginToken } = useSelector(state => state.user);

  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  });

  const fromSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginDetails));
  }

  useEffect(() => {
    const token_ = localStorage.getItem('token');
    if (token_) {
      navigate(fromLocation, { replace: true });
    }
  }, []);

  useEffect(() => {
    if (loginToken?.token) {
      localStorage.setItem('token', loginToken.token);
      
      if (paramId) {
        navigate(`${fromLocation}?todoId=${paramId}`, { state: {type: location.state?.type}, replace: true });
        return
      }

      navigate(fromLocation, { replace: true });
    }
  }, [loginToken])

  return (
    <>
      <AuthModal details={loginDetails} setDetails={setLoginDetails} fromSubmit={fromSubmit} name="Log in" />
    </>
  )
}

export default Login