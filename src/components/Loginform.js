import React, { useState } from 'react';
import { IoMdEye,IoMdEyeOff } from "react-icons/io";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Loginform = ({ setIsLoggedIn }) => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value, 
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success('Logged In');
    console.log("Printing the formData");
    console.log(formData)
    Navigate('/board'); // This line was replaced with the intended navigation method
  }

  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'>
      
      <label className='w-full'>
        <p className='text-[0.875rem] text-slate-300 mb-1 leading-[1.375rem]'>
          Email Address <sup className='text-pink-200'>*</sup></p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          name="email"
          className='bg-neutral-900 rounded-[0.5rem]  text-slate-400 w-full p-[12px]'
        />
      </label>

      <label className='w-full relative'>
        <p className='text-[0.875rem] text-slate-300 mb-1 leading-[1.375rem]'>
        Password <sup className='text-pink-200'>*</sup> </p>
        <input
          required
          value={formData.password}
          type={showPassword ? 'text' : 'password'}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
          className='bg-neutral-900 rounded-[0.5rem]  text-slate-400 w-full p-[12px]'

        />

        <span 
        className='absolute right-3 top-[38px] cursor-pointer' 
        onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? 

          (<IoMdEyeOff fontSize={24} fill='#AFB2BF'/>) : 
          (<IoMdEye fontSize={24} fill='#AFB2BF'/>)
          }
        </span>

        <Link to="#">
          <p className='flex flex-row-reverse text-sky-600'>Forgot Password</p>
        </Link>
      </label>

      <button className='w-full bg-amber-300 rounded-[8px] font-medium text-slate-800 px-[12px] py-[8px] mt-5'>
        Sign In
      </button>
    </form>
  );
};

export default Loginform;

