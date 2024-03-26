import React, { useState } from 'react';
import Header from '../Components/Header';
import { Link, useNavigate } from 'react-router-dom';
// import GoogleIcon from '../assets/google.svg'
import Orb from '../Components/Orb';


function LoginPage() {

  const [ loginDetails, setLoginDetails ] = useState({
    email: "",
    password: ""
  });

  const [ message, setMessage ] = useState(' ');

  const navigate = useNavigate();

  const handleChange = (event) => {
    setLoginDetails(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
    console.log(loginDetails)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginDetails)
      });

      const data = await response.json();

      if(response.ok) {
        setMessage(data.message);
        navigate('/Dashboard')
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error: ", error);
      setMessage("Error: " + error.message)
    }
  };

  return (
    <>
    <Header />
    <Orb/>
    <main className="flex flex-col items-center px-20 py-12 w-full text-sm max-md:px-5 max-md:max-w-full">
      <form onSubmit={handleSubmit} className="flex flex-col px-4 mt-3.5 max-w-full w-[511px]">
        <h1 className="text-3xl font-bold max-md:max-w-full">Welcome back to FinTrackr</h1>
        <p className="mt-4 text-sm max-md:mr-2 max-md:max-w-full">Security is our top priority. We use multi-factor authentication to keep your account safe.</p>

          <input 
            id="emailInput" 
            type="email" 
            required
            name='email'
            autocomplete='off'
            onChange={handleChange}
            placeholder='Email' 
            className='justify-center border invalid:border-pink-500 invalid:text-pink-600 items-start py-4 pr-16 pl-4 mt-11 bg-gray-100 rounded-xl max-md:pr-5 max-md:mt-10 max-md:max-w-full'/>


          <input 
            id="passwordInput" 
            type="password" 
            required
            name='password'
            minLength='8'
            onChange={handleChange}
            placeholder='Password' 
            className='justify-center border invalid:border-pink-500 invalid:text-pink-600 items-start py-4 pr-16 pl-4 mt-11 bg-gray-100 rounded-xl max-md:pr-5 max-md:mt-10 max-md:max-w-full' />
            {message && <div>{message}</div>}

            <button className={`flex justify-center align-middle m-auto items-center px-8 py-2.5 mt-3.5 font-bold whitespace-nowrap bg-blue-500 rounded-xl text-white sm:w-[230px] sm:h-[30px] md:h-[35px] hover:bg-[#637587] transition-all duration-1000ms ease-in max-md:px-5 cursor-pointer`}>Sign in</button>
      </form>

      <p className='font-light mt-[30px] text-gray-600'>New to FinTrackR? <Link to='/SignUp' className='font-bold'>Sign up</Link></p>
      <p className='font-light my-[10px]'>OR</p>
      <Link to='/Dashboard'><p className='font-bold'>Try the demo</p></Link>
      {/* <div className="mt-16 mb-8 text-center whitespace-nowrap leading-[150%] max-md:mt-10">Forgot your email or password?</div> */}
    </main>
    </>
  )
}

export default LoginPage