import React from 'react';


function SignInButton({text, onClick, iconSrc, iconAlt}) {
  return (
    <button
      className="flex justify-center items-center px-16 py-2.5 mt-3.5 max-w-full font-bold tracking-wide whitespace-nowrap bg-blue-600 rounded-xl leading-[150%] text-white w-[511px] max-md:px-5 cursor-pointer"
      onClick={onClick}
    >
      {iconSrc && <img src={iconSrc} alt={iconAlt} className="self-start w-5 aspect-square mr-2" />}
      {text}
    </button>
  );
}

export default SignInButton;
