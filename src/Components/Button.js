import React from 'react';
import { Link } from 'react-router-dom';


function Button({text, onClick, iconSrc, iconAlt, link}) {
  return (
    <Link to={link}>
      <button
        className="flex justify-center align-middle items-center px-8 py-2.5 mt-3.5 font-bold whitespace-nowrap bg-blue-600 rounded-xl text-white sm:w-[13 0px] md:w-[180px] sm:h-[30px] md:h-[35px] hover:bg-[#637587] transition-all duration-1000ms ease-in max-md:px-5 cursor-pointer"
        onClick={onClick}
      >
        {iconSrc && <img src={iconSrc} alt={iconAlt} className="self-start w-5 aspect-square mr-2" />}
        <span className='sm:text-[14px] md:text-[18px]'>{text}</span> 
      </button>
    </Link>
  );
}

export default Button;
