import React from 'react';
import frame from "../assets/frame.png";
import login from "../assets/login.png"; // Corrected import path
import signup from "../assets/signup.png";
import Loginform from "./Loginform";
import Signupform from "./Signupform";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
      <div className='w-11/12 max-w-[450px]'>
        <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>
          {title}
        </h1>
        <p className='text-[1.25rem] leading-[1.625rem] mt-4'> {/* Corrected class name */}
          <span className='text-slate-400'> {desc1}</span>
          <br/>
          <span className='text-cyan-700 italic'>{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <Signupform setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Loginform setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className='flex w-full items-center my-4 gap-x-2'>
          <div className='w-full h-[1px] bg-slate-700'></div>
          <p className='bg-slate-900 font-medium leading-[1.375rem] text-slate-600'>OR</p> {/* Corrected class name */}
          <div className='w-full h-[1px] bg-slate-700'></div>
        </div>
        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-yellow-100 border border-stone-800 px-[12px] py-[8px] gap-x-2 mt-6'>
          <FcGoogle/>
          <p>Sign Up with Google</p>
        </button>
      </div>
      <div className='relative w-11/12 max-w-[450px]'>
        <img
          src={frame}
          alt="Pattern"
          width={558}
          height={400}
          loading="lazy"
        />
        {formtype === 'signup' ? (
            <img
              src={signup} // replace 'signupImage' with your signup image path
              alt="signup"
              width={558}
              height={590}
              loading="lazy"
              className='absolute -top-3 right-3 h-2/8'
            />
          ) : (
            <img
              src={login}
              alt="login"
              width={558}
              height={590}
              loading="lazy"
              className='absolute -top-3 right-3 h-2/8'
            />)}

      </div>
    </div>
  );
};

export default Template;
