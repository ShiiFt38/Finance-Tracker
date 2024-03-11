import React from 'react';
import Button from '../Components/Button'
import Header from '../Components/Header';

function LoginPage() {
  return (
    <div className="flex flex-col justify-center bg-white">
    <Header />
    <main className="flex flex-col items-center px-20 py-12 w-full text-sm text-slate-500 max-md:px-5 max-md:max-w-full">
      <section className="flex flex-col px-4 mt-3.5 max-w-full text-base w-[511px]">
        <h1 className="text-3xl font-bold tracking-tighter text-neutral-900 max-md:max-w-full">Welcome back to FinTrackr</h1>
        <p className="mt-4 text-sm leading-5 max-md:mr-2 max-md:max-w-full">Security is our top priority. We use multi-factor authentication to keep your account safe.</p>
        <label className="justify-center items-start py-4 pr-16 pl-4 mt-11 whitespace-nowrap bg-gray-100 rounded-xl leading-[150%] max-md:pr-5 max-md:mt-10 max-md:max-w-full" htmlFor="emailInput">
          Email
          <input id="emailInput" type="email" className="sr-only" />
        </label>
        <label className="justify-center items-start py-4 pr-16 pl-4 mt-14 whitespace-nowrap bg-gray-100 rounded-xl leading-[150%] max-md:pr-5 max-md:mt-10 max-md:max-w-full" htmlFor="passwordInput">
          Password
          <input id="passwordInput" type="password" className="sr-only" />
        </label>
      </section>
      <Button text="Sign in" />
      <div className="mt-3 text-center leading-[150%]">OR</div>
      <Button
        text="Sign in with Google"
        iconsrc="https://icons8.com/icon/17949/google" iconAlt="Google sign-in"
      />
      <div className="mt-16 mb-8 text-center whitespace-nowrap leading-[150%] max-md:mt-10">Forgot your email or password?</div>
    </main>
  </div>
  )
}

export default LoginPage