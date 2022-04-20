import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useDocumnetTitle } from '../../helpers/setDocumentTitle';
import { signupUser } from '../../redux/reducers/userSlice';
import AuthModal from './AuthModal';

const Signup = () => {

  useDocumnetTitle("sign up");

  const navigate = useNavigate();

  const {signupData, auth} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const [signupDetails, setsignupDetails] = useState({
    email: "eve.holt@reqres.in",
    password: "pistol"
  });

  const fromSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(signupDetails));
  }

  useEffect(()=>{
    if(auth){
      navigate('/');
      return
    }
  },[auth])

  useEffect(()=>{
    if(signupData.token){
      navigate('/login')
    }
  },[signupData])

  return (
    <>
      <AuthModal details={signupDetails} setDetails={setsignupDetails} fromSubmit={fromSubmit} name="Sign Up" />
    </>
  )
}

export default Signup