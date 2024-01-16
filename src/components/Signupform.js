import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signupform = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };

    const finalData = {
      ...accountData,
      accountType
    }
    console.log("printing final account data", accountData);
    console.log(finalData);
    navigate("/board");
  }

  return (
    <div>
      <div className='flex bg-slate-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button
          className={`${accountType === "student"
            ? "bg-black text-slate-300"
            : "bg-transparent text-white"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${accountType === "instructor"
            ? "bg-black text-slate-300"
            : "bg-transparent text-white"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className=' flex justify-between'>
          {/* First Name */}
          <div className=" mb-4">
            <label className="block">
              <p className='text-[0.875rem] text-slate-300 mb-1 leading-[1.375rem]'>
                First Name<sup className='text-pink-200'>*</sup></p>
              <input
                required
                type="text"
                value={formData.firstName}
                name="firstName"
                onChange={changeHandler}
                placeholder="Enter First Name"
                className='bg-neutral-900 rounded-[0.5rem]  text-slate-400 w-full p-[12px]'
              />
            </label>
          </div>
          {/* Last Name */}
          <div className="mb-4">
            <label className="block">
              <p className='text-[0.875rem] text-slate-300 mb-1 leading-[1.375rem]'>
                Last Name<sup className='text-pink-500'>*</sup></p>
              <input
                required
                type="text"
                value={formData.lastName}
                name="lastName"
                onChange={changeHandler}
                placeholder="Enter Last Name"
                className='bg-neutral-900 rounded-[0.5rem]  text-slate-400 w-full p-[12px]'
              />
            </label>
          </div>
        </div>
        {/* Email Address */}
        <div className="mb-4">
          <label>
            <p className='text-[0.875rem] text-slate-300 mb-1 leading-[1.375rem]'>
              Email Address<sup className='text-pink-500'>*</sup></p>
            <input
              required
              type="email"
              value={formData.email}
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Address"
              className='bg-neutral-900 rounded-[0.5rem]  text-slate-400 w-full p-[12px]'
            />
          </label>
        </div>
        {/* Password and Confirm Password */}
        <div className='flex justify-between'>
          <label className='relative'>
            <p className='w-full text-[0.875rem] text-slate-300 mb-1 leading-[1.375rem]'>
              Create Password<sup className='text-pink-500'>*</sup></p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              className='bg-neutral-900 rounded-[0.5rem]  text-slate-400 w-full p-[12px]'
            />
            <span
              className='absolute right-3 top-[38px] cursor-pointer'
              onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ?
                (<IoMdEyeOff fontSize={24} fill='#AFB2BF' />) :
                (<IoMdEye fontSize={24} fill='#AFB2BF' />)
              }
            </span>
          </label>
          <label className='relative'>
            <p className='text-[0.875rem] text-slate-300 mb-1 leading-[1.375rem]'>
              Confirm Password<sup className='text-pink-200'>*</sup></p>
            <input
              required
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              className='bg-neutral-900 rounded-[0.5rem]  text-slate-400 w-full p-[12px]'
            />
            <span
              className='absolute right-3 top-[38px] cursor-pointer'
              onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ?
                (<IoMdEyeOff fontSize={24} fill='#AFB2BF' />) :
                (<IoMdEye fontSize={24} fill='#AFB2BF' />)
              }
            </span>
          </label>
        </div>
        {/* Submit Button */}
        <button className='w-full bg-amber-300 rounded-[8px] font-medium text-slate-800 px-[12px] py-[8px] mt-5'>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signupform;
