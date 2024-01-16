import React from 'react'
import login from '../assets/login.png';
import Template from '../components/Template';


const Login = ({setIsLoggedIn}) => {
  return (
   <Template title="Welcome Back"
   desc1="Build Skills for today, tomarrow, and beyond."
   desc2="Education to future-proof your career" 
   image={login}
   formtype="loginUp"
   setIsLoggedIn={setIsLoggedIn}
   />
   
  )}

export default Login
