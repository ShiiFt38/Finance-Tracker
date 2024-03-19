import React, { useState } from 'react'
import Header from '../Components/Header'
import Orb from '../Components/Orb'
import { Link } from 'react-router-dom'
import { useAccentColor } from '../Context/AccentColorContext'


const SignUpPage = () => {
    const {accentColor} = useAccentColor();

    const [registrationDetails, setRegistrationDetails] = useState({
        username: '',
        userEmail: '',
        userPassword: ''
    });

    // const [ errors, setErrors ] = useState({})

    const handleChange = (e) => {
        setRegistrationDetails(prevState => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
        console.log(registrationDetails)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const inputStyles = 'justify-center border invalid:border-pink-500 invalid:text-pink-600 items-start py-4 pr-16 pl-4 mt-11 bg-gray-100 rounded-xl max-md:pr-5 max-md:mt-10 max-md:max-w-full'

  return (
    <>
    <Header hidden='hidden'/>
    <Orb/>
    <main className="flex flex-col items-center px-20 py-12 w-full text-sm max-md:px-5 max-md:max-w-full">
        <form className='flex flex-col px-4 max-w-full w-[511px]' onSubmit={handleSubmit}>
            <h1 className='text-3xl font-bold'>Create an Account</h1>
            <p className='mt-4 text-sm'>Security is our top priority. We use multi-factor authentication to keep your account safe.</p>

            <input 
                type="text" 
                placeholder='Name' 
                required
                minLength='3'
                maxLength='16'
                onChange={handleChange} 
                name='username' 
                className={inputStyles}/>

            <input 
                type="email" 
                placeholder='Email' 
                required
                onChange={handleChange} 
                name='userEmail' 
                className={inputStyles}/>

            <input 
                type="password" 
                placeholder='Password'
                required 
                minLength='8'
                onChange={handleChange} 
                name='userPasword' 
                className={inputStyles}/>

            <input 
                type="password" 
                required
                placeholder='Password (Confirm)' 
                className={inputStyles}/>

            <button className={`flex justify-center align-middle m-auto items-center px-8 py-2.5 mt-3.5 font-bold whitespace-nowrap ${accentColor} rounded-xl text-white sm:w-[230px] sm:h-[30px] md:h-[35px] hover:bg-[#637587] transition-all duration-1000ms ease-in max-md:px-5 cursor-pointer`} type='submit'>Create Account</button>
        
        </form>

        <p className='font-light mt-[30px] text-gray-600'>Already have an account? <Link to='/Login' className='font-bold'>Log in</Link></p>
        
    </main>
    </>
  )
}

export default SignUpPage