import React from 'react';
import SignInButton from './SignInButton';

function Header() {
  return (
    <header className="flex flex-col w-full bg-white max-md:max-w-full">
    <div className="flex gap-5 justify-between px-10 py-3.5 w-full font-bold whitespace-nowrap border-b border-solid border-b-gray-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex gap-4 my-auto text-lg tracking-tight text-neutral-900">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0e95cca3038a028279f12806f5c3ea70a9c76d1ff8ff5205b4d4eeef130a621?apiKey=b074e2c085af4116b9f692cd99369e40&" alt="FinTrackr Logo" className="my-auto w-4 aspect-square" />
        <div>FinTrackr</div>
      </div>
      <SignInButton text="Sign up"/>
    </div>
  </header>
  );
};

export default Header