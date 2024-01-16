import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import { toast } from 'react-hot-toast';

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const logoutHandler = () => {
    setIsLoggedIn(false);
    toast.success("Logged Out");
  };

  return (
    <div className='flex justify-between w-11/12 max-w-[1190px] py-4 mx-auto'>
      <Link to="/">
        <img src={logo1} alt="Logo"  width={160} height={22} loading="lazy" />
      </Link>

      <nav>
        <ul className='text-zinc-200 flex gap-x-6 py-4'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className='flex items-center gap-x-3'>
        {!isLoggedIn ? (
          <>
            <Link to="/login">
            <button className='bg-gray-900 text-zinc-200 py-[6px] px-[12px] rounded-[8px] border border-gray-800'>
              Log in
            </button>
            </Link>
            <Link to="/up">
            <button className='bg-gray-900 text-zinc-200 py-[6px] px-[12px] rounded-[8px] border border-gray-800'>
              Sign Up
            </button>
            </Link>
          </>
        ) : (
          <>
            <button 
            className= 'bg-gray-800 text-zinc-400 py-[6px] px-[12px] rounded-[8px] border border-gray-800'
            onClick={logoutHandler} tabIndex="0">
              Log Out
            </button>
            <Link to="/board">
              <button className= 'bg-gray-800 text-zinc-400 py-[6px] px-[12px] rounded-[8px] border border-gray-800'>
                Dashboard
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
