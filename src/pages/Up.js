import React from 'react'
import signup from '../assets/signup.png';
import Template from '../components/Template';

const Up = ({setIsLoggedIn}) => {
  return (
    <Template title="Join The millions learning to code with StudyNation for free"
    desc1="Build Skills for today, tomarrow, and beyond."
    desc2="Education to future-proof your career" 
    image={signup}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
    
  )
}

export default Up
