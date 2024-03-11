import React from 'react';
import { Link } from 'react-router-dom';
import SignInButton from './Button';

function Header() {
  return (
    <header className="flex flex-wrap place-items-center justify-between mx-auto sm:w-[100%] md:w-[80%] min-h-[65px] top-0 left-0 border-b [border-bottom-style:solid] border-[#e5e8ea]">

      <div className="flex w-[95.34px] h-[65px] place-items-center">
        <div className="w-[16px] h-[16px] m-auto">
            <img className="w-[12px] h-[13px] m-auto " alt="Vector" src="./images/Logo.png" />
          </div>
          <div className="md:items-start sm:place-items-center self-stretch w-full m-auto">
            <Link to='/' className="relative w-fit mt-[-1.00px] font-bold text-variable-collection-secondary-2 align-middle text-[18px] tracking-[-0.27px] leading-[22.5px] ">
              FinTrackr
            </Link>
          </div>
      </div>

      <div className='align-middle h-[65px] flex'>
        <Link to='Login' className=" w-[89px] font-bold text-[#197fe5] m-auto text-[14px] align-middle leading-[27.5px]">
          Log in
        </Link>
        <SignInButton text="Sign Up" link="/Login"/>
      </div>

  </header>
  );
};

export default Header