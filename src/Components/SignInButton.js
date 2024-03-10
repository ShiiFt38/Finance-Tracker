import React from 'react';
import { Link } from 'react-router-dom';


function SignInButton({text, onClick, iconSrc, iconAlt, link}) {
  return (
    <button
      className="flex justify-center align-middle items-center px-8 py-2.5 mt-3.5 font-bold whitespace-nowrap bg-blue-600 rounded-xl text-white w-[180px] h-[35px] hover:bg-[#637587] max-md:px-5 cursor-pointer"
      onClick={onClick}
    >
      {iconSrc && <img src={iconSrc} alt={iconAlt} className="self-start w-5 aspect-square mr-2" />}
      <Link to={link}>{text}</Link>
    </button>
  );
}

export default SignInButton;
